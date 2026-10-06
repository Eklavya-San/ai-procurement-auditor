# M43 — Vendor Quotation Comparison

## Objective
Expand the product into pre-purchase vendor selection.

## Implementation tasks
1. Define RFQ/quotation schemas.
2. reuse parsing/extraction.
3. normalize commercial/technical fields.
4. match lines.
5. compare price/tax/delivery/warranty/payment terms.
6. produce transparent weighted recommendation separate from payment audit.

## Primary files / modules
quotation domain, extraction prompts, comparison service, web flow.

## Test plan
Multi-vendor, missing field, weights and recommendation traceability tests.

## Dependencies
M5-M14, M31, M38-M40

## Completion gate
Users can compare multiple vendor quotations with auditable criteria.

## Suggested commit
feat: implement vendor quotation comparison

## Execution notes
Keep domain logic independent from transport/provider implementations. Add migration/version notes when persistent contracts change and keep security-sensitive operations behind explicit authorization boundaries.
