# Relationship

## Definition

A Relationship is an explicit semantic connection between two Entities.

Unlike a simple graph edge, a Relationship is a first-class domain object with its own metadata, provenance, and context.

Relationships are used to express how Entities interact, influence, describe, or relate to one another.

## Purpose

Relationships transform isolated pieces of information into navigable knowledge.

Instead of only storing that two Entities are connected, Shard Archive stores:

- why they are connected;
- who claims the connection;
- how reliable the connection is;
- where the connection originates;
- when the connection is valid.

## Examples

Examples include:

- Gwyn **rules** Anor Londo
- Manus **created** the Abyss
- Estus Flask **contains** Estus
- Chaos Flame **created** Demons
- Firelink Shrine **contains** Bonfire

Relationships should be meaningful when read as natural language.

## Structure

A Relationship connects:

- one source Entity;
- one target Entity;
- one relationship type.

Example:

```
Gwyn
    ── rules ──▶
Anor Londo
```

## Relationship Types

Relationship types describe the semantic meaning of the connection.

Examples:

- located_in
- member_of
- owns
- created
- created_by
- uses
- worships
- protects
- opposes
- knows
- part_of
- contains
- inspired_by
- resembles

Projects may define custom relationship types.

## Metadata

A Relationship may contain metadata including:

- description
- notes
- creation date
- confidence
- canon status
- tags

Metadata belongs to the Relationship itself rather than either Entity.

## Evidence

Relationships should be supported by evidence.

Evidence consists of one or more Fragments that justify why the relationship exists.

Example:

Relationship:

```
Chaos Flame
    created
Demons
```

Evidence:

- Item Description A
- Dialogue B
- Developer Interview C

A Relationship without evidence is allowed but should be visually distinguishable.

## Confidence

Confidence expresses how certain the user is that the Relationship is valid.

Possible values include:

- confirmed
- probable
- speculative
- disputed
- unknown

Confidence should never replace evidence.

## Canon Status

Relationships may exist in different narrative contexts.

Examples:

- official canon
- alternate timeline
- fan interpretation
- user-created world

Canon belongs to the project context.

## Temporal Context

Some Relationships only exist during specific periods.

Examples:

Artorias

```
member_of
```

Four Knights

during:

Age of Fire

Temporal information should be supported without requiring a complete timeline implementation.

## Perspective

Different sources may disagree.

Example:

Faction A claims:

```
King
    defeated
Dragon
```

Faction B claims:

```
Dragon
    sacrificed itself
```

Both Relationships may coexist if they originate from different evidence.

The archive should preserve disagreement rather than forcing resolution.

## Direction

Relationships are directed.

```
Gwyn
    father_of
Gwynevere
```

is not equivalent to

```
Gwynevere
    father_of
Gwyn
```

The application may display inverse relationships when appropriate, but direction remains explicit.

## AI Behavior

AI may:

- suggest candidate relationships;
- identify missing links;
- detect duplicated relationships;
- suggest relationship types.

AI must never:

- create relationships automatically;
- modify evidence;
- change confidence;
- delete relationships.

User confirmation is always required.

## Invariants

The following rules should remain true:

1. Every Relationship connects two Entities.
2. Every Relationship has a semantic type.
3. Relationships are directed.
4. Relationships may have evidence.
5. Relationships may exist without evidence.
6. AI-generated Relationships remain suggestions until confirmed.
7. Metadata belongs to the Relationship, not to either Entity.

## Open Questions

The following decisions remain unresolved:

- Should Relationships support weights?
- Should inverse relationships be stored or generated dynamically?
- Should multiple evidence sets be grouped?
- Should relationship types be hierarchical?
- Should users define custom metadata fields?