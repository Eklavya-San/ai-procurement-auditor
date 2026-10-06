# M24 — Audit Persistence

## Objective
Persist processing data and immutable audit results with version metadata.

## Implementation tasks
1. Create MongoDB repositories for audits/documents/extractions/jobs/results.
2. persist normalized data.
3. store schema/prompt/model/provider/engine/rule versions.
4. persist stage timestamps/errors.
5. index common lookups.
6. freeze completed results.

## Primary files / modules
apps/api repositories/models; persistence schemas.

## Test plan
Round-trip persistence, versioning, immutable completed result and lookup tests.

## Dependencies
M2, M10-M11, M22-M23

## Completion gate
An old audit can be reopened and explained exactly as originally evaluated.

## Suggested commit
feat: implement audit persistence

## Execution notes
Keep business logic deterministic and provider/UI agnostic. Add covering tests with each behavior change and retain version metadata for audit reproducibility.
