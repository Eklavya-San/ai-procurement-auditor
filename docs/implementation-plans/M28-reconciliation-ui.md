# M28 — Reconciliation UI

## Objective
Present decisions and mismatches clearly to procurement/finance users.

## Implementation tasks
1. Build decision banner.
2. financial impact.
3. three-way line comparison.
4. rule section.
5. mismatch detail.
6. evidence drawer.
7. partial/error states.

## Primary files / modules
apps/web/src/features/audits/result/*.

## Test plan
Fixture-driven tests for APPROVED/WARNING/HOLD/REVIEW and mismatch combinations.

## Dependencies
M27, M11, M22-M23

## Completion gate
A non-technical user can understand the outcome in under a minute.

## Suggested commit
feat: implement reconciliation ui

## Execution notes
Keep business logic deterministic and provider/UI agnostic. Add covering tests with each behavior change and retain version metadata for audit reproducibility.
