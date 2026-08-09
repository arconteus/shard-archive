import { spawn } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptsDirectory = dirname(fileURLToPath(import.meta.url))
const repositoryRoot = dirname(scriptsDirectory)
const apiDirectory = join(repositoryRoot, 'apps', 'api')
const webDirectory = join(repositoryRoot, 'apps', 'web')
const npmInvocation =
  process.platform === 'win32'
    ? { command: process.env.ComSpec ?? 'cmd.exe', args: ['/d', '/s', '/c', 'npm'] }
    : { command: 'npm', args: [] }
const colorEnabled = !('NO_COLOR' in process.env)
const pink = (text) => (colorEnabled ? `\u001B[38;2;255;125;173m${text}\u001B[39m` : text)

async function loadPrompts() {
  try {
    return await import('@clack/prompts')
  } catch (error) {
    const missingClack =
      error instanceof Error &&
      error.code === 'ERR_MODULE_NOT_FOUND' &&
      error.message.includes('@clack/prompts')

    if (!missingClack) throw error

    console.log(pink('Preparing Codekeeper for its first run...'))

    if (process.platform === 'win32' && !process.env.NODE_USE_SYSTEM_CA) {
      process.env.NODE_USE_SYSTEM_CA = '1'
    }

    await run(npmInvocation.command, [...npmInvocation.args, 'install'], repositoryRoot)
    return import('@clack/prompts')
  }
}

const { cancel, intro, isCancel, log, outro, select } = await loadPrompts()
const archiveKeeperArt = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡴⠚⠋⢹⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠖⠋⠁⠀⠀⠀⢸⠃⠀⠀⠀⣠⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⠀⠀⠀⠀⢠⠟⠀⣀⡴⠋⡁⠸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠃⣰⠀⠀⠀⠀⠀⣠⢏⡤⠞⢁⡴⠋⠀⠀⡇⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⡇⠀⠀⠀⠀⣴⠿⠋⣠⠞⠁⠀⠀⠀⣸⠛⠛⠛⠛⠲⢦⣄⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠖⠻⣦⡧⠀⠀⣤⠞⠁⣠⠞⠁⠀⠀⠀⣀⡴⠃⠀⠀⠀⠀⠀⠀⠈⠙⢦⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠏⠀⠀⠀⠀⠃⠀⠀⠀⠀⠀⣿⣤⣤⡴⠶⠞⠻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⡄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣆⠀
⣠⣶⣤⣀⡀⠀⠀⠀⠀⠀⢠⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡀
⢿⣄⠈⠁⣽⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣇
⠈⠛⠓⠚⠋⠀⠀⠀⠀⠀⢸⡇⢰⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠘⣷⠘⣿⣿⠅⠀⢷⡴⠀⠀⠀⠀⠘⣿⣿⡇⠈⣳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇
⠀⠀⠀⠀⠀⠀⠀⢠⠤⠒⢲⡟⠃⠈⠁⠀⠀⠈⠁⠀⠀⠀⠀⠀⠙⠋⠣⠼⢛⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢯⠙⠛⠒⠖⠚⠛⠛⠷⠦⠤⠤⠤⠴⠋⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠏⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠾⠋⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣻⣦⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡶⣿⠀⢀⣉⡏⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠙⠛⠛⠚⠉⠉⠙⠛⠛⠛⠛⠛⠓⠚⠛⠋⠙⠓⠛⠒⠓⠋⠀⠀⠀⠀⠀⠀`

const actions = {
  setup: {
    label: 'Install project dependencies',
    run: installDependencies,
  },
  dev: {
    label: 'Start the API and web client',
    run: () => run(process.execPath, [join(scriptsDirectory, 'dev.mjs')]),
  },
  check: {
    label: 'Run tests and quality checks',
    run: () => run(process.execPath, [join(scriptsDirectory, 'check.mjs')]),
  },
  format: {
    label: 'Fix project formatting',
    run: () => run(process.execPath, [join(scriptsDirectory, 'format.mjs')]),
  },
  'memory:new': {
    label: 'Create local task memory',
    run: () => runAiHarness('memory:new'),
  },
  'memory:status': {
    label: 'Show active task memory',
    run: () => runAiHarness('memory:status'),
  },
  'memory:close': {
    label: 'Close active task memory',
    run: () => runAiHarness('memory:close'),
  },
  'ai:check': {
    label: 'Check AI harness',
    run: () => runAiHarness('ai:check'),
  },
}

function runAiHarness(command) {
  return run(process.execPath, [join(scriptsDirectory, 'ai-harness.mjs'), command, ...process.argv.slice(3)])
}

function run(command, args, directory = repositoryRoot) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: directory, stdio: 'inherit' })

    child.on('error', (error) => {
      reject(new Error(`Could not run ${command}: ${error.message}`))
    })
    child.on('exit', (code, signal) => {
      if (code === 0 || signal === 'SIGINT') resolve()
      else reject(new Error(`${command} exited with code ${code ?? 'unknown'}`))
    })
  })
}

async function installDependencies() {
  log.step(pink('Installing backend dependencies'))
  await run('uv', ['sync'], apiDirectory)

  log.step(pink('Installing frontend dependencies'))
  await run(npmInvocation.command, [...npmInvocation.args, 'install'], webDirectory)

  log.success(pink('Project dependencies installed'))
}

function printHelp() {
  console.log(`Shard Archive Codekeeper

