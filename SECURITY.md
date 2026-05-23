# Security Policy

## Supported Scope

V1 is a static local workflow: Markdown, HTML, CSS, JavaScript, JSON, and local media. There should be no backend, auth system, database, analytics, tracking script, remote provider SDK, or required network call.

## Reporting

Open a GitHub security advisory or private issue if available. If not, open a normal issue without including secrets or exploit payloads that expose private data.

## Do Not Include

- API keys, tokens, passwords, cookies, or private provider configuration.
- Real customer data, private assets, or unpublished review notes.
- `.env`, `.sisyphus/`, `.worktree-id`, credentials, private local paths, `.pem`, or `.key` files.

## Release Check

Run `node scripts/validate-static.js` before release. Review bundled examples for private paths, unpublished assets, and private planning notes.
