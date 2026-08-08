# Codekeeper

## Purpose

Codekeeper is the interactive development helper for Shard Archive. It provides
one entry point for installing dependencies, starting the local applications,
and running repository checks.

Codekeeper coordinates the existing backend and frontend commands. It does not
combine their dependencies or change their architectural independence.

## Requirements

Install the following tools before using Codekeeper:

- [Node.js](https://nodejs.org/) and npm;
- [uv](https://docs.astral.sh/uv/) for the Python API.

Git is also required when working from a cloned repository.

## Initial Setup

Clone the repository and start Codekeeper:

```shell
git clone https://github.com/arconteus/shard-archive.git
cd shard-archive
npm run codekeeper
```

No separate root installation command is required. On its first run, Codekeeper
detects whether its `@clack/prompts` dependency is missing and installs the root
development dependencies before opening the menu. Application dependencies
remain inside `apps/api` and `apps/web`.

Select **Install project dependencies** on the first run. Codekeeper prepares
both applications while preserving their separate environments.

## Interactive Actions

The Codekeeper menu provides these actions:

- **Start development environment** starts the FastAPI server and Vite client;
- **Install project dependencies** installs API and web dependencies;
- **Run tests and quality checks** runs the repository validation script;
- **Fix project formatting** applies Ruff and Prettier to the project;
- **Exit** closes Codekeeper without starting another process.

Use the arrow keys to select an action and press Enter to run it. Press Ctrl+C
to cancel the menu or stop the development servers.

## Direct Commands

Actions can be passed explicitly to Codekeeper without opening the menu:

```shell
npm run codekeeper -- setup
npm run codekeeper -- dev
npm run codekeeper -- check
npm run codekeeper -- format
npm run codekeeper -- help
```

Direct commands are useful in scripts and terminals where interactive input is
not available. CI continues to use the underlying non-interactive scripts.

## Interface

Codekeeper uses `#FF7DAD` as its primary color. The Unicode banner is shown when
the terminal is wide enough and omitted in narrow terminals.

Set the standard `NO_COLOR` environment variable to disable custom colors. In
PowerShell:

```powershell
$env:NO_COLOR = "1"
npm run codekeeper
```

The variable applies only to the current PowerShell session.

## Windows Troubleshooting

If PowerShell prevents `npm.ps1` from running because script execution is
disabled, invoke the Windows command shim directly:

```powershell
npm.cmd run codekeeper
```

If npm reports a certificate-chain error in a managed Windows environment, make
Node use the system certificate store for the current session. Codekeeper does
this automatically for its first-run installation on Windows, but the setting
can also be applied manually when troubleshooting:

```powershell
$env:NODE_USE_SYSTEM_CA = "1"
npm.cmd run codekeeper
```

Do not disable npm TLS verification to work around certificate errors.

## Repository Policy

Codekeeper is development tooling rather than part of the Shard Archive runtime.
Its root dependency must not be moved into the API or web application dependency
files. New actions should coordinate focused scripts and should not contain
application business logic.
