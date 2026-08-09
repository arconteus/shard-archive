# AI Development Instructions

The repository is authoritative. Source code, configuration, tests,
documentation, dependencies, and Git state override any remembered claim.

Before changing the repository:

1. Inspect the current Git state and relevant files.
2. Read [the documentation index](docs/README.md) and the documentation relevant
   to the task.
3. Read [.ai/README.md](.ai/README.md) and inspect `.ai/tasks/` for an active task
   memory.
4. When local Graphify output is available, use it as an early navigation aid
   before repeating broad repository searches. Follow the
   [Graphify guide](docs/tools/graphify.md).
5. Verify important memory and Graphify claims when HEAD or relevant files have
   changed.

During work, keep the active task memory concise and update it after meaningful
findings, decisions, rejected approaches, progress, or validation. Persist
conclusions and evidence references, not internal reasoning or transcripts.
Active task memories are local-only and must never be staged, committed, pushed,
or included in a pull request.

Graphify is optional and non-authoritative. Use it to narrow file and
relationship discovery, then verify relevant conclusions against source code,
configuration, tests, and canonical documentation. Missing or stale Graphify
output must never block progress.

Use repository-provided Codekeeper commands instead of inventing equivalent
setup, development, formatting, or validation commands. Run appropriate checks
before declaring work complete and report every failure honestly.

Never store secrets or sensitive data in task memory. Never commit, push, merge,
open pull requests, or otherwise modify remote state unless the user explicitly
requests it.
