# Repository Commands

Use Codekeeper for shared project workflows. Run commands from the repository
root.

```shell
npm run codekeeper -- setup   # Install backend and frontend dependencies
npm run codekeeper -- dev     # Start the API and web client
npm run codekeeper -- check   # Run tests and quality checks
npm run codekeeper -- format  # Apply Ruff and Prettier formatting
npm run codekeeper -- help    # Show available commands
```

Use `check` before considering implementation complete. Use `format` only when
formatting changes are intended, then rerun `check`.

Do not create AI-specific alternatives to these workflows. Task memories are
ordinary local Markdown files and require no custom command.

Read the [Codekeeper guide](../docs/tools/codekeeper.md) only when setup details
or troubleshooting are needed.
