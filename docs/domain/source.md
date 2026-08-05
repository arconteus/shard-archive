# Source

## Definition

A Source represents the origin of narrative information.

Sources preserve provenance by identifying where a Fragment originated.

A Source is not knowledge itself.

Instead, it provides the context necessary to evaluate the reliability, meaning, and interpretation of one or more Fragments.

## Purpose

The purpose of a Source is to answer a simple question:

> Where did this information come from?

Every Fragment may reference one or more Sources.

Preserving provenance allows users to distinguish:

- original evidence;
- later interpretations;
- user notes;
- AI-generated suggestions.

## Examples

Examples of Sources include:

- Item descriptions
- NPC dialogue
- Books
- Codex entries
- Developer interviews
- Official websites
- Cutscenes
- User observations
- Imported documents
- Images
- Videos
- Academic papers

A Source represents the container of information rather than the information itself.

## Source Types

Possible source types include:

- Game
- Book
- Dialogue
- Item
- Document
- Interview
- Website
- Video
- Audio
- Image
- User Note
- AI Suggestion

Projects may define additional source types.

## Fragments

A Source may contain multiple Fragments.

For example:

Source:

Item Description — Soul of a Great Hero

Fragments:

- Use to acquire many souls.
- The soul belonged to a great hero.

The archive separates the physical source from the individual pieces of knowledge extracted from it.

## Metadata

A Source may contain metadata such as:

- title
- author
- publisher
- game
- chapter
- location
- edition
- language
- publication date
- URL
- ISBN
- notes

Metadata should describe the Source rather than the extracted knowledge.

## Provenance

A Source provides provenance.

Users should always be able to trace:

Relationship

↓

Evidence

↓

Fragment

↓

Source

This chain should remain intact throughout the lifetime of the project.

## Reliability

Sources may have different levels of reliability.

Examples:

- Official publication
- Primary source
- Secondary source
- User observation
- Community interpretation
- AI-generated content

Reliability should remain configurable by the user.

## Canon

A Source does not determine canon.

For example:

A developer interview may contradict the released game.

Both should remain available.

Canon decisions belong to the project rather than to the Source.

## AI Behavior

AI may:

- extract metadata;
- identify duplicated Sources;
- suggest citations;
- classify source types.

AI must never:

- invent provenance;
- fabricate citations;
- rewrite source material;
- replace the original source.

## Invariants

The following rules should always remain true:

1. A Source represents where information originated.
2. A Source may contain many Fragments.
3. Fragments preserve their connection to Sources.
4. Sources are independent from Entities.
5. AI-generated content is itself a Source type, not evidence.

## Open Questions

The following decisions remain unresolved:

- Should Sources support file attachments?
- Should Sources support page-level citations?
- Should Sources be versioned?
- Should multiple Fragments share citation ranges?
- How should imported PDFs preserve pagination?