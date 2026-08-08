# Graphify

## Purpose

[Graphify](https://graphify.com/) is an optional development tool that turns a
codebase into a queryable knowledge graph. It maps files, symbols, imports,
calls, and documentation references so developers can explore how parts of the
repository relate to one another.

Graphify is not an application dependency and is not required to run Shard
Archive. Install it as a standalone developer tool rather than adding it to the
backend `pyproject.toml` or frontend `package.json`.

## Installation

Install Graphify with `uv`:

```shell
uv tool install graphifyy
```

Confirm that the command is available:

```shell
graphify --version
```

Upgrade an existing installation with:

```shell
uv tool upgrade graphifyy
```

## Build a Local Code Graph

From the repository root, extract code relationships locally without an API key
or LLM backend:

```shell
graphify extract . --code-only
```

The extraction command creates `graphify-out/graph.json`. Generate the report
and interactive visualization from that graph with:

```shell
graphify cluster-only .
```

The output directory then contains:

```text
graphify-out/
├── graph.html
├── GRAPH_REPORT.md
└── graph.json
```

Open `graphify-out/graph.html` in a browser to explore the graph. On Windows,
PowerShell can open it with:

```powershell
Invoke-Item .\graphify-out\graph.html
```

The code-only workflow uses local AST parsing. Without an optional LLM backend,
community names may remain generic, but the extracted nodes and relationships
are still available.

## Query the Graph

After generating `graph.json`, query it from the repository root:

```shell
graphify query "How does the frontend reach the API?"
```

Use the graph as a navigation aid. Source code and project documentation remain
the authoritative references for implementation and architecture decisions.

## Optional Codex Integration

Graphify can register its skill with Codex:

```shell
graphify codex install
```

Restart Codex after installation. This integration changes the developer's
personal Codex configuration and is therefore optional; it is not part of the
repository setup.

## Repository Policy

Generated Graphify output is ignored by this repository and should be rebuilt
locally when needed. Do not add `graphify-out/` to a commit unless the project
explicitly decides to version generated graph artifacts in the future.
