# M25 — Background Worker

## Objective
Run parsing/extraction/reconciliation asynchronously with retries and idempotency.

## Implementation tasks
1. Add queue adapter.
2. define job payload/idempotency key.
3. orchestrate parse→extract→validate→normalize→match→reconcile→finalize.
4. parallelize independent extraction.
5. retry transient errors.
6. persist progress.
7. graceful shutdown.

## Primary files / modules
services/reconciliation/src/worker/*; queue adapter.

## Test plan
Happy path, transient retry, permanent failure, duplicate job and restart recovery tests.

## Dependencies
M5-M24

## Completion gate
Audits process asynchronously and recover safely from transient failure.

## Suggested commit
feat: implement background worker

## Execution notes
Keep business logic deterministic and provider/UI agnostic. Add covering tests with each behavior change and retain version metadata for audit reproducibility.