Usage:
  npm run codekeeper
  npm run codekeeper -- <command>

Commands:
  setup   Install backend and frontend dependencies
  dev     Start the API and web client
  check   Run tests and quality checks
  format  Fix backend and frontend formatting
  memory:new [name]  Create and activate local task memory
  memory:status      Show active task memory
  memory:close       Complete and deactivate the active task
  ai:check           Validate the AI harness
  help    Show this help message`)
}

async function showMenu() {
  if ((process.stdout.columns ?? 80) >= 66) {
    console.log(pink(archiveKeeperArt))
  }

  intro(pink('◆ SHARD ARCHIVE · CODEKEEPER'))

  const command = await select({
    message: pink('What would you like to do?'),
    options: [
      {
        value: 'dev',
        label: `${pink('◆')} Start development environment`,
        hint: 'API + web',
      },
      {
        value: 'setup',
        label: `${pink('◆')} Install project dependencies`,
        hint: 'uv + npm',
      },
      {
        value: 'check',
        label: `${pink('◆')} Run tests and quality checks`,
        hint: 'backend + frontend',
      },
      {
        value: 'format',
        label: `${pink('◆')} Fix project formatting`,
        hint: 'Ruff + Prettier',
      },
      {
        value: 'memory:new',
        label: `${pink('◆')} Create local task memory`,
        hint: 'private + ignored',
      },
      {
        value: 'memory:status',
        label: `${pink('◆')} Show active task memory`,
        hint: 'status + next action',
      },
      {
        value: 'memory:close',
        label: `${pink('◆')} Close active task memory`,
        hint: 'confirmation required',
      },
      {
        value: 'ai:check',
        label: `${pink('◆')} Check AI harness`,
        hint: 'policy + Graphify',
      },
      { value: 'exit', label: `${pink('◇')} Exit` },
    ],
  })

  if (isCancel(command)) {
    cancel(pink('Operation cancelled'))
    return
  }

  if (command === 'exit') {
    outro(pink('See you in the Archive'))
    return
  }

  outro(pink(actions[command].label))
  await actions[command].run()
}

async function main() {
  const command = process.argv[2]

  if (!command) {
    await showMenu()
    return
  }

  if (command === 'help' || command === '--help' || command === '-h') {
    printHelp()
    return
  }

  const action = actions[command]
  if (!action) {
    printHelp()
    throw new Error(`Unknown command: ${command}`)
  }

  await action.run()
}

try {
  await main()
} catch (error) {
  log.error(pink(`Codekeeper error: ${error instanceof Error ? error.message : error}`))
  process.exitCode = 1
}
