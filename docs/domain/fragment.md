# Fragment

## Definition

A Fragment is the human-oriented unit of prose and contextual evidence. It may contain notes, quotations, observations, imports, rumors, testimony, research excerpts, or incomplete ideas.

Fragments preserve wording, narrative context, ambiguity, tone, and voice. They are not Claims and do not become true merely by being stored.

## Boundaries and Mutability

A Fragment may contain several assertions. Users choose practical prose boundaries; the system does not require linguistic atomization or automatic AI segmentation. Fragments have stable identity but mutable content. Simple revision history may be added later, but v0.1 does not use event sourcing or immutable Fragment events.

## Associations

A Fragment may reference a Source, mention multiple Entities, and serve as evidence for multiple Claims. Entity mentions do not imply semantic relationships.

## AI and Invariants

During normal authoring, user input creates a Fragment directly. AI may suggest segmentation during imports and may suggest entities, Claims, structure, summaries, or related material, but suggestions require explicit action.

1. Fragment is one of four canonical primitives.
2. Fragment represents what was written, not what is asserted or true.
3. Fragment content is mutable; provenance and identity remain stable.
4. A Fragment can exist before classification, mentions, evidence use, or AI processing.
