# M20 — Total Rules

## Objective
Recalculate expected totals and detect discrepancies without trusting printed totals.

## Implementation tasks
1. Calculate line subtotal.
2. apply discounts.
3. add tax.
4. compare expected vs extracted subtotal/tax/grand total.
5. classify rounding.
6. prevent duplicate financial counting.

## Primary files / modules
packages/reconciliation/src/rules/total.rule.ts; calculation helpers.

## Test plan
Test single/multi-line totals, discounts, taxes, rounding and intentional mismatch.

## Dependencies
M16, M19, M21

## Completion gate
Total variance is reproducible and does not double-count other rule impacts.

## Suggested commit
feat: implement total rules

## Execution notes
Keep business logic deterministic and provider/UI agnostic. Add covering tests with each behavior change and retain version metadata for audit reproducibility.
