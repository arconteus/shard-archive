# ADR-0003: Adopt a Local-First Architecture

## Status

Accepted

## Date

2026-08-04

## Context

Shard Archive is intended to be a personal knowledge system for narrative worlds.

Users may spend months or years building a world, collecting evidence, and organizing relationships.

This information represents a significant creative investment.

The project should minimize external dependencies and ensure users retain full ownership of their data.

## Decision

Shard Archive will adopt a Local-First architecture.

Core functionality must work entirely on the user's machine without requiring cloud services or external accounts.

Internet connectivity should only be required for optional features.

## Rationale

### Data Ownership

Users own their knowledge.

They should never be forced to upload projects to external services in order to use the application.

### Longevity

Creative work often outlives software platforms.

Local storage reduces dependence on third-party infrastructure and increases the likelihood that projects remain accessible in the future.

### Privacy

Narrative projects may contain unpublished stories, commercial work, or personal research.

Keeping data local protects user privacy by default.

### AI Independence

Users should be free to choose how AI features are provided.

Possible options include:

- Ollama
- llama.cpp
- cloud providers
- future local inference engines

AI should enhance the archive without requiring internet access.

### Offline Availability

The application should remain fully usable without an internet connection.

Creating, editing, searching, and exploring knowledge must remain available offline.

## Consequences

### Positive

- Full user ownership.
- Better privacy.
- Offline support.
- Independence from cloud providers.
- Easier long-term preservation.

### Negative

- Synchronization becomes the user's responsibility.
- Cloud collaboration is more difficult.
- Some AI models may require significant local hardware.

These trade-offs are acceptable because ownership and independence are core values of the project.

## Alternatives Considered

### Cloud-First

Pros

- Easy synchronization.
- Collaboration.
- Simpler backups.

Cons

- User dependence on external services.
- Privacy concerns.
- Ongoing infrastructure costs.
- Reduced offline functionality.

Rejected because it conflicts with the project's philosophy.

## Future Considerations

Future versions may introduce optional cloud synchronization.

However, cloud features must remain optional.

The local copy should always be considered the primary source of truth.

## Review

This decision should only be reconsidered if the project's goals fundamentally change.

Local ownership remains one of the defining principles of Shard Archive.