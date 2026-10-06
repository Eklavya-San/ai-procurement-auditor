# M00 — Foundation

## Objective
Convert the bootstrap repository into a runnable Yarn + TypeScript monorepo with web, API, shared packages, MongoDB and developer tooling.

## Implementation tasks
1. Configure root Yarn workspaces for apps/*, packages/* and services/*; add consistent package naming and scripts.
2. Add root tsconfig with shared compiler settings and project references or package-level configs where appropriate.
3. Bootstrap the React + TypeScript web app and Express + TypeScript API with strict TypeScript enabled.
4. Add ESLint, Prettier and the chosen test runner; make lint, type-check, test and build commands deterministic.
5. Add environment loading and typed configuration with development-safe defaults.
6. Add MongoDB client/connection module and lifecycle handling without coupling domain logic to MongoDB.
7. Add /health and /api/v1/health endpoints plus a minimal web shell that calls the API.
8. Document local development, required environment variables and Docker Compose startup.

## Primary files / modules
Root package.json, tsconfig*.json, apps/web, apps/api, packages/config, docker-compose.yml, README/docs.

## Test plan
Smoke-test workspace install, API startup, health response, web build, TypeScript compile, lint and test command.

## Dependencies
None beyond the current repository bootstrap.

## Completion gate
A fresh checkout can be installed and run locally with web + API + MongoDB, and all quality gates pass.

## Suggested commit
`feat: implement foundation`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
