# M01 — Domain Schemas

## Objective
Define the canonical, runtime-validated procurement domain model shared by extraction, reconciliation, API and UI.

## Implementation tasks
1. Define Vendor, Address, Money, Tax, Evidence and common document metadata types.
2. Define PurchaseOrder and PurchaseOrderLine schemas.
3. Define Invoice and InvoiceLine schemas.
4. Define GRN and GRNLine schemas.
5. Define Audit, Document, Job, RuleResult and ReconciliationResult schemas.
6. Define enums/unions for DocumentType, Decision, RuleStatus, processing status and confidence metadata.
7. Choose one runtime validation library and expose parse/safeParse helpers from packages/schemas.
8. Add schema version fields and make backward-compatible evolution explicit.

## Primary files / modules
packages/schemas/src/* and shared domain type exports.

## Test plan
Valid fixtures for PO/Invoice/GRN; invalid quantities, dates, money, tax and required identifiers must fail validation.

## Dependencies
M0 Foundation.

## Completion gate
Every downstream package imports canonical schemas instead of defining duplicate document types.

## Suggested commit
`feat: implement domain schemas`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
