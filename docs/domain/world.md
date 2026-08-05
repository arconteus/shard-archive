# World

## Definition

A World is the highest-level knowledge container in Shard Archive.

It defines the narrative universe in which all Entities, Fragments, Relationships, Sources, and other knowledge objects exist.

A World establishes the boundaries of consistency, canon, and interpretation.

## Purpose

The purpose of a World is to isolate knowledge.

Different narrative universes should never interfere with one another.

Examples include:

- Dark Souls
- Elden Ring
- Bloodborne
- An original novel
- A tabletop RPG campaign
- A fictional universe created by the user

Each World represents its own knowledge graph.

## Scope

A World owns:

- Entities
- Fragments
- Relationships
- Sources
- Taxonomies
- Timeline
- Canon definitions
- User settings

Objects should never belong to multiple Worlds.

If information is shared, it should be duplicated or explicitly imported.

## Identity

Every World has a unique identity.

Typical metadata includes:

- Name
- Description
- Author
- Version
- Creation date
- Last modified date

Additional metadata may be added in future versions.

## Canon

Canon is defined at the World level.

Different Worlds may interpret the same source differently.

For example:

World A may consider:

- Developer interviews as canon.

World B may consider:

- Only released game content as canon.

The application should not enforce a universal definition of canon.

## Independence

Worlds are completely independent.

Deleting one World must never affect another.

Relationships cannot cross World boundaries.

Entities cannot belong to multiple Worlds.

## Import and Export

A World should be exportable as a self-contained package.

An exported World should contain:

- Entities
- Fragments
- Relationships
- Sources
- Metadata
- Settings

The goal is long-term portability.

## AI Behavior

AI operates within the context of the currently opened World.

It must never:

- use information from another World without permission;
- merge Worlds automatically;
- assume shared canon between Worlds.

## Future Extensions

Future versions may support:

- World templates
- Shared taxonomies
- Read-only reference Worlds
- World inheritance
- Cross-world comparison

These capabilities are outside the scope of the MVP.

## Invariants

The following rules should always remain true:

1. Every Project contains exactly one World.
2. Every Entity belongs to one World.
3. Every Fragment belongs to one World.
4. Every Relationship belongs to one World.
5. Relationships cannot connect Entities from different Worlds.
6. Canon is defined within a World.
7. AI reasoning is scoped to the active World.

## Open Questions

The following decisions remain unresolved:

- Should Worlds support multiple timelines?
- Should Worlds have configurable ontology rules?
- Should reference Worlds be read-only?
- Should users be able to fork an existing World?