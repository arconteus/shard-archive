import { spawn } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptsDirectory = dirname(fileURLToPath(import.meta.url))
const repositoryRoot = dirname(scriptsDirectory)
const npmInvocation =
  process.platform === 'win32'
    ? { command: process.env.ComSpec ?? 'cmd.exe', args: ['/d', '/s', '/c', 'npm'] }
    : { command: 'npm', args: [] }

const processes = [
  spawn('uv', ['run', 'uvicorn', 'shard_archive_api.main:app', '--reload'], {
    cwd: join(repositoryRoot, 'apps', 'api'),
    stdio: 'inherit',
  }),
  spawn(npmInvocation.command, [...npmInvocation.args, 'run', 'dev'], {
    cwd: join(repositoryRoot, 'apps', 'web'),
    stdio: 'inherit',
  }),
]

let stopping = false

function stop(exitCode = 0) {
  if (stopping) return
  stopping = true

  for (const child of processes) {
    if (!child.killed) child.kill()
  }

  process.exitCode = exitCode
}

for (const child of processes) {
  child.on('error', (error) => {
    console.error(`Failed to start a development process: ${error.message}`)
    stop(1)
  })

  child.on('exit', (code, signal) => {
    if (!stopping && signal !== 'SIGINT') {
      stop(code ?? 1)
    }
  })
}

process.on('SIGINT', () => stop())
process.on('SIGTERM', () => stop())

console.log('Starting Shard Archive development servers...')
console.log('API: http://localhost:8000')
console.log('Web: http://localhost:5173')
console.log('Press Ctrl+C to stop both servers.')
