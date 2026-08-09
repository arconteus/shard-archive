import { spawnSync } from 'node:child_process'
import { access, readFile, rm, stat, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { cancel, confirm, intro, isCancel, log, outro, text } from '@clack/prompts'

const scriptsDirectory = dirname(fileURLToPath(import.meta.url))
const repositoryRoot = dirname(scriptsDirectory)
const aiDirectory = join(repositoryRoot, '.ai')
const tasksDirectory = join(aiDirectory, 'tasks')
const templatePath = join(tasksDirectory, 'TEMPLATE.md')
const activeTaskPath = join(aiDirectory, 'active-task')
const taskNamePattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

function git(args) {
  return spawnSync('git', args, {
    cwd: repositoryRoot,
    encoding: 'utf8',
    windowsHide: true,
  })
}

async function exists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

async function activeTaskName() {
  if (!(await exists(activeTaskPath))) return null

  const name = (await readFile(activeTaskPath, 'utf8')).trim()
  if (!taskNamePattern.test(name)) {
    throw new Error(`Invalid task name in .ai/active-task: ${name || '<empty>'}`)
  }

  return name
}

function taskPath(name) {
  return join(tasksDirectory, `${name}.md`)
}

function displayName(name) {
  return name
    .split('-')
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(' ')
}

function section(content, heading) {
  const pattern = new RegExp(`## ${heading}\\r?\\n\\r?\\n([\\s\\S]*?)(?=\\r?\\n## |$)`)
  return content.match(pattern)?.[1].trim() || 'Not recorded'
}

async function createMemory(requestedName) {
  const current = await activeTaskName()
  if (current) {
    throw new Error(`Task "${current}" is already active. Close it before creating another.`)
  }

  let name = requestedName
  if (!name) {
    name = await text({
      message: 'Name the task using kebab-case',
      placeholder: 'add-fragment-editor',
      validate(value) {
        if (!taskNamePattern.test(value)) return 'Use lowercase letters, numbers, and hyphens.'
      },
    })

    if (isCancel(name)) {
      cancel('Task creation cancelled')
      return
    }
  }

  if (!taskNamePattern.test(name)) {
    throw new Error('Task names must use lowercase letters, numbers, and hyphens.')
  }

  const destination = taskPath(name)
  if (await exists(destination)) {
    throw new Error(`Task memory already exists: .ai/tasks/${name}.md`)
  }

  const template = await readFile(templatePath, 'utf8')
  const memory = template
    .replace('<short descriptive name>', displayName(name))
    .replace('`investigating | implementing | validating | blocked | completed`', '`investigating`')

  await writeFile(destination, memory, { encoding: 'utf8', flag: 'wx' })
  await writeFile(activeTaskPath, `${name}\n`, 'utf8')

  outro(`Created local task memory: .ai/tasks/${name}.md`)
}

async function showStatus() {
  const name = await activeTaskName()
  if (!name) {
    log.info('No active local task memory.')
    return
  }

  const path = taskPath(name)
  if (!(await exists(path))) {
    throw new Error(`Active task memory is missing: .ai/tasks/${name}.md`)
  }

  const content = await readFile(path, 'utf8')
  const head = git(['rev-parse', '--short', 'HEAD'])
  const workingTree = git(['status', '--short'])

  log.info(`Task: ${name}`)
  log.message(`Status: ${section(content, 'Status')}`)
  log.message(`HEAD: ${head.status === 0 ? head.stdout.trim() : 'unavailable'}`)
  log.message(`Working tree: ${workingTree.stdout.trim() ? 'dirty' : 'clean'}`)
  log.message(`Next action: ${section(content, 'Next Action')}`)
}

async function closeMemory() {
  const name = await activeTaskName()
  if (!name) {
    log.info('No active local task memory.')
    return
  }

  const path = taskPath(name)
  if (!(await exists(path))) {
    throw new Error(`Active task memory is missing: .ai/tasks/${name}.md`)
  }

  const approved = await confirm({
    message: `Mark "${name}" completed and clear the active-task pointer?`,
    initialValue: false,
  })

  if (isCancel(approved) || !approved) {
    cancel('Task close cancelled')
    return
  }

  const content = await readFile(path, 'utf8')
  const completed = content.replace(/(## Status\r?\n\r?\n)[^\r\n]+/, '$1`completed`')
  await writeFile(path, completed, 'utf8')
  await rm(activeTaskPath)

  outro(`Closed local task memory: .ai/tasks/${name}.md`)
}

async function checkHarness() {
  const errors = []
  const warnings = []
  const requiredFiles = [
    'AGENTS.md',
    '.ai/README.md',
    '.ai/commands.md',
    '.ai/tasks/TEMPLATE.md',
  ]

  for (const path of requiredFiles) {
    if (!(await exists(join(repositoryRoot, path)))) errors.push(`Missing ${path}`)
  }

  if (await exists(templatePath)) {
    const template = await readFile(templatePath, 'utf8')
    const requiredSections = [
      'Objective',
      'Status',
      'Relevant Files',
      'Confirmed Findings',
      'Decisions',
      'Rejected Approaches',
      'Progress',
      'Validation',
      'Known Issues',
      'Next Action',
    ]

    for (const heading of requiredSections) {
      if (!template.includes(`## ${heading}`)) errors.push(`Template is missing: ${heading}`)
    }
  }

  if (git(['check-ignore', '-q', '--no-index', '.ai/tasks/example-task.md']).status !== 0) {
    errors.push('Local task memories are not ignored by Git')
  }
  if (git(['check-ignore', '-q', '--no-index', '.ai/active-task']).status !== 0) {
    errors.push('.ai/active-task is not ignored by Git')
  }
  if (git(['check-ignore', '-q', '.ai/tasks/TEMPLATE.md']).status === 0) {
    errors.push('.ai/tasks/TEMPLATE.md must remain version-controlled')
  }

  const tracked = git(['ls-files', '.ai/tasks/*.md'])
  const unexpectedTracked = tracked.stdout
    .split(/\r?\n/)
    .filter(Boolean)
    .filter((path) => path !== '.ai/tasks/TEMPLATE.md')
  if (unexpectedTracked.length) {
    errors.push(`Tracked local task memories: ${unexpectedTracked.join(', ')}`)
  }

  const current = await activeTaskName()
  if (current && !(await exists(taskPath(current)))) {
    errors.push(`Active task memory is missing: .ai/tasks/${current}.md`)
  }

  const graphPath = join(repositoryRoot, 'graphify-out', 'graph.json')
  if (await exists(graphPath)) {
    const graph = await stat(graphPath)
    log.success(`Graphify context found (${graph.mtime.toISOString()})`)
    if (git(['status', '--short']).stdout.trim()) {
      warnings.push('Working tree is dirty; verify Graphify findings against changed files')
    }
  } else {
    warnings.push('Graphify context unavailable; repository inspection remains available')
  }

  for (const warning of warnings) log.warn(warning)
  for (const error of errors) log.error(error)

  if (errors.length) throw new Error(`AI harness check failed with ${errors.length} error(s)`)
  outro('AI harness check passed')
}

function printHelp() {
  console.log(`AI harness commands:
  memory:new [task-name]  Create and activate local task memory
  memory:status           Show active task state
  memory:close            Complete and deactivate the current task
  ai:check                Validate the harness and local-memory policy`)
}

const command = process.argv[2]

try {
  intro('Shard Archive AI Harness')

  if (command === 'memory:new') await createMemory(process.argv[3])
  else if (command === 'memory:status') await showStatus()
  else if (command === 'memory:close') await closeMemory()
  else if (command === 'ai:check') await checkHarness()
  else {
    printHelp()
    if (command && command !== 'help') throw new Error(`Unknown AI harness command: ${command}`)
  }
} catch (error) {
  log.error(error instanceof Error ? error.message : String(error))
  process.exitCode = 1
}
