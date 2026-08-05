# Architecture Overview

## Purpose

This document describes the high-level architecture of Shard Archive.

Rather than focusing on implementation details, it explains how the major components of the system collaborate to transform narrative information into structured knowledge.

The architecture follows a layered design centered around the Knowledge Engine.

---

# High-Level Architecture

```
                    +----------------------+
                    |      Web Client      |
                    |    Vue + TypeScript  |
                    +----------+-----------+
                               |
                           HTTP / WebSocket
                               |
+--------------------------------------------------------------+
|                     FastAPI Application                      |
|                                                              |
|  REST API                                                    |
|                                                              |
|  Application Layer                                           |
|                                                              |
|  Knowledge Engine                                            |
|                                                              |
|  AI Integration                                              |
|                                                              |
|  Import / Export                                             |
+--------------------------+-----------------------------------+
                           |
                    Repository Layer
                           |
                    SQLite Database
                           |
                  Embedding Storage
                           |
                 Local AI (Ollama)
```

---

# Design Principles

The architecture follows these principles:

- Local First
- Separation of Concerns
- Explicit Domain Model
- AI as Assistance
- Technology Independence
- Progressive Complexity

Every component should have a single responsibility.

---

# Layers

## User Interface

Responsible for:

- rendering data;
- user interaction;
- graph visualization;
- forms;
- navigation.

The UI never contains business rules.

---

## API Layer

Responsible for:

- exposing REST endpoints;
- validating requests;
- authentication (future);
- serialization.

The API translates HTTP requests into application use cases.

---

## Application Layer

Coordinates use cases.

Examples:

- Create Fragment
- Merge Entities
- Create Relationship
- Import Source

Application services orchestrate the domain but do not implement domain rules.

---

## Knowledge Engine

The Knowledge Engine contains the core business logic.

It is responsible for:

- entity resolution;
- relationship resolution;
- graph consistency;
- provenance;
- semantic coordination.

The engine represents the heart of Shard Archive.

---

## Repository Layer

Repositories abstract persistence.

The Knowledge Engine should not know whether data is stored in:

- SQLite
- PostgreSQL
- Neo4j
- memory
- JSON

Persistence is an implementation detail.

---

## Infrastructure

Infrastructure provides:

- database access;
- local file storage;
- embedding storage;
- AI providers;
- importers;
- exporters.

Infrastructure depends on the domain.

The domain never depends on infrastructure.

---

# Dependency Direction

Dependencies always point inward.

```
UI
 ↓
API
 ↓
Application
 ↓
Knowledge Engine
 ↓
Repositories
 ↓
Infrastructure
```

Infrastructure must never contain business rules.

---

# Artificial Intelligence

AI is an infrastructure component.

It provides capabilities such as:

- entity extraction;
- summarization;
- semantic search;
- relationship suggestions.

The Knowledge Engine decides whether AI output becomes part of the archive.

AI never modifies the archive directly.

---

# Knowledge Flow

```
Source
      ↓
Fragment
      ↓
Knowledge Engine
      ↓
Entity Resolution
      ↓
Relationship Resolution
      ↓
Knowledge Graph
      ↓
Search
      ↓
User
```

---

# Extensibility

The architecture should support future modules without modifying the core engine.

Examples:

- timeline analysis;
- contradiction detection;
- plugin system;
- multiple AI providers;
- collaborative editing.

New functionality should integrate through well-defined interfaces.

---

# Non-Goals

The architecture does not prioritize:

- cloud-native deployment;
- microservices;
- distributed databases;
- real-time collaboration.

These may be added later if justified.

The initial architecture favors simplicity, maintainability, and local execution.