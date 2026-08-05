# Shard Archive — Project Vision

## Overview

Shard Archive is a local-first knowledge graph for narrative worlds.

It allows writers, researchers, players, and worldbuilders to organize fragmented information as interconnected entities, relationships, events, locations, sources, and interpretations.

Instead of storing worldbuilding information only in folders, documents, or isolated notes, Shard Archive represents knowledge as a navigable graph.

The system is intended to support both original fictional worlds and the analysis of existing narrative universes.

## Problem

Narrative knowledge is rarely linear.

A character may be connected to:

- multiple locations;
- historical events;
- factions;
- objects;
- rumors;
- conflicting accounts;
- symbolic interpretations;
- other characters.

Traditional note-taking applications usually store this information in pages and folders. This makes it difficult to understand how individual fragments relate to the wider world.

Existing graph tools can visualize relationships, but they often require manual organization, depend on cloud services, or are not designed specifically for narrative knowledge.

Shard Archive aims to combine:

- structured knowledge;
- visual graph exploration;
- narrative context;
- semantic search;
- local artificial intelligence;
- user-controlled storage.

## Vision

Shard Archive should function as an archive of narrative fragments.

Users should be able to add isolated pieces of information without first knowing exactly where they belong. Over time, these fragments can be connected, categorized, compared, and explored as part of a larger narrative structure.

The system should help reveal:

- connections between distant pieces of information;
- contradictions between sources;
- recurring concepts and symbols;
- incomplete areas of a fictional world;
- possible interpretations;
- relationships that are difficult to notice in linear notes.

Shard Archive should assist the user without replacing their judgment.

## Core Principles

### Local First

The user's knowledge should be stored locally by default.

Core functionality must not depend on an external cloud service or proprietary AI provider.

### User Ownership

Users must retain control over their data, models, exports, and generated content.

The project should use open formats whenever practical.

### Knowledge as a Graph

Information should be modeled through entities and explicit relationships rather than only through folders and documents.

### Fragment-Friendly

Users should be able to capture incomplete notes, rumors, quotes, observations, and ideas before fully classifying them.

### Source Awareness

The system should distinguish between:

- confirmed information;
- interpretations;
- rumors;
- hypotheses;
- conflicting accounts;
- user-created material.

### AI as Assistance

Artificial intelligence should help organize, search, classify, summarize, and suggest connections.

It should not silently modify the knowledge base or present generated interpretations as confirmed facts.

### Generic Narrative Model

The core engine should not be tied to a single fictional universe.

Dark Souls may be used as an initial testing dataset, but the system should also support:

- original worldbuilding;
- novels;
- games;
- tabletop campaigns;
- collaborative fiction;
- narrative research.

### Progressive Complexity

The application should be useful before AI features are enabled.

Users should be able to begin with simple fragments and gradually adopt more advanced graph, semantic, and AI-assisted functionality.

## Target Users

Shard Archive is primarily intended for:

- worldbuilders;
- fiction writers;
- tabletop role-playing game creators;
- lore researchers;
- narrative designers;
- players analyzing complex fictional universes;
- small creative teams.

## Initial Use Case

The initial use case is the manual reconstruction of a narrative world from fragmented information.

A user should be able to:

1. Create a project or narrative world.
2. Add fragments of information.
3. Create entities such as characters, locations, objects, factions, and events.
4. Connect fragments and entities through typed relationships.
5. record the source and confidence level of information.
6. Explore the resulting knowledge graph.
7. Search the archive using text and semantic meaning.
8. Use a local AI model to suggest classifications and possible connections.

## Initial Scope

The first versions of Shard Archive should focus on:

- local project creation;
- fragment management;
- entity management;
- typed relationships;
- source tracking;
- basic graph visualization;
- filtering and text search;
- import and export;
- a clean web interface running locally.

Local AI, embeddings, semantic search, and automated relationship suggestions will be introduced incrementally.

## Non-Goals

Shard Archive is not initially intended to be:

- a general-purpose social network;
- a cloud-first collaboration platform;
- a replacement for full novel-writing software;
- an autonomous story generator;
- a commercial lore database;
- a wiki hosting platform;
- a real-time multiplayer editor;
- dependent on a specific AI model or provider.

These capabilities may be evaluated later, but they should not determine the initial architecture.

## Product Direction

Shard Archive will initially be distributed as a locally hosted web application.

The frontend will run in the user's browser, while a local backend manages data, search, imports, and AI integrations.

The initial technology direction is:

- Vue 3 and TypeScript for the web interface;
- Python and FastAPI for the local API;
- SQLite for initial local persistence;
- optional Ollama integration for local AI models.

These choices are provisional until recorded through Architecture Decision Records.

## Success Criteria

The project will be successful when a user can take a collection of disconnected narrative fragments and gradually transform them into an understandable, explorable, and portable knowledge graph without surrendering control of their data.

The application should provide value both with and without artificial intelligence.