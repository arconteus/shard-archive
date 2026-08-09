# Shard Archive

> Local-first knowledge graph for narrative worlds.

Shard Archive is an open-source platform for creating, organizing, and
analyzing narrative knowledge through interconnected fragments.

Instead of storing worlds as isolated documents, Shard Archive models fragments,
entities, sources, and relationships as an explorable semantic network. The
project prioritizes local ownership, traceable provenance, and AI as an optional
assistant rather than an authority.

## Status

Shard Archive is in early development. The current repository contains the
initial FastAPI backend, Vue web client, project documentation, automated
checks, and development tooling.

## Principles

- Local-first operation and data ownership;
- fragment-first knowledge capture;
- explicit relationships and provenance;
- independent backend and frontend applications;
- AI-assisted workflows with user confirmation;
- progressive complexity instead of premature infrastructure.

## Repository Structure

```text
shard-archive/
├── apps/
│   ├── api/       # FastAPI application
│   └── web/       # Vue 3 application
├── docs/          # Product, architecture, and domain documentation
├── scripts/       # Codekeeper and its focused development commands
└── package.json   # Repository-level Codekeeper entry point
```

## Development with Codekeeper

Codekeeper is the development console for Shard Archive. Like an early,
project-specific Artisan, it provides one interface for preparing the workspace,
starting the applications, and validating the repository.

### Requirements

Codekeeper requires:

- [Node.js](https://nodejs.org/) and npm;
- [uv](https://docs.astral.sh/uv/) for Python environment management;
- Git when working from a cloned repository.

Codekeeper manages the project dependencies after those tools are available.

### Start Codekeeper

From the repository root, run:

```shell
npm run codekeeper
```

On its first run, Codekeeper prepares its own terminal dependency automatically.
No separate project dependency installation command is required.

Use the interactive menu to:

- prepare the backend and frontend;
- start the local development environment;
- run tests and quality checks;
- fix backend and frontend formatting;
- exit safely.

The menu supports keyboard navigation and Ctrl+C cancellation.

### Direct Codekeeper Commands

Codekeeper also supports non-interactive commands:

```shell
npm run codekeeper -- setup
npm run codekeeper -- dev
npm run codekeeper -- check
npm run codekeeper -- format
npm run codekeeper -- memory:new <task-name>
npm run codekeeper -- memory:status
npm run codekeeper -- memory:close
npm run codekeeper -- ai:check
npm run codekeeper -- help
```

These commands expose the same workflows as the interactive menu and are useful
for automation or terminals without interactive input.

For complete usage and troubleshooting, read the
[Codekeeper guide](docs/tools/codekeeper.md).

## Local Services

When Codekeeper starts the development environment, the applications are
available at:

- Web client: `http://localhost:5173`;
- API: `http://localhost:8000`;
- API health endpoint: `http://localhost:8000/health`.

Use Ctrl+C in the Codekeeper session to stop both applications.

## Documentation

Project documentation starts at [docs/README.md](docs/README.md) and includes:

- product vision and philosophy;
- product requirements and roadmap;
- architecture and Architecture Decision Records;
- domain concepts;
- development and research notes;
- optional development tools such as Graphify.

The documentation describes the intended direction of the project. Decisions may
evolve as implementation and research provide new evidence.

## Contributing

Keep changes focused and consistent with the documented local-first architecture.
Major architectural decisions should be recorded through an Architecture Decision
Record. Use Codekeeper to run the repository checks before opening a pull request.

## License

Shard Archive is licensed under the [GNU Affero General Public License v3.0](LICENSE).
