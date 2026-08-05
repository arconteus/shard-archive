# ADR-0001: Use a Monorepo

## Status

Accepted

## Date

2026-08-04

## Context

Shard Archive consists of multiple components that evolve together:

- Web application
- Backend API
- Documentation
- Future CLI
- Future plugins
- Future SDK

These components share the same domain model and release cycle.

Maintaining them in separate repositories would introduce unnecessary synchronization overhead during the early stages of development.

## Decision

Shard Archive will use a monorepo.

The repository will contain all first-party components required to develop, build, test, and document the project.

## Consequences

### Positive

- Single source of truth.
- Unified documentation.
- Easier refactoring across components.
- Simpler issue tracking.
- Shared CI/CD pipelines.
- Consistent versioning.
- Easier onboarding.

### Negative

- Repository size will grow over time.
- CI pipelines may become slower.
- More care is required when organizing directories.

These drawbacks are acceptable for the expected project scale.

## Alternatives Considered

### Multiple repositories

Pros

- Smaller repositories.
- Independent releases.

Cons

- Duplicate documentation.
- Harder cross-project refactoring.
- More maintenance overhead.
- Version synchronization problems.

This option was rejected because the project is expected to evolve around a shared domain model.

## Review

This decision should be revisited only if the repository grows to a scale where independent release cycles become necessary.