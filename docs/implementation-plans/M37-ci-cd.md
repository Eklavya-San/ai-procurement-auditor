# M37 — CI/CD

## Objective
Automate quality gates and repeatable artifact/deployment creation.

## Implementation tasks
1. Add PR pipeline for install/lint/type-check/unit/integration/build.
2. cache dependencies.
3. build/publish versioned images.
4. staging deployment.
5. migration step.
6. rollback procedure.

## Primary files / modules
 .github/workflows/*, scripts, deployment docs.

## Test plan
Exercise PR and main workflows and verify failed checks block publishing.

## Dependencies
M31, M36

## Completion gate
Main branch changes yield tested, versioned deployable artifacts.

## Suggested commit
feat: implement ci/cd

## Execution notes
Keep domain logic independent from transport/provider implementations. Add migration/version notes when persistent contracts change and keep security-sensitive operations behind explicit authorization boundaries.
