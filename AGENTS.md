# AI Development Instructions

The repository is authoritative. Source code, configuration, tests, migrations,
documentation, dependencies, and Git state override any remembered claim.

## Execution Rules

1. Inspect the current Git state and relevant files.
2. Follow canonical documentation in [`docs/`](docs/README.md) and existing
   project conventions.
3. Use the repository workflows in [`.ai/commands.md`](.ai/commands.md); do not
   invent AI-specific alternatives.
4. Run appropriate repository validation before considering work complete, and
   report failures honestly.

## Working Memory

- Read [`.ai/README.md`](.ai/README.md) and any relevant local memory in
  `.ai/tasks/`.
- Create task memory from `.ai/tasks/TEMPLATE.md` and keep it concise: record
  conclusions, decisions, progress, meaningful rejected approaches, validation,
  and one next action.
- Do not store transcripts, internal reasoning, large command output, raw diffs,
  secrets, or sensitive data.
- Memory and optional Graphify output are non-authoritative and may be stale.
  Verify important claims against the repository; when they conflict, the
  repository wins.
- Consider validation stale after relevant code, tests, configuration,
  dependencies, or migrations change.

## Git Safety

- Active task memories are local-only. Never stage, commit, push, or include
  `.ai/tasks/<task>.md` in a pull request.
- Never commit, push, merge, create a pull request, or otherwise modify remote
  state unless explicitly requested.
