# Shard Archive Documentation

Shard Archive is a local-first narrative knowledge engine for complex fictional worlds. Its knowledge graph is a derived exploration capability.

## Product

- [Project Vision](vision.md)
- [Project Philosophy](philosophy.md)
- [Product Requirements](product-requirements.md)
- [Roadmap](roadmap.md)
- [Glossary](glossary.md)

## Architecture

- [Architecture Overview](architecture/overview.md)
- [Knowledge Engine](architecture/knowledge-engine.md)
- [Graph Projection](domain/relationship.md)

## Domain Model

- [Entity](domain/entity.md)
- [Source](domain/source.md)
- [Fragment](domain/fragment.md)
- [Claim](domain/claim.md)
- [Graph Projection (formerly Relationship)](domain/relationship.md)
- [World](domain/world.md)
- [Taxonomy](domain/taxonomy.md)

Entity, Source, Fragment, and Claim are the four canonical knowledge primitives. World and Taxonomy are organizational concepts; graph edges are derived representations.

## Architecture Decision Records

- [ADR-0001: Monorepo](adr/ADR-0001-monorepo.md)
- [ADR-0002: Python and FastAPI](adr/ADR-0002-python-fastapi.md)
- [ADR-0003: Local-First Architecture](adr/ADR-0003-local-first.md)
- [ADR-0004: Vue 3 and TypeScript](adr/ADR-0004-vue3-typescript.md)
- [ADR-0005: Canonical Narrative Knowledge Model](adr/ADR-0005-canonical-narrative-knowledge-model.md)
- [ADR-0006: Derived Projections and Optional AI](adr/ADR-0006-derived-projections-and-optional-ai.md)

## Development Tools

- [Codekeeper](tools/codekeeper.md)
- [Graphify](tools/graphify.md)

## Documentation Status

The v0.1 architecture is provisionally stable for implementation. Future changes should be supported by implementation evidence and recorded through ADRs.
