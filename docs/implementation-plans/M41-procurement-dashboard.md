# M41 — Procurement Dashboard

## Objective
Turn audit history into actionable procurement intelligence.

## Implementation tasks
1. Add server-side KPI aggregation.
2. total audits and decision rates.
3. potential leakage definition.
4. top mismatch reasons/vendors.
5. time filters.
6. large-dataset pagination.

## Primary files / modules
API aggregation services, web dashboard components.

## Test plan
Known-fixture aggregation correctness and filter tests.

## Dependencies
M24, M38-M40

## Completion gate
Procurement managers can identify major control and financial risks quickly.

## Suggested commit
feat: implement procurement dashboard

## Execution notes
Keep domain logic independent from transport/provider implementations. Add migration/version notes when persistent contracts change and keep security-sensitive operations behind explicit authorization boundaries.
