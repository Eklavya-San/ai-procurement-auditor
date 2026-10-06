# M17 — Quantity Rules

## Objective
Protect against invoicing quantities greater than accepted receipts while supporting partial receipts.

## Implementation tasks
1. Compare invoice quantity against accepted GRN quantity per matched line.
2. Handle missing accepted quantity using configured fallback policy.
3. Support partial receipt where invoice quantity is within accepted quantity.
4. Detect invoice quantity greater than PO quantity where relevant.
5. Calculate quantity variance and excess quantity per line.
6. Attach evidence from invoice and GRN lines.

## Primary files / modules
packages/reconciliation/src/rules/quantity.rule.ts and financial helpers.

## Test plan
100/100/100 pass, 100/100/110 hold, 100/60/60 partial approval, 100/60/80 hold, missing fields review.

## Dependencies
M14, M16, M21 will later supply tolerance.

## Completion gate
Quantity decisions match configured business policy and never double-count quantities.

## Suggested commit
`feat: implement quantity rules`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
