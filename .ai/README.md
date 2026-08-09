# AI Development Harness

This provider-agnostic harness gives coding agents compact, persistent working
memory. The repository owns the context; the agent is replaceable.

## Authority

Use this order of truth:

1. Repository code, configuration, tests, dependencies, documentation, and Git.
2. Long-lived project knowledge in `docs/`, `README.md`, and ADRs.
3. Local task memory in `.ai/tasks/`.

The repository always wins. Correct stale memory instead of trusting it.

## Session Workflow

1. Inspect HEAD, working-tree state, and relevant files.
2. Inspect `.ai/tasks/` and read the relevant active task memory when it exists.
3. Consult available Graphify context before repeating broad searches.
4. Verify memory and Graphify claims against authoritative files.
5. Update memory after meaningful findings, decisions, progress, or validation.
6. Run the appropriate Codekeeper validation before completion.
7. Record one concrete next action for the next local session or agent.

## Graphify

Use existing `graphify-out/GRAPH_REPORT.md`, `graph.json`, or Graphify queries to
narrow discovery and reduce repeated searches. Graphify is optional,
non-authoritative, and potentially stale. Verify implementation-relevant claims
against the repository. Missing output must never block work. See the
[Graphify guide](../docs/tools/graphify.md).

## Local Task Memory

Create one private memory per active task by copying `.ai/tasks/TEMPLATE.md` to
a short kebab-case filename. Agents manage these Markdown files with ordinary
file reading and editing operations; no custom memory tool is required.

Persist conclusions, evidence paths, decisions, rejected approaches, progress,
validation state, known issues, and the next action. Do not store transcripts,
chain-of-thought, copied code, large diffs, command logs, speculation, secrets,
credentials, sensitive customer data, or unnecessary personal data.

Active memories are ignored by Git. Never stage, commit, push, attach, or
transfer them through a pull request. Only `TEMPLATE.md` is shared. Move
team-relevant knowledge to code, tests, docs, an ADR, an issue, or the pull
request description.

## Staleness and Validation

Assume memory and Graphify context may be stale after changes to HEAD, relevant
files, dependencies, configuration, or migrations. When uncertain, verify and
rerun checks.

Record each validation result with the short HEAD SHA, clean/dirty state, and
relevant changed paths. A pass applies only to that repository state.

Use the concise [repository command reference](commands.md). Open the full
[Codekeeper guide](../docs/tools/codekeeper.md) only for details or
troubleshooting. Report failures honestly and do not create AI-only alternatives
to those commands.

## Provider Compatibility

`AGENTS.md`, this protocol, the task template, project documentation, and
Codekeeper are canonical. Provider-specific adapters may point here but must not
duplicate these instructions.
