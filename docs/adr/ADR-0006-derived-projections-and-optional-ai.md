# ADR-0006: Treat Projections as Derived and AI as Optional

## Status

Accepted

## Date

2026-08-20

## Context

Graph exploration, search, embeddings, and AI assistance are valuable capabilities, but none is a complete representation of narrative knowledge. Making a graph or model output canonical would lose unstructured Claims, couple the domain to infrastructure, and allow generated interpretations to acquire authority implicitly.

## Decision

Relationship is a derived graph representation projected from meaningfully structured Claims. The knowledge graph is partial and rebuildable, not canonical storage.

Full-text indexes, embeddings, vector indexes, similarity scores, semantic clusters, AI summaries, and RAG context are also derived, rebuildable state. Losing them must not destroy Entity, Source, Fragment, or Claim records.

AI is optional infrastructure behind provider abstractions. It may propose extraction, resolution, Claims, structure, summaries, embeddings, and retrieval results. The Knowledge Engine validates proposals and the user explicitly authorizes canonical mutations. The archive remains usable without an AI model.

Constructor workflows may intentionally mutate canonical knowledge. Sandbox workflows have zero implicit canonical side effects; promotion requires an explicit approval flow.

## Consequences

### Positive

- Canonical knowledge remains portable and provider-independent.
- Derived stores can be optimized or rebuilt without data loss.
- Complex unstructured Claims remain first-class even when absent from the graph.
- AI cannot silently become an author or source of truth.

### Negative

- Projection and index rebuild workflows are required.
- Graph views are intentionally incomplete and must communicate that limitation.
- AI-assisted workflows need explicit proposal and acceptance states.

## Alternatives Considered

A canonical Relationship table and graph database were rejected because they duplicate or privilege graphable knowledge. Persisting AI suggestions as canonical knowledge was rejected because generation is not validation. Provider-specific domain APIs were rejected because AI and embedding technology must remain replaceable.

## Review

Revisit only when implementation demonstrates that a derived representation cannot be rebuilt from canonical knowledge or that a new authority boundary is required.
