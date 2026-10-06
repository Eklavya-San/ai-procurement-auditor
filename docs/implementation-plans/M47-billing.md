# M47 — Billing

## Objective
Introduce usage-based monetization after product usage is validated.

## Implementation tasks
1. Define billable unit.
2. plan/subscription model.
3. payment provider adapter.
4. metering from completed audits.
5. quota enforcement.
6. billing portal/usage UI.
7. verified and idempotent payment webhooks.

## Primary files / modules
billing domain, payment adapter, metering, web billing screens.

## Test plan
Usage counting, duplicate event, plan boundary, subscription changes and failed payment tests.

## Dependencies
M38, M41 and validated customer usage

## Completion gate
Customers can be billed predictably without coupling payment billing to reconciliation logic.

## Suggested commit
feat: implement billing

## Execution notes
Keep domain logic independent from transport/provider implementations. Add migration/version notes when persistent contracts change and keep security-sensitive operations behind explicit authorization boundaries.
