# M23 — Financial Impact

## Objective
Quantify potential overbilling and variance safely.

## Implementation tasks
1. Model impact categories.
2. calculate excess quantity.
3. calculate unit-price variance.
4. calculate tax/total variance.
5. prevent overlap/double counting.
6. expose per-line and audit totals with calculation traces.

## Primary files / modules
packages/reconciliation/src/financial/*.

## Test plan
Test quantity, price, tax, combined and overlapping discrepancies.

## Dependencies
M17-M20, M21

## Completion gate
Every material variance has a reproducible monetary calculation.

## Suggested commit
feat: implement financial impact

## Execution notes
Keep business logic deterministic and provider/UI agnostic. Add covering tests with each behavior change and retain version metadata for audit reproducibility.
