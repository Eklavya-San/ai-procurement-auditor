# M15 — Reconciliation Engine

## Objective
Create the orchestration layer that evaluates a normalized audit context using independent rules.

## Implementation tasks
1. Define ReconciliationContext containing normalized PO, Invoice, GRN and matched lines.
2. Define ReconciliationRule and RuleResult contracts.
3. Create rule registry/execution order.
4. Aggregate rule outputs without making rule modules aware of HTTP, MongoDB or UI.
5. Produce deterministic structured results and raw rule evidence.
6. Version the engine contract.

## Primary files / modules
packages/reconciliation/src/*.

## Test plan
Rule execution ordering, result aggregation and deterministic output snapshots.

## Dependencies
M13, M14, M1.

## Completion gate
Given the same normalized input and configuration, the engine produces the same result.

## Suggested commit
`feat: implement reconciliation engine`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
