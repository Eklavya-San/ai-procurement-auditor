# M08 — Invoice Extraction

## Objective
Extract invoice identity, PO reference, line items, GST/tax details, totals and evidence.

## Implementation tasks
1. Write a versioned invoice extraction prompt.
2. Map output into the canonical Invoice schema.
3. Handle GSTIN, CGST, SGST and IGST independently.
4. Preserve invoice number/date/PO references exactly before normalization.
5. Capture line-level taxable amount, discounts and unit information.
6. Validate output and preserve extraction metadata.
7. Add invoice fixtures covering common Indian commercial invoice layouts.

## Primary files / modules
services/extraction invoice prompt/mapper, invoice fixtures and tests.

## Test plan
Valid/partial/missing invoice fields and multi-tax scenarios through the mock provider.

## Dependencies
M6 and M1.

## Completion gate
Representative invoices produce schema-valid structured invoice data.

## Suggested commit
`feat: implement invoice extraction`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
