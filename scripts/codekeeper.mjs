import { spawn } from 'node:child_process'
import { dirname, join } from 'node:path'
import { createInterface } from 'node:readline/promises'
import { fileURLToPath } from 'node:url'

const scriptsDirectory = dirname(fileURLToPath(import.meta.url))
const repositoryRoot = dirname(scriptsDirectory)
const apiDirectory = join(repositoryRoot, 'apps', 'api')
const webDirectory = join(repositoryRoot, 'apps', 'web')
const npmInvocation =
  process.platform === 'win32'
    ? { command: process.env.ComSpec ?? 'cmd.exe', args: ['/d', '/s', '/c', 'npm'] }
    : { command: 'npm', args: [] }

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
  console.log('\nInstalling backend dependencies...')
  await run('uv', ['sync'], apiDirectory)

  console.log('\nInstalling frontend dependencies...')
  await run(npmInvocation.command, [...npmInvocation.args, 'install'], webDirectory)

  console.log('\nProject dependencies installed.')
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
  help    Show this help message`)
}

async function showMenu() {
  const terminal = createInterface({ input: process.stdin, output: process.stdout })

  console.log('\nShard Archive — Codekeeper\n')
  console.log('1. Install project dependencies')
  console.log('2. Start the API and web client')
  console.log('3. Run tests and quality checks')
  console.log('0. Exit\n')

  let choice
  try {
    choice = await terminal.question('Select an option: ')
  } finally {
    terminal.close()
  }

  const command = { 1: 'setup', 2: 'dev', 3: 'check' }[choice.trim()]

  if (choice.trim() === '0') return
  if (!command) throw new Error('Invalid option.')

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
  console.error(`\nCodekeeper error: ${error instanceof Error ? error.message : error}`)
  process.exitCode = 1
}
