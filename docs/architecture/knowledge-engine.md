# Knowledge Engine

## Responsibility

The Knowledge Engine manages canonical narrative knowledge while preserving prose, provenance, ambiguity, and conflicting perspectives. It is independent of the UI, storage implementation, indexes, and AI providers.

## Canonical Core

```text
Entity   identity
Source   provenance
Fragment authorial prose and context
Claim    independently manageable assertion
```

These four primitives are persistent semantic state. Source is not truth, Fragment is not Claim, Claim is not Fact, Entity is not knowledge, Graph is not canonical state, and AI suggestion is not knowledge.

## Claims and Evidence

Every Claim has a statement. It may also have optional subject/predicate/object structure, referenced Entities, perspective, validity interval, assertion mode, and truth assessment. Those fields remain subject to implementation feedback.

Evidence normally follows Source → Fragment → Claim. A Claim evidence reference selects either a Fragment or, when no Fragment exists, a Source. Initial relations should remain small: supports, contradicts, and attributes.

Attribution does not validate content. “Hannah stated X” and “X” are independently manageable Claims. Derived Claims may reference other Claims as dependencies, including accepted inferences; an AI inference remains temporary until accepted.

## Graph and Search

Structured Claims may project graph edges. Complex and n-ary Claims can remain statement-only. The graph is therefore intentionally incomplete, partial, and rebuildable. Unstructured Claims still participate in full-text and semantic search, RAG, evidence navigation, and inference.

## Epistemic and Temporal Context

Assertion mode and truth assessment remain separate provisional dimensions. Source publication time and Claim validity time are also distinct. Retcons preserve historical Sources and Fragments while allowing newer Claims or policy to express the current interpretation.

No Event, Timeline, Belief, Fact, Axiom, or Relationship primitive is required for these cases in v0.1.

## Artificial Intelligence

AI is optional infrastructure behind provider abstractions. It may suggest entity extraction or resolution, Claims, Claim structure, summaries, embeddings, and retrieval context. It never creates canonical knowledge directly or makes core features unavailable when no model is installed.

## Persistence Direction

Future persistence is expected to center approximately on entities, sources, fragments, claims, mention associations, claim evidence, and claim dependencies. This direction is not a frozen SQL schema. Repositories expose domain needs; SQLite implements them without defining the domain.
