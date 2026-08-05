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

Run the backend tests from `apps/api`:

```powershell
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
npm run build
```

## License

GNU AGPL v3
