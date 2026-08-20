# ADR-0002: Use Python and FastAPI for the Backend

## Status

Accepted

## Date

2026-08-04

## Context

Shard Archive is not a traditional CRUD application. Its backend manages a
narrative knowledge engine whose canonical domain remains independent of graph,
search, and optional AI infrastructure.

The backend must support:

- complex domain logic;
- optional local AI inference;
- embedding generation;
- semantic search;
- graph projection and traversal;
- future plugin support.

The backend should also remain easy to understand and contribute to.

## Decision

The backend will be implemented using Python and FastAPI.

FastAPI will expose the application's public API.

Python will serve as the primary language for the Knowledge Engine and optional AI adapters.

## Rationale

### Artificial Intelligence Ecosystem

Python provides the most mature ecosystem for:

- local language models;
- embeddings;
- vector search;
- machine learning;
- natural language processing.

Most modern AI tooling is developed for Python first.

### Separation of Responsibilities

FastAPI allows the backend to expose a clean REST API while keeping the Knowledge Engine independent from HTTP concerns.

Business rules remain inside the domain rather than inside controllers.

### Performance

The expected workload is dominated by:

- disk operations;
- graph traversal;
- AI inference;
- semantic search.

These tasks are not limited by Python itself.

Performance-critical components may be optimized independently in the future if necessary.

### Maintainability

Python emphasizes readability.

A large portion of Shard Archive consists of domain logic rather than computational algorithms.

Clear code is preferred over premature optimization.

### Community

Python has a large ecosystem for:

- AI
- graph processing
- document parsing
- OCR
- embeddings
- PDF analysis
- data processing

This reduces the amount of infrastructure the project must build itself.

## Alternatives Considered

### Laravel (PHP)

Pros

- Excellent developer experience.
- Mature ecosystem.
- Strong ORM.

Cons

- AI tooling is significantly smaller.
- Most AI libraries require separate Python services.
- Increased architectural complexity.

Rejected because it would introduce an additional AI service from the beginning.

---

### Spring Boot (Java)

Pros

- Excellent architecture.
- Strong typing.
- High performance.
- Mature ecosystem.

Cons

- More verbose.
- Slower experimentation with AI tooling.
- Less direct integration with modern ML libraries.

Rejected because Python provides the most direct path to the planned optional AI capabilities without adding a second backend service.

---

### Node.js

Pros

- Large ecosystem.
- JavaScript across frontend and backend.

Cons

- Smaller AI ecosystem.
- Less mature scientific computing libraries.
- Many AI tools still target Python first.

Rejected because the project's core revolves around knowledge processing rather than web development.

---

### Go

Pros

- Excellent performance.
- Easy deployment.
- Simple concurrency.

Cons

- Limited AI ecosystem.
- Smaller selection of mature NLP libraries.

Rejected because Python best fits the combined domain-processing and optional AI ecosystem; raw performance is not currently the limiting requirement.

## Consequences

### Positive

- Excellent AI ecosystem.
- Clean REST architecture.
- Easy integration with optional providers such as Ollama.
- Rich data-processing libraries.
- Strong long-term maintainability.

### Negative

- Lower raw execution speed than compiled languages.
- Requires a Python runtime.
- Type safety is not as strict as some alternatives.

These trade-offs are acceptable for the goals of Shard Archive.

## Review

This decision should be reconsidered only if:

- AI tooling significantly shifts toward another ecosystem;
- performance profiling demonstrates Python is a bottleneck;
- the Knowledge Engine requires capabilities better served by another language.

Any future migration should preserve the domain model and public API.
