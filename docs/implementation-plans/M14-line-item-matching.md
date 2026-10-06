# M14 — Line Item Matching

## Objective
Map corresponding PO, Invoice and GRN lines reliably before financial rules run.

## Implementation tasks
1. Implement exact item-code matching.
2. Implement SKU/part-number matching.
3. Implement normalized-description matching.
4. Add bounded fuzzy description matching only after deterministic methods fail.
5. Detect duplicate candidate lines and ambiguity.
6. Return unmatched/ambiguous lines as first-class results.
7. Record source/target line IDs, match method and confidence.

## Primary files / modules
packages/reconciliation/src/matching/* and schemas.

## Test plan
Reordered lines, exact code, description variation, duplicate descriptions, unmatched and ambiguous cases.

## Dependencies
M12, M13, M1.

## Completion gate
Every matched line is traceable and ambiguous lines cannot be silently reconciled.

## Suggested commit
`feat: implement line item matching`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
