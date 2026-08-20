# ADR-0004: Use Vue 3 and TypeScript for the Frontend

## Status

Accepted

## Date

2026-08-04

## Context

Shard Archive requires an interface capable of presenting complex and interconnected information.

The frontend must support:

- graph visualization;
- large forms;
- advanced filtering;
- search interfaces;
- future AI interactions;
- responsive layouts;
- long-lived maintainable code.

The user interface should remain independent from the Knowledge Engine.

## Decision

The frontend will be implemented using Vue 3 with TypeScript.

The application will communicate with the backend exclusively through the public REST API.

## Rationale

### Familiarity

Vue provides an approachable development experience while remaining scalable.

Its component model aligns well with the modular nature of Shard Archive.

### Type Safety

TypeScript improves maintainability by detecting interface mismatches early.

As the project grows, shared domain models become easier to maintain.

### Component-Based Design

The interface naturally decomposes into reusable components.

Examples include:

- Fragment Editor
- Entity Inspector
- Claim and Evidence Panel
- Graph View
- Search Panel
- Timeline View

### Ecosystem

Vue provides mature tooling for:

- routing;
- state management;
- testing;
- build tooling.

This allows the project to focus on domain logic rather than frontend infrastructure.

### API Independence

The frontend should never access persistence directly.

All interactions occur through the backend API.

This separation allows future clients such as:

- desktop applications;
- CLI tools;
- mobile applications;

without changing the Knowledge Engine.

## Alternatives Considered

### React

Pros

- Large ecosystem.
- Extensive community.
- Many graph visualization libraries.

Cons

- Greater flexibility often requires more architectural decisions.
- More boilerplate for equivalent functionality.

Rejected because Vue provides a simpler development experience for the project's expected size.

---

### Angular

Pros

- Complete framework.
- Strong architecture.
- Excellent TypeScript support.

Cons

- Larger learning curve.
- More opinionated.
- Additional complexity for a small team.

Rejected because it introduces unnecessary complexity.

---

### Server-side Rendering

Pros

- Better SEO.
- Faster initial page load.

Cons

- Added deployment complexity.
- Limited benefit for a local-first desktop-oriented application.

Rejected because SEO is not a project requirement.

## Consequences

### Positive

- Clear component architecture.
- Strong TypeScript integration.
- Easy onboarding.
- Separation between UI and business logic.
- Mature ecosystem.

### Negative

- Requires maintaining separate frontend and backend projects.
- API contracts must remain synchronized.

These trade-offs are acceptable given the project's modular architecture.

## Review

This decision should be revisited only if the project requires a fundamentally different user interface paradigm.

The domain model and Knowledge Engine should remain independent of the chosen frontend framework.
