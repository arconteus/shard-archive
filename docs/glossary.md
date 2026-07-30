# Shard Archive — Glossary

## Purpose

This glossary defines the ubiquitous language used throughout the Shard Archive project.

All documentation, source code, API endpoints, and discussions should use these terms consistently.

---

# World

A self-contained knowledge space.

A world represents the narrative universe being documented.

Examples:

- Dark Souls
- Elden Ring
- Original novel
- D&D campaign

A project contains one world.

---

# Project

The local workspace managed by the application.

A project stores:

- world data
- fragments
- entities
- relationships
- settings
- AI indexes
- metadata

---

# Fragment

The smallest unit of knowledge.

A fragment is an isolated piece of information before it is fully connected to the rest of the archive.

Examples:

- an item description
- a dialogue line
- a paragraph
- an observation
- a quote
- an idea

A fragment may reference multiple entities.

---

# Entity

A real or conceptual object within a world.

Examples:

- Character
- Location
- Event
- Item
- Organization
- Concept
- Creature

Entities exist independently of fragments.

Fragments describe entities.

---

# Relationship

A typed connection between two entities.

Examples:

- located_in
- member_of
- owns
- created_by
- enemy_of
- part_of
- inspired_by

Relationships may also contain metadata.

---

# Source

The origin of a fragment.

Examples:

- Book
- Chapter
- Game
- NPC dialogue
- Item description
- Interview
- Wiki
- User note

Sources provide provenance.

---

# Claim

A statement extracted from one or more fragments.

Claims are not necessarily true.

They represent information asserted by a source.

---

# Evidence

Information supporting or contradicting a claim.

Evidence always references one or more fragments.

---

# Canon

Information accepted as official within a narrative universe.

Canon depends on the selected world.

Shard Archive does not define canon automatically.

---

# Interpretation

A user-generated conclusion based on evidence.

Interpretations should remain distinguishable from source material.

---

# Tag

A lightweight label used for organization.

Tags are user-defined.

They have no semantic meaning beyond organization.

---

# Taxonomy

The structured classification system used by a project.

Unlike tags, taxonomies have defined meaning and hierarchy.

---

# Confidence

The estimated reliability of a fragment or claim.

Possible values include:

- Confirmed
- Probable
- Possible
- Speculative
- Disputed
- Unknown

---

# Knowledge Graph

The complete network of entities, relationships, fragments, and sources.

The graph is the primary representation of knowledge inside Shard Archive.

---

# Local AI

An AI model executed on the user's own hardware.

Examples:

- Ollama
- llama.cpp
- vLLM

Local AI assists the user but never becomes the source of truth.

---

# Embedding

A numerical representation of text used for semantic search.

Embeddings allow similar concepts to be discovered even when different words are used.

---

# Semantic Search

A search mechanism based on meaning rather than exact text matching.

Semantic search complements traditional keyword search.

---

# Workspace

The current editing session of the user.

A workspace includes:

- opened project
- current graph state
- filters
- selections
- layout preferences

---

# Metadata

Information describing another object.

Examples:

- creation date
- author
- confidence
- source
- tags
- timestamps

Metadata does not represent narrative knowledge itself.

---

# Ubiquitous Language

The shared vocabulary used throughout the project.

Whenever possible, code, documentation, APIs, and user interface should use the terminology defined in this glossary.