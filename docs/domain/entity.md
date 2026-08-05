# Entity

## Definition

An Entity represents a distinct object, concept, place, event, or actor within a narrative world.

Unlike a Fragment, which captures raw information, an Entity represents something that exists within the modeled world.

Entities serve as stable reference points that connect fragments, relationships, sources, claims, and interpretations.

## Purpose

Entities organize knowledge.

Instead of connecting every Fragment directly to every other Fragment, the archive connects information through shared Entities.

For example:

- Multiple fragments may describe the same character.
- Multiple sources may mention the same location.
- Different interpretations may reference the same historical event.

The Entity becomes the center of that knowledge.

## Examples

Entities may represent:

- Characters
- Locations
- Objects
- Events
- Organizations
- Species
- Concepts
- Technologies
- Religions
- Civilizations

Examples:

- Gwyn
- Firelink Shrine
- Estus Flask
- The First Flame
- Age of Fire
- Chaos Flame

## Identity

Every Entity represents exactly one concept inside a World.

Different names may refer to the same Entity.

For example:

- The Nameless King
- Firstborn of Gwyn

may be aliases of a single Entity.

## Attributes

An Entity may contain:

- Name
- Description
- Entity Type
- Aliases
- Tags
- Metadata

Attributes describe the Entity itself.

Narrative evidence should remain inside Fragments.

## Relationships

Entities may be connected through typed Relationships.

Examples:

Gwyn

- rules → Anor Londo

Chaos Flame

- created → Demons

Relationships are explicit domain objects.

They are not simple hyperlinks.

## Fragments

An Entity may reference many Fragments.

Fragments describe the Entity.

Fragments do not become part of the Entity.

The archive should preserve the distinction between:

the object itself

and

the evidence describing it.

## Sources

Entities are not directly sourced.

Sources belong to Fragments.

Evidence flows like this:

Source

↓

Fragment

↓

Entity

This prevents the archive from losing provenance.

## AI Behavior

AI may:

- detect candidate entities
- merge duplicate entities
- suggest aliases
- suggest entity types

AI must never:

- create canonical entities automatically
- merge entities without confirmation
- delete entities automatically

## Invariants

The following rules should always remain true:

1. An Entity represents exactly one concept.
2. Multiple Fragments may reference one Entity.
3. One Fragment may reference multiple Entities.
4. Relationships connect Entities.
5. Sources belong to Fragments, not Entities.
6. AI suggestions require user confirmation.

## Open Questions

The following decisions remain unresolved:

- Can Entities exist without any Fragments?
- Should Entities have custom user-defined types?
- Should aliases support multiple languages?
- Should Entities support user-defined icons?