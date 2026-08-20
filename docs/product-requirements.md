# Shard Archive — Product Requirements

## Purpose

Define what the initial application should do. The domain semantics in the linked domain documents govern these requirements.

## v0.1 MVP

### Projects and Canonical Knowledge

Users can create, open, rename, export, import, back up, and delete local projects. Within a project they can create, edit, find, and delete the four canonical primitives:

- Entities for identity;
- Sources for provenance;
- Fragments for prose and contextual evidence;
- Claims for independently manageable assertions.

Deleting material must respect evidence and dependency references rather than silently destroying context.

### Mentions, Evidence, and Claims

Users can associate Fragments and Claims with mentioned Entities without implying a semantic relationship. They can attach a Claim to supporting, contradicting, or attributing evidence from a Fragment, or directly from a Source when no Fragment exists.

Each Claim has a human-readable statement. Users may optionally structure a Claim with subject, predicate, and object; add perspective and temporal context; and distinguish assertion mode from truth assessment. Complex and n-ary Claims need not be forced into triples.

### Graph and Search

Users can perform text search over canonical knowledge and explore a graph projected from structured Claims. They can expand, search, and filter projected nodes and edges. Rebuilding or deleting the graph or search index must not delete canonical knowledge.

### Authority Boundaries

Normal authoring creates Fragments directly. Constructor workflows make explicit canonical mutations. Sandbox workflows search, compare, traverse, and infer without implicit canonical side effects.

## Future Versions

Optional AI providers may support entity extraction, claim and structure suggestions, semantic retrieval, contradiction candidates, and summaries. Embeddings, vector indexes, similarity data, semantic clusters, AI summaries, and RAG context remain derived and rebuildable. AI proposals require explicit validation and user acceptance.

Collaboration, synchronization, plugins, richer history, and additional importers may be evaluated later.

## Out of Scope for v0.1

- Graph databases or a canonical Relationship table
- Event Sourcing or immutable Fragments
- Timeline, Event, Fact, Belief, or Axiom primitives
- Cloud accounts, online synchronization, and real-time collaboration
- Autonomous AI knowledge creation
- A large or frozen epistemic ontology
