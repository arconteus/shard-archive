# Shard Archive

> Local-first knowledge graph for narrative worlds.

Shard Archive is an open-source platform for creating, organizing and analyzing narrative knowledge through interconnected fragments.

Instead of storing long documents, Shard Archive models worlds as semantic graphs where every fragment, entity and relationship becomes part of an explorable knowledge network.

## Vision

- Fragment-first knowledge model
- Semantic graph
- Local-first
- AI-assisted analysis
- Canon and perspective management

## Status

🚧 Early development.

## Development

The API and web client are independent applications intended to run locally.

### Backend

Requirements: [uv](https://docs.astral.sh/uv/).

```powershell
cd apps/api
uv sync
uv run uvicorn shard_archive_api.main:app --reload
```

The API is available at `http://localhost:8000`. Verify it with
`http://localhost:8000/health`.

Run backend linting, formatting checks, and tests from `apps/api`:

```powershell
uv run ruff check .
uv run ruff format --check .
uv run pytest
```

### Frontend

Requirements: Node.js and npm.

```powershell
cd apps/web
npm install
npm run dev
```

Open `http://localhost:5173`. The web client checks the local API health endpoint.
To use a different API address, set `VITE_API_URL` before starting Vite.

Create a production build from `apps/web`:

```powershell
npm run lint
npm run format:check
npm run typecheck
npm run build
```

### Convenience scripts

Use Codekeeper for an interactive development menu:

```shell
npm run codekeeper
```

The menu can install backend and frontend dependencies, start both applications,
or run the repository checks. The same actions are also available directly:

```shell
npm run setup
npm run dev
npm run check
```

From the repository root, start the API and web client together:

```shell
node scripts/dev.mjs
```

Run all backend and frontend quality checks:

```shell
node scripts/check.mjs
```

## License

GNU AGPL v3
