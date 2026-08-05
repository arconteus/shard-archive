# Knowledge Engine

## Purpose

The Knowledge Engine is the core of Shard Archive.

Its responsibility is to transform isolated pieces of information into an interconnected and explorable knowledge graph while preserving provenance, uncertainty, and context.

The engine is independent from the user interface, storage implementation, and AI providers.

## Core Principle

Knowledge does not enter the archive fully structured.

Instead, it evolves progressively.

The archive should preserve every stage of that evolution.

## Knowledge Flow

Information enters the system through Sources.

Sources produce Fragments.

Fragments describe Entities.

Entities are connected through Relationships.

The resulting graph becomes searchable, explorable, and analyzable.

```

```text
Source
    ↓
Fragment
    ↓
Entity Detection
    ↓
Entity
    ↓
Relationship
    ↓
Knowledge Graph
```

## Sources

Sources represent the origin of information.

The engine never treats a Source as knowledge.

Instead, Sources provide provenance.

## Fragments

Fragments are the raw material of the archive.

Fragments are immutable representations of captured information.

Everything begins as a Fragment.

## Entity Resolution

Fragments may mention one or more Entities.

The engine is responsible for resolving whether:

- the Entity already exists;
- a new Entity should be suggested;
- the reference is ambiguous.

Entity creation always requires user confirmation.

## Relationship Resolution

Relationships are derived from knowledge rather than manually embedded inside Fragments.

Multiple Fragments may support the same Relationship.

Relationships may exist with varying confidence.

## Evidence

Every Relationship may reference one or more Fragments.

Every Fragment may reference one or more Sources.

This creates a complete provenance chain.

```

```text
Relationship
      ↓
Evidence
      ↓
Fragment
      ↓
Source
```

## Knowledge Graph

The graph is not the source of truth.

It is a projection of the underlying knowledge.

Different graph visualizations may represent the same knowledge differently.

## Search

The engine supports multiple search strategies.

Examples include:

- keyword search;
- semantic search;
- graph traversal;
- relationship exploration;
- source lookup.

These strategies should produce consistent results over the same underlying knowledge.

## Artificial Intelligence

AI assists the engine.

It never replaces it.

AI may suggest:

- entities;
- relationships;
- classifications;
- summaries.

The engine decides nothing automatically.

User confirmation is always required before modifying the archive.

## Future Capabilities

The engine should be designed so future modules can be added without changing the domain model.

Examples:

- timeline reasoning;
- contradiction detection;
- ontology validation;
- temporal queries;
- plugin-based analyzers;
- multiple AI providers.

## Responsibilities

The Knowledge Engine is responsible for:

- preserving provenance;
- preserving uncertainty;
- maintaining consistency;
- exposing the knowledge graph;
- supporting semantic search;
- coordinating AI suggestions.

The Knowledge Engine is not responsible for:

- rendering the UI;
- storing files directly;
- communicating with external AI services;
- importing specific file formats.

Those responsibilities belong to other components.