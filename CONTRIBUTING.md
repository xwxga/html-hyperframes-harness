# Contributing

## Principles

This repository is a reusable pre-generation harness for HyperFrames. Keep changes small, static, reviewable, and provider-neutral.

- Markdown remains the harness source of truth before render handoff.
- `direction_board.html` is a review artifact, not a backend app.
- `04_render_plan.md` is the only final HyperFrames handoff.
- V1 must stay static: HTML, CSS, JavaScript, Markdown, JSON, and local media.

## Development Flow

1. Create a feature branch.
2. Keep public docs and templates in English unless the file is an explicit translation.
3. Preserve locked source content in real examples.
4. Run `node scripts/validate-static.js`.
5. Open the demo or board locally when changing the workbench UI.
6. Use a pull request for changes to `main`.

## Scope Boundaries

Do not add backend services, auth, databases, websocket collaboration, provider SDKs, or final render execution to V1.

## Local Planning State

`.sisyphus/` is local agent state and is intentionally ignored. Do not commit it. If a plan becomes public documentation, rewrite it with secrets and machine-local paths removed.
