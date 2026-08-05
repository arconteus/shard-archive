# Shard Archive — Project Philosophy

Shard Archive is built around the idea that narrative knowledge is fragmented, contextual, and often uncertain.

The project should not force users to simplify complex fictional worlds into rigid structures. Instead, it should provide enough structure to make knowledge explorable while preserving ambiguity, contradiction, and interpretation.

## Core Principles

### Knowledge Is Fragmented

Narrative worlds are rarely understood through complete and authoritative records.

Knowledge may appear as:

- item descriptions;
- dialogue;
- environmental details;
- historical accounts;
- rumors;
- symbols;
- personal interpretations;
- incomplete notes.

Shard Archive should allow users to capture information before fully understanding how it fits into the wider world.

### Everything Should Have a Source

Whenever possible, claims and fragments should be connected to their origin.

A source may be:

- a book;
- a game;
- a chapter;
- a dialogue line;
- an image;
- a document;
- an interview;
- a user observation;
- an external reference.

The system should make it possible to distinguish original evidence from later interpretation.

### Narrative Truth Is Contextual

A fictional world may contain multiple versions of the same event.

Different characters, factions, cultures, or documents may provide contradictory accounts.

Shard Archive should not assume that every contradiction must be resolved into a single truth.

Instead, it should preserve:

- competing claims;
- unreliable narrators;
- incomplete evidence;
- disputed interpretations;
- changes in canon.

### Relationships Are First-Class Knowledge

Connections between fragments are as important as the fragments themselves.

A relationship may express:

- identity;
- location;
- ownership;
- causation;
- chronology;
- membership;
- symbolism;
- contradiction;
- similarity;
- influence;
- interpretation.

Relationships should be explicit, typed, inspectable, and capable of carrying their own context.

### Structure Should Emerge Gradually

Users should not need to design a complete taxonomy before adding information.

The system should support progressive organization:

1. Capture a fragment.
2. Associate it with a source.
3. Connect it to existing entities.
4. Classify it when useful.
5. Refine relationships over time.

The structure of the archive should grow alongside the user's understanding.

### Uncertainty Should Be Preserved

Not all information has the same level of certainty.

Shard Archive should distinguish between concepts such as:

- confirmed;
- probable;
- possible;
- speculative;
- disputed;
- false within the narrative;
- unknown.

Uncertainty should be represented explicitly rather than hidden inside prose.

### AI Assists, Never Replaces

Artificial intelligence may help users:

- classify fragments;
- detect possible entities;
- suggest relationships;
- identify contradictions;
- summarize evidence;
- improve search;
- find related information.

AI-generated output must remain distinguishable from user-authored or source-derived knowledge.

AI should not silently alter the archive, confirm its own interpretations, or replace human judgment.

### Local First Means User Control

The archive should remain useful without an internet connection or external service.

Users should retain control over:

- their data;
- their projects;
- their exports;
- their models;
- their generated content;
- their backups.

Cloud services may be supported later, but they should not become a requirement for core functionality.

### Open Formats Over Lock-In

Where practical, Shard Archive should use understandable and portable formats.

Users should be able to export their work without depending permanently on the application.

The project should avoid unnecessary dependence on proprietary services, undocumented formats, or closed infrastructure.

### The Core Must Remain Generic

Shard Archive may begin with narrative universes such as Dark Souls as testing material, but its core model should not be designed around a single franchise.

The system should support:

- original fictional worlds;
- novels;
- video games;
- tabletop campaigns;
- collaborative fiction;
- narrative research;
- historical or mythological analysis where appropriate.

### Simplicity Before Scale

The first implementation should prioritize clarity, maintainability, and local usability.

The project should not adopt infrastructure intended for large-scale distributed systems before there is a demonstrated need.

A simple solution that preserves the domain model is preferable to a complex solution chosen only for theoretical scalability.

## Decision Guideline

When evaluating a new feature or technical decision, the project should ask:

1. Does it preserve user ownership?
2. Does it respect uncertainty and source context?
3. Does it improve the understanding of relationships?
4. Does it work without requiring AI?
5. Does it keep AI output distinguishable from evidence?
6. Does it avoid unnecessary complexity?
7. Does it keep the core model useful across different narrative worlds?

If a proposal conflicts with these principles, it should be reconsidered or documented as an explicit architectural trade-off.