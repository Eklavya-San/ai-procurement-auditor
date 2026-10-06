# M18 — Price Rules

## Objective
Detect invoice unit prices higher than agreed PO prices with tolerance-aware results.

## Implementation tasks
1. Compare matched PO and Invoice unit prices.
2. Handle discounts independently from gross unit price.
3. Calculate price variance in exact money arithmetic.
4. Defer threshold classification to the tolerance configuration.
5. Handle missing PO price as REVIEW rather than zero.
6. Attach line evidence and financial impact inputs.

## Primary files / modules
packages/reconciliation/src/rules/price.rule.ts and money helpers.

## Test plan
Equal price, small variance, tolerance boundary, over-tolerance hold, missing price review.

## Dependencies
M14, M16.

## Completion gate
Unit-price reconciliation is exact, configurable and auditable.

## Suggested commit
`feat: implement price rules`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
