# Taxonomy

## Definition

A Taxonomy is a structured classification system used to organize knowledge within a World.

Unlike Tags, which are free-form and user-defined, Taxonomies provide semantic meaning through predefined categories and hierarchical relationships.

Taxonomies help maintain consistency across large knowledge bases.

## Purpose

The purpose of a Taxonomy is to classify Entities, Fragments, Relationships, and Sources using a shared vocabulary.

A well-defined Taxonomy enables:

- consistent categorization;
- easier navigation;
- more accurate filtering;
- semantic validation;
- improved AI suggestions.

## Taxonomy vs Tags

Tags are lightweight organizational labels.

Example:

- important
- review
- theory
- spoiler

Taxonomies describe what something is.

Example:

Entity Type

- Character
- Location
- Object
- Event
- Organization

Tags answer:

> "How do I want to organize this?"

Taxonomies answer:

> "What is this?"

## Hierarchy

Taxonomies may be hierarchical.

Example:

Entity

├── Character
├── Location
├── Object
├── Organization
└── Event

Another example:

Source

├── Game
│   ├── Dialogue
│   ├── Item Description
│   └── Cutscene
├── Book
├── Website
└── Interview

Hierarchies improve navigation and filtering.

## Scope

A Taxonomy belongs to a World.

Different Worlds may define different classification systems.

For example:

Dark Souls

Entity Types

- Covenant
- Lord Soul
- Bonfire

Original Fantasy World

Entity Types

- Kingdom
- Magic School
- Artifact

The application should not enforce a universal taxonomy.

## Extensibility

Users should be able to create custom taxonomy entries.

The system should provide sensible defaults but remain extensible.

Future versions may support importing and exporting taxonomies independently.

## Validation

Taxonomies may be used to validate data.

For example:

Relationship

"member_of"

may require:

Entity A

- Character

Entity B

- Organization

Validation rules are optional and should not prevent experimentation.

## AI Behavior

AI may:

- suggest taxonomy entries;
- recommend classifications;
- detect inconsistent classifications;
- propose new taxonomy nodes.

AI must never:

- modify the taxonomy automatically;
- delete taxonomy entries;
- reclassify objects without confirmation.

## Invariants

The following rules should always remain true:

1. Taxonomies belong to a World.
2. Taxonomies provide semantic meaning.
3. Tags and Taxonomies are different concepts.
4. Users may extend existing Taxonomies.
5. AI suggestions require user approval.

## Open Questions

The following decisions remain unresolved:

- Should Taxonomies support inheritance?
- Should validation rules be configurable?
- Should Taxonomies be exportable independently?
- Should multiple Taxonomies classify the same object?
- Should Projects include predefined Taxonomy templates?