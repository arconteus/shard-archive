# AI Harness Commands

Run these commands through Codekeeper from the repository root.

## Create Task Memory

```shell
npm run codekeeper -- memory:new <task-name>
```

Creates `.ai/tasks/<task-name>.md` from the shared template and writes the local
`.ai/active-task` pointer. Names must use lowercase kebab-case. Creation fails if
another task is active or a memory with that name already exists.

Both generated files remain local and ignored by Git.

## Show Task Status

```shell
npm run codekeeper -- memory:status
```

Shows the active task name, recorded status, current HEAD, clean or dirty Git
state, and next action. It does not modify the memory.

## Close Task Memory

```shell
npm run codekeeper -- memory:close
```

Requires human confirmation. It marks the active task `completed` and removes
the pointer. It does not delete the local memory file.

## Check the Harness

```shell
npm run codekeeper -- ai:check
```

Validates required harness files, template sections, Git ignore rules, the
active pointer, and accidental tracking of private memories. It also reports
Graphify availability. Missing Graphify output is a warning, not a failure.

## General Repository Workflows

Setup, development, formatting, tests, and builds are shared human and agent
workflows. Use the commands documented in the
[Codekeeper guide](../docs/tools/codekeeper.md); do not implement AI-only
alternatives.
