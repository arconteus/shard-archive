# Shard Archive — Glossary

## Canonical Knowledge

The persistent semantic core: Entity, Source, Fragment, and Claim. Organizational objects and derived representations are not additional canonical primitives.

## Knowledge Engine

The domain and application capability that manages canonical narrative knowledge, validates proposed changes, and produces derived views.

## Entity

A stable identity for a referent or concept the archive must distinguish. It does not contain facts about itself or imply that its referent objectively exists.

## Source

The provenance container from which information originated. A Source may be authentic, forged, reliable, or misleading; it does not determine truth. Its author is a separate Entity reference where applicable.

## Fragment

A stable, mutable, human-oriented unit of prose and contextual evidence. A Fragment preserves wording, voice, tone, and ambiguity; it is not the unit of semantic assertion.

## Claim

The smallest assertion whose meaning, provenance, context, or validity the archive needs to manage independently. A Claim is not necessarily a Fact and always has a human-readable statement.

## Fact

A statement treated as true under some authority or assessment. Claim is the domain primitive because rumors, lies, hypotheses, and disputed assertions must remain representable without being called facts.

## Structured Claim

A Claim with an optional subject, predicate, and object representation in addition to its statement. Not every Claim can or should be structured as a triple.

## Evidence

An association from a Claim to a supporting, contradicting, or attributing Fragment, or directly to a Source when no Fragment exists. Evidence is a supporting structure, not a canonical primitive.

## Entity Mention

An association indicating that a Fragment or Claim references an Entity. A mention supports navigation and retrieval but does not imply a semantic relationship.

## Provenance

The trace of where information came from, normally Source → Fragment → Claim. Provenance establishes origin, not truth.

## Perspective

The contextual viewpoint from which a Claim is made or assessed, optionally referencing an Entity. Perspective does not determine truth.

## Relationship

A semantic connection represented by a structured Claim. Relationship is not a canonical record; when graphable, it produces a derived Graph Edge.

## Graph Edge

A directional connection in a Graph Projection, commonly generated from the structured form of a Claim. It can be rebuilt and does not duplicate canonical knowledge.

## Graph Projection

The partial, rebuildable graph generated from Claims that can be meaningfully structured. Unstructured Claims remain first-class knowledge outside the graph.

## Derived Data

Rebuildable state such as graph projections, search indexes, embeddings, vector indexes, similarity scores, semantic clusters, AI summaries, and RAG context. Its loss must not destroy canonical knowledge.

## Assertion Mode and Truth Assessment

Separate, provisional dimensions of Claim context. Assertion mode may describe asserted, reported, rumored, believed, or hypothesized speech; truth assessment may describe unknown, supported, disputed, or false content.

## Project, World, and Taxonomy

Project is the local workspace and World scopes a narrative universe. Taxonomy supplies optional structured classification. These are application or organizational concepts, not canonical knowledge primitives.

## Local AI

An optional local model accessed through a provider boundary. AI suggestions are temporary until explicitly accepted; canonical knowledge remains usable without AI.

## Embedding and Semantic Search

An Embedding is a derived numerical representation used by Semantic Search to retrieve related meaning. Both complement canonical data and keyword search rather than replacing them.
