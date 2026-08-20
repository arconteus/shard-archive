# ADR-0005: Adopt the Canonical Narrative Knowledge Model

## Status

Accepted

## Date

2026-08-20

## Context

Earlier documentation treated Fragments as units of knowledge and Relationships as first-class domain objects. That model risks equating prose with assertion, duplicating structured knowledge, and losing ambiguity when complex statements are forced into graph edges.

The archive must represent authentic sources containing lies, conflicting accounts, temporal change, retcons, uncertain identity, n-ary assertions, and accepted inferences without expanding into a large ontology.

## Decision

Shard Archive has exactly four canonical knowledge primitives for v0.1:

- Entity represents identity;
- Source represents provenance;
- Fragment represents authorial prose and context;
- Claim represents an independently manageable assertion.

Fragment and Claim have separate identity and lifecycle. Every Claim has a human-readable statement and may optionally have structured subject, predicate, and object data. Claims may reference Entities, evidence, perspective, temporal context, epistemic context, and other Claims as derivational dependencies.

Evidence normally links a Claim to a Fragment and reaches its Source transitively. Direct Source evidence is allowed when no Fragment exists. Attribution does not validate the attributed proposition.

## Consequences

### Positive

- Original wording and semantic assertions can evolve independently.
- Claims need not be true, graphable, or linguistically atomic.
- Provenance, conflicting perspectives, retcons, and inference remain traceable.
- The canonical domain remains deliberately small.

### Negative

- Authoring and import workflows must make the Fragment/Claim distinction understandable.
- Evidence, temporal context, and epistemic dimensions require careful interface design.
- Implementation may refine fields and vocabularies without changing the primitive boundary.

## Alternatives Considered

Keeping Relationship canonical was rejected because it duplicates structured Claims and excludes valid non-graphable assertions. Treating Fragment as the assertion unit was rejected because prose boundaries and semantic management boundaries differ. Fact, Belief, Event, Timeline, and Axiom primitives are deferred until implementation evidence demonstrates a need.

## Review

This v0.1 decision is provisionally stable for implementation. Changes to the four-primitive boundary require a future ADR supported by concrete requirements or implementation evidence.
