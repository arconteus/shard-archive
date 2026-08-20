# Shard Archive — Project Vision

## Overview

Shard Archive is a local-first narrative knowledge engine for complex fictional worlds. It preserves sources, prose, claims, ambiguity, and conflicting perspectives while projecting structured knowledge into graphs, search indexes, and optional AI-assisted views.

The graph is important for exploration, but it is a partial, rebuildable representation rather than the archive's canonical knowledge model.

## Problem

Narrative material mixes wording, context, rumors, testimony, interpretation, and assertions that may conflict or change over time. Page-oriented tools obscure connections; graph tools can force every idea into an edge and discard the prose that gave it meaning.

Shard Archive must preserve both human-authored context and independently manageable assertions without implying that what was written is true.

## Vision

Users capture prose without premature structuring, identify mentioned entities, express claims when independent reasoning is valuable, attach evidence, and explore whatever subset can be meaningfully projected into a graph.

## Core Principles

- **Local first:** canonical knowledge works without cloud services or AI.
- **Narrative before projection:** Fragments preserve prose; Claims preserve assertions.
- **Provenance without implied truth:** Sources record origin, not validity.
- **Ambiguity and change:** conflicting perspectives, temporal context, and retcons remain representable.
- **AI as assistance:** AI proposals require validation and explicit user action.
- **Progressive complexity:** the canonical core stays limited to Entity, Source, Fragment, and Claim.

## Target Users

Worldbuilders, fiction writers, tabletop creators, lore researchers, narrative designers, and small creative teams.

## Initial Scope

The first versions focus on local projects; Entity, Source, Fragment, and Claim management; evidence and entity mentions; text search; graph projection from structured claims; import/export; and a clean local web interface.

SQLite is the planned canonical persistence technology. AI, embeddings, semantic search, and richer graph exploration are incremental derived capabilities.

## Non-Goals

The initial architecture does not include a graph database, event sourcing, immutable fragments, cloud-first synchronization, autonomous knowledge creation, a complex epistemic ontology, or real-time collaboration.

## Success Criteria

Users can preserve narrative material, distinguish prose from assertions, trace claims to evidence, and explore the archive through search and graph views without surrendering control or requiring AI.
