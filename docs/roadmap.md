# Shard Archive — Roadmap

Versions are meaningful product milestones rather than deadlines. Implementation evidence may move features between releases.

## v0.1 — Canonical Core

Objective: establish local projects and canonical narrative knowledge before advanced projections.

- Entity, Source, Fragment, and Claim management
- Entity mentions and Claim evidence
- Human-readable Claims with optional structured form
- Basic assertion mode, truth assessment, perspective, and temporal context
- Text search and import/export
- SQLite persistence behind repository abstractions

## v0.2 — Graph and Search Projections

Objective: improve exploration using rebuildable views over canonical knowledge.

- Graph projection from structured Claims
- Visualization, filtering, and graph traversal
- Claim and evidence exploration
- Entity resolution and merging
- Improved taxonomy and search
- Saved layouts as derived user-interface state

## v0.3 — Optional AI Assistance

Objective: assist organization without granting AI canonical authority.

- Provider abstraction, with Ollama as one possible adapter
- Entity extraction and resolution suggestions
- Claim and structured-claim suggestions
- Embeddings, semantic retrieval, and similar-fragment discovery
- Summaries and contradiction candidates
- Explicit Constructor approval for promoted suggestions

## v0.4 — Productivity

- Advanced filters and bulk editing
- Better importers and evidence workflows
- Keyboard shortcuts and command palette
- Performance improvements

## v1.0 — Stable

- Stable API and domain contracts
- Complete documentation and reliable import/export
- Robust testing and production-ready local architecture
- Plugin-ready boundaries

## Future Ideas

Collaboration, cloud synchronization, richer temporal exploration, mobile clients, and multiple AI providers remain possible but do not define v0.1.
