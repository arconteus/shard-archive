# Shard Archive — Project Philosophy

Shard Archive preserves enough context and semantic structure to represent complex narrative knowledge without destroying the author's writing flow.

## Core Principles

### Fragment Is Not Claim

A Fragment records what was written. A Claim records the smallest assertion whose meaning, provenance, context, or validity needs independent management. One Fragment may support several Claims, and a Claim may draw on several pieces of evidence.

### Identity, Provenance, and Assertion Stay Separate

An Entity supplies identity without asserting objective existence. A Source records origin without guaranteeing truth. A Claim expresses an assertion without calling it a fact. Author and Source also remain separate.

### Ambiguity Is Preserved

Conflicting accounts, unreliable narrators, hypotheses, mythology, uncertain identities, and retcons may coexist. Editorial acceptance and in-world truth are separate dimensions. Temporal context prevents changing circumstances from becoming naive contradictions.

### The Graph Is a View

Structured Claims may project graph edges. Complex or n-ary Claims may remain statements without an edge. The graph is intentionally incomplete, derived, and rebuildable.

### Structure Emerges Gradually

Users capture a Fragment, associate a Source, mark Entity mentions, create or accept Claims, and add structure only where useful. Mentions aid navigation but do not imply relationships.

### AI Proposes; Users Authorize

Optional AI may suggest entities, claims, structure, summaries, and retrieval context. The Knowledge Engine validates proposals, and users decide whether they enter canonical knowledge. Sandbox exploration has no implicit canonical side effects.

### Local First Means User Control

Canonical knowledge remains usable locally, offline, in portable formats, and without a particular AI provider. Derived indexes can be rebuilt without losing the archive.

### Simplicity Before Scale

The v0.1 architecture has exactly four canonical knowledge primitives: Entity, Source, Fragment, and Claim. Events, timelines, beliefs, relationships, embeddings, and AI suggestions are not additional canonical primitives.

## Decision Guideline

Prefer the simplest design that preserves writing context, provenance, ambiguity, user authority, local operation, and the four-primitive core. Record future architectural changes through ADRs.
