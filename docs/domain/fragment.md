# Fragment

## Definition

A Fragment is the smallest independently stored unit of narrative knowledge in Shard Archive.

A Fragment captures a piece of information before it is fully classified, interpreted, or connected to the rest of the archive.

Fragments are intentionally flexible. A user should be able to create one even when they do not yet know:

- what entities it refers to;
- whether it is canon;
- whether it is true;
- where it belongs in the timeline;
- how it relates to other information;
- whether it should later be divided into smaller fragments.

## Purpose

Fragments allow knowledge to be captured immediately without forcing premature structure.

They are the primary entry point for:

- item descriptions;
- dialogue;
- quotations;
- observations;
- rumors;
- notes;
- historical records;
- environmental details;
- interpretations;
- incomplete ideas.

The system should make it easy to refine a Fragment later without losing its original content or source.

## Examples

A Fragment may contain:

> The Witch of Izalith attempted to recreate the First Flame.

Another Fragment may contain:

> The demons were born from the Chaos Flame.

These fragments may later be connected to entities such as:

- Witch of Izalith;
- First Flame;
- Chaos Flame;
- Demons.

They may also support claims, relationships, or interpretations.

## Fragment Content

A Fragment should contain a primary body of content.

The content may be:

- plain text;
- Markdown;
- a quotation;
- a transcript;
- a short description;
- a user-authored note.

Attachments such as images, audio, or documents may be supported later, but the initial model should assume text-first fragments.

## Fragment Boundaries

A Fragment should represent one coherent piece of information.

It does not need to contain only one sentence or one claim.

The user may decide to keep several related statements together when they come from the same source and share context.

A Fragment may later be:

- split into multiple fragments;
- merged with another fragment;
- linked to multiple entities;
- used as evidence for multiple claims.

The application should avoid enforcing boundaries automatically unless the user confirms the change.

## Source

A Fragment may reference one or more Sources.

A Source identifies where the information originated.

Examples:

- an item description;
- an NPC dialogue line;
- a book chapter;
- a developer interview;
- a user observation;
- an imported document.

A Fragment without a source is allowed, but the interface should make the absence explicit.

## Authorship

A Fragment may be:

- copied from a source;
- written by the user;
- imported automatically;
- generated as an AI suggestion.

The origin of the Fragment must remain distinguishable.

AI-generated content must never be treated as source-derived evidence unless a user explicitly confirms and reclassifies it.

## Classification

A Fragment may have optional classifications such as:

- source material;
- observation;
- interpretation;
- hypothesis;
- rumor;
- draft idea;
- AI suggestion.

Classification should remain editable.

The absence of a classification must not prevent the Fragment from being stored.

## Confidence

A Fragment may have a confidence value.

Confidence expresses how reliable the user considers the information, not whether it is objectively true.

Possible values may include:

- confirmed;
- probable;
- possible;
- speculative;
- disputed;
- unknown.

Confidence should be optional and should not replace source attribution.

## Canon Status

A Fragment may have a canon status, but canon must not be treated as a simple universal boolean.

Possible states may include:

- official canon;
- secondary canon;
- non-canon;
- disputed canon;
- user-created canon;
- unknown.

Canon may depend on a specific project, edition, continuity, or perspective.

## Relationships

Fragments may be linked to:

- entities;
- sources;
- claims;
- interpretations;
- other fragments;
- events;
- timelines.

A Fragment itself is not necessarily a graph entity.

The graph representation may expose fragments directly or indirectly depending on the selected view.

## Immutability and History

The original meaning of a Fragment should be preserved.

Edits should not silently erase provenance or previous context.

A future version may support:

- revision history;
- snapshots;
- change attribution;
- restoration of earlier versions.

The MVP only needs creation and update timestamps, but the data model should not prevent future versioning.

## AI Behavior

AI may:

- suggest entities mentioned in a Fragment;
- suggest tags;
- propose classifications;
- identify similar fragments;
- propose claims;
- detect possible contradictions;
- summarize the Fragment.

AI must not:

- rewrite the Fragment silently;
- change canon status automatically;
- alter confidence automatically;
- merge or split fragments without confirmation;
- present an inference as source text.

## Invariants

The following rules should remain true:

1. A Fragment can exist without entities or relationships.
2. A Fragment can exist without a source.
3. A Fragment must retain its original content or revision history.
4. AI-generated content must remain identifiable.
5. Classification is optional and reversible.
6. A Fragment may support multiple Claims if Claims are adopted as first-class objects.
7. A Fragment may reference multiple entities.
8. A Fragment is not automatically considered true or canonical.

## Open Questions

The following decisions remain unresolved:

- Should a Fragment support multiple Sources in the MVP?
- Should fragments be directly visible as graph nodes?
- Should the application allow nested fragments?
- Should canon and confidence apply to Fragments, Claims, or both?
- How should imported fragments preserve formatting and citation details?
