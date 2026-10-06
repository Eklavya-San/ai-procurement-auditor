# M30 — Duplicate Invoice Detection

## Objective
Detect repeated invoices before payment.

## Implementation tasks
1. Implement exact vendor+invoice-number lookup.
2. candidate match by vendor+amount+date+PO.
3. optional line similarity.
4. return linked prior records.
5. configurable severity.
6. integrate once with decision engine.

## Primary files / modules
packages/reconciliation duplicate rules; persistence indexes.

## Test plan
Exact duplicate, near duplicate, unrelated and missing-data tests.

## Dependencies
M24, M22

## Completion gate
Duplicate risk is surfaced with a traceable prior record.

## Suggested commit
feat: implement duplicate invoice detection

## Execution notes
Keep business logic deterministic and provider/UI agnostic. Add covering tests with each behavior change and retain version metadata for audit reproducibility.
