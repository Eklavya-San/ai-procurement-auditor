# M44 — Purchase Requisition Validation

## Objective
Check that POs remain within approved purchase-request constraints.

## Implementation tasks
1. Define requisition schema/states.
2. import/upload requisitions.
3. match requisition to PO lines.
4. compare quantity/item/price constraints.
5. flag changes requiring review.
6. preserve evidence.

## Primary files / modules
requisition domain, matching/rules, API/web workflow.

## Test plan
Exact match, quantity increase, price change and missing requisition tests.

## Dependencies
M14-M22, M38-M40

## Completion gate
POs that depart from approved requests are detected and explained.

## Suggested commit
feat: implement purchase requisition validation

## Execution notes
Keep domain logic independent from transport/provider implementations. Add migration/version notes when persistent contracts change and keep security-sensitive operations behind explicit authorization boundaries.
