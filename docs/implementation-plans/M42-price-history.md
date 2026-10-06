# M42 — Price History

## Objective
Detect material purchase-price increases using historical normalized transactions.

## Implementation tasks
1. Persist vendor/item price history.
2. historical lookup.
3. previous/average/min/max and percentage change.
4. configurable price-history rule.
5. show supporting transactions.
6. treat missing history as neutral.

## Primary files / modules
price history service/schema, reconciliation rule, result/dashboard UI.

## Test plan
No-history, single-history, repeated purchase, price jump and tolerance tests.

## Dependencies
M40-M41, M21

## Completion gate
An audit can explain material current-vs-historical price variance.

## Suggested commit
feat: implement price history

## Execution notes
Keep domain logic independent from transport/provider implementations. Add migration/version notes when persistent contracts change and keep security-sensitive operations behind explicit authorization boundaries.
