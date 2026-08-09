# AI Development Harness

## Purpose

This directory provides provider-agnostic working memory for coding tasks. Any
coding agent or human developer can use it by reading Markdown and running the
repository commands.

The repository owns the working context. The agent is replaceable.

This is not an autonomous agent framework. It does not provide orchestration,
provider APIs, background processes, code generation, or remote Git operations.

## Sources of Truth

Use these sources in descending order of authority:

1. **Repository truth:** code, configuration, tests, dependencies,
   documentation, migrations, and Git state.
2. **Project knowledge:** long-lived information in `docs/`, `README.md`, and
   Architecture Decision Records.
3. **Task working memory:** temporary findings and state in `.ai/tasks/`.

When task memory contradicts the repository, the repository wins. Correct the
memory rather than treating it as an override.

Do not copy long-lived architecture or development documentation into task
memory. Link to its canonical location.

## Graphify Context

When Graphify output is available locally, consult it early to avoid repeating
broad searches and rediscovering repository relationships. Prefer existing
artifacts such as `graphify-out/GRAPH_REPORT.md` and `graphify-out/graph.json`,
or use Graphify queries to narrow the files that require direct inspection.

Graphify is a navigation aid, not a source of truth. Verify every finding that
affects implementation or a decision against source code, configuration, tests,
or canonical documentation. Do not copy an entire Graphify report into task
memory; persist only the confirmed conclusion and useful evidence paths.

Assume Graphify context may be stale when HEAD, dependencies, or relevant files
changed after the graph was generated. If freshness cannot be established, use
the graph only as a hint and verify aggressively. Rebuild it when doing so is
likely to save more investigation than it costs, following the
[Graphify guide](../docs/tools/graphify.md). If Graphify is unavailable or its
output is missing, continue with normal repository inspection without treating
that as a blocker.

## Task Memory Workflow

Use one Markdown file per active task:

```text
.ai/tasks/<short-task-name>.md
```

Copy `.ai/tasks/TEMPLATE.md`, choose a stable kebab-case name, and complete only
the sections useful to the task.

At the beginning of a session:

1. Inspect Git HEAD, working-tree state, and relevant files.
2. Read the active task memory, if one exists.
3. Consult available Graphify context before repeating broad discovery work.
4. Verify remembered and Graphify claims affected by repository changes.
5. Set the task status and next action to reflect current reality.

During a session, update memory after meaningful discoveries, decisions,
rejected approaches, completed work, or validation. Do not update it after every
command.

At the end of a local session or at completion:

1. Record concise progress and known issues.
2. Record validation against the repository state it tested.
3. Leave one concrete next action.
4. Promote durable decisions to project documentation or an ADR when warranted.
5. Mark the task `completed`, or delete it later when it no longer has local
   continuity value.

## Memory Hygiene

Task memory is a personal engineering checkpoint, not a transcript. Keep it
small and immediately understandable to a later session or replacement agent
working in the same local checkout.

Persist conclusions, evidence references, decisions, and state -- not internal
reasoning.

Store:

- the current objective and status;
- paths confirmed to be relevant;
- concise findings supported by repository evidence;
- decisions and short rationale;
- rejected approaches worth not repeating;
- completed and remaining work;
- validation results and their repository state;
- known issues and the next action.

Do not store:

- command logs or full stack traces;
- copied source files or large diffs;
- conversations or chain-of-thought;
- speculative reasoning;
- facts that are trivial to rediscover;
- passwords, API keys, tokens, credentials, or production secrets;
- sensitive customer data or unnecessary personal data.

Task files must be safe for other contributors to inspect.

## Staleness and Validation

Assume memory may be stale whenever:

- Git HEAD changed;
- relevant files or dependencies changed;
- another developer changed the branch;
- the task resumed after substantial repository changes;
- a remembered claim conflicts with current files.

Record validation with a lightweight repository-state identifier:

- the short Git commit SHA;
- whether the working tree was clean or dirty;
- when dirty, the relevant changed paths covered by the check.

Example:

| Check | Result | Repository state |
| --- | --- | --- |
| Codekeeper checks | PASS | `HEAD a1b2c3d; dirty: apps/web/src/App.vue` |

A recorded pass means the check passed for that state. It does not mean the
check never needs to run again. Rerun validation when relevant code,
configuration, dependencies, or migrations changed. When uncertain, rerun it.
Correctness is more important than avoiding compute.

## Repository Commands

Use Codekeeper as the shared interface for humans and coding agents:

```shell
npm run codekeeper -- setup
npm run codekeeper -- dev
npm run codekeeper -- format
npm run codekeeper -- check
```

Do not create AI-specific alternatives for these workflows. A task memory may
record a narrower check when justified, but should explain why the full check
was not run.

## Local-Only Task Memory

Active files in `.ai/tasks/` are individual working memory. They are ignored by
Git and must not be staged, committed, pushed, attached to a pull request, or
used as a handoff between people. Only `.ai/tasks/TEMPLATE.md` is shared through
version control.

This policy keeps personal investigation state and temporary task context out
of repository history. It supports continuity between sessions or replaceable
agents operating in the same local checkout. It does not provide automatic
continuity across developers, clones, or machines.

Knowledge that another contributor needs must move to its appropriate shared
location: source code, tests, project documentation, an ADR, an issue, or the
pull request description. Do not bypass this policy with `git add -f`.

Ignored task memory is still not a safe place for secrets. Do not store private
credentials, sensitive customer data, or unnecessary personal data in it.

## Provider Compatibility

`AGENTS.md`, this document, repository documentation, and Codekeeper are the
canonical interface. Provider-specific instruction files should not duplicate
these rules. If a future tool requires an adapter, keep it to a short pointer to
`AGENTS.md`.
