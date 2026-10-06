# M36 — Production Docker

## Objective
Package the complete system for repeatable staging/production deployment.

## Implementation tasks
1. Create production Dockerfiles for web/API/worker.
2. use non-root where practical.
3. health checks.
4. separate dev/prod config.
5. persist MongoDB and application storage.
6. graceful shutdown.
7. document backup/restore and upgrades.

## Primary files / modules
Dockerfiles, docker-compose production config, deployment docs.

## Test plan
Clean-machine Compose startup, health, restart and persistence tests.

## Dependencies
M0, M25, M34, M35

## Completion gate
A clean host can start the full application using documented Compose commands.

## Suggested commit
feat: implement production docker

## Execution notes
Keep domain logic independent from transport/provider implementations. Add migration/version notes when persistent contracts change and keep security-sensitive operations behind explicit authorization boundaries.
