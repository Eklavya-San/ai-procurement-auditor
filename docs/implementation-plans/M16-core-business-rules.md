# M16 — Core Business Rules

## Objective
Implement the first complete set of procurement identity, quantity, price, tax, total and duplicate checks as modular rules.

## Implementation tasks
1. Implement vendor match rule.
2. Implement PO number/reference rule.
3. Implement quantity rule hooks.
4. Implement unit-price rule hooks.
5. Implement tax rule hooks.
6. Implement total rule hooks.
7. Implement duplicate-invoice rule interface.
8. Standardize RuleResult fields: rule ID, status, expected, actual, difference, message and evidence.

## Primary files / modules
packages/reconciliation/src/rules/*.

## Test plan
Each rule has isolated pass/fail/warning tests plus aggregated engine tests.

## Dependencies
M15.

## Completion gate
All initial checks run as independent, testable rules.

## Suggested commit
`feat: implement core business rules`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
