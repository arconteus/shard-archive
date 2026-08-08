import { spawn } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptsDirectory = dirname(fileURLToPath(import.meta.url))
const repositoryRoot = dirname(scriptsDirectory)
const npmInvocation =
  process.platform === 'win32'
    ? { command: process.env.ComSpec ?? 'cmd.exe', args: ['/d', '/s', '/c', 'npm'] }
    : { command: 'npm', args: [] }

const formatters = [
  {
    label: 'backend',
    command: 'uv',
    args: ['run', 'ruff', 'format', '.'],
    directory: join(repositoryRoot, 'apps', 'api'),
  },
  {
    label: 'frontend',
    command: npmInvocation.command,
    args: [...npmInvocation.args, 'run', 'format'],
    directory: join(repositoryRoot, 'apps', 'web'),
  },
]

function run({ command, args, directory }) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: directory, stdio: 'inherit' })

    child.on('error', reject)
    child.on('exit', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`${command} exited with code ${code ?? 'unknown'}`))
    })
  })
}

try {
  for (const formatter of formatters) {
    console.log(`Formatting ${formatter.label}...`)
    await run(formatter)
  }

  console.log('Project formatting complete.')
} catch (error) {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
}
