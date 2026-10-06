# M31 — Golden Test Fixtures

## Objective
Build a permanent regression corpus for business behavior.

## Implementation tasks
1. Create PO/Invoice/GRN happy path, price, quantity, tax, total, partial receipt, duplicate and REVIEW fixtures.
2. store mock extraction, normalized and expected results.
3. document fixture provenance.

## Primary files / modules
tests/fixtures; examples/documents.

## Test plan
Run complete deterministic regression suite from fixture through reconciliation.

## Dependencies
M1-M23

## Completion gate
Core behavior is protected against regressions with deterministic fixtures.

## Suggested commit
feat: implement golden test fixtures

## Execution notes
Keep business logic deterministic and provider/UI agnostic. Add covering tests with each behavior change and retain version metadata for audit reproducibility.
