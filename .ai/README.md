# AI Development Harness

> The repository owns the working context. The agent is replaceable.

This provider-agnostic harness provides compact working memory and shared,
deterministic workflows. It is an aid to development, not an AI framework.

## Authority

Source code, configuration, tests, migrations, dependencies, canonical
documentation, and Git state are authoritative. Local task memory is an
optimization for continuity and may be stale. If memory contradicts the
repository, the repository wins.

## Goals

The harness reduces repeated exploration, preserves meaningful findings across
context compaction and interrupted sessions, helps another compatible agent
resume work, records important task decisions and rejected approaches, and
exposes the same deterministic repository workflows used by humans.

## Non-Goals

Version 0.1 does not provide agent orchestration, autonomous workflows, MCP
infrastructure, vector databases, embeddings, RAG, semantic memory, provider
APIs, automatic task routing, automatic commits, pushes, or pull requests, or
AI-specific implementations of repository commands. Add none of these without
demonstrated need from real development work.

## Responsibility Boundaries

- `AGENTS.md` defines global, high-priority agent behavior.
- `.ai/README.md` defines the harness and memory protocol.
- `.ai/commands.md` lists deterministic repository workflows.
- `.ai/tasks/` contains temporary local working memory.
- `docs/` contains canonical project and architecture knowledge.

Task memory must not become a second documentation system. Promote durable
knowledge to code, tests, documentation, an ADR, an issue, or a pull request as
appropriate; retain only a concise reference in task memory when useful.

## Working Memory Protocol

A sufficiently complex active task may use one local Markdown file named
`.ai/tasks/<kebab-case-task-name>.md`, created from `.ai/tasks/TEMPLATE.md`. It
supports context compaction, interrupted or later sessions, agent switching, and
avoiding expensive rediscovery.

Store conclusions and state, with evidence paths where useful. For example:

> `ProjectRepository` belongs to the application boundary and must not depend
> on SQLAlchemy.

Do not store conversation transcripts, chain-of-thought or other internal
reasoning, entire command outputs, copied source, stack traces available
elsewhere, large diffs, speculative brainstorming, or trivial discoveries.
Never store passwords, API keys, tokens, credentials, production secrets,
sensitive customer information, or unnecessary personal data. Prefer a concise
conclusion plus evidence and state; consolidate memories that grow large.

Keep `Rejected Approaches` for meaningful negative conclusions whose
rediscovery would be costly. Do not record routine failed edits, syntax errors,
or every discarded idea.

Active task memories are ignored by Git and must never be staged, committed,
pushed, attached, or included in a pull request. Only `TEMPLATE.md` is shared.

## Validation Semantics

A recorded `PASS` means the command passed only for the repository state
described by `Valid for`. Validation supports `NOT RUN`, `PASS`, `FAIL`, and
`STALE`. If relevant source code, tests, configuration, dependencies, or
migrations change, consider the result `STALE`. When applicability is uncertain,
rerun the check. Correctness takes priority over saving compute.

Do not add Git SHA tracking, content fingerprints, validation caches, dependency
graphs, or automatic selective test execution for v0.1. Use the
[repository command reference](commands.md), and report failures honestly.

## Recommended Workflow

### Start

1. Read `AGENTS.md` and inspect Git state.
2. Read relevant canonical documentation and active task memory, when present.
3. Verify important remembered assumptions before relying on them.

### During Work

1. Keep the repository authoritative.
2. Update memory after meaningful findings, decisions, progress, or validation.
3. Record rejected approaches only when they prevent expensive rediscovery.
4. Keep progress resumable and mark invalidated validation `STALE`.

### Completion

1. Run appropriate repository validation and record the result.
2. Resolve or report failures honestly.
3. Update task status and one concrete next action.
4. Promote durable knowledge to canonical documentation when necessary.

## Optional Graphify Navigation

Existing `graphify-out/` data or Graphify queries may narrow repository
exploration, but Graphify is optional, non-authoritative, and potentially stale.
Its absence must never block work, and consequential claims must be verified
against source files. See the [Graphify guide](../docs/tools/graphify.md).

## Provider Independence

A compatible coding agent needs only to read repository files and instructions,
inspect Git state, edit Markdown, and execute repository commands. The harness
requires no particular model, provider, coding-agent product, API, or proprietary
memory mechanism.

## Design Constraint

> The harness should remain boring.

It consists of executable truth, canonical documentation, deterministic
commands, and compact local working memory. New AI infrastructure requires
evidence that this small approach is insufficient; the harness must not become
another system developers need to maintain.
