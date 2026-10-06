# M19 — Tax Rules

## Objective
Reconcile GST rates/components with controlled rounding.

## Implementation tasks
1. Compare line tax rates.
2. compare CGST/SGST/IGST.
3. recalculate tax from taxable value where possible.
4. classify rounding vs material differences.
5. attach evidence.

## Primary files / modules
packages/reconciliation/src/rules/tax.rule.ts; tax helpers.

## Test plan
Test exact GST, rounding boundary, wrong rate/component, missing tax and intra/inter-state cases.

## Dependencies
M14, M16, M21

## Completion gate
Tax results are deterministic, tolerance-aware and explainable.

## Suggested commit
feat: implement tax rules

## Execution notes
Keep business logic deterministic and provider/UI agnostic. Add covering tests with each behavior change and retain version metadata for audit reproducibility.
