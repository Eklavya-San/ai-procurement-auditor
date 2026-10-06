# M35 — Observability

## Objective
Make audit processing failures, latency and AI behavior measurable.

## Implementation tasks
1. Add structured logging and correlation IDs.
2. record stage durations.
3. track provider latency/retries/errors.
4. add audit throughput/decision metrics.
5. queue/worker health.
6. actionable error categories.
7. minimal operations dashboard.

## Primary files / modules
shared logging/instrumentation, API/worker metrics.

## Test plan
Contract tests for logs/metrics plus health/readiness checks.

## Dependencies
M25-M26

## Completion gate
Operators can locate failures and slow stages without reproducing them manually.

## Suggested commit
feat: implement observability

## Execution notes
Keep domain logic independent from transport/provider implementations. Add migration/version notes when persistent contracts change and keep security-sensitive operations behind explicit authorization boundaries.
