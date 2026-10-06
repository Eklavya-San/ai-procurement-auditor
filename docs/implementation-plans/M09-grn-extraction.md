# M09 — GRN Extraction

## Objective
Extract GRN identity, PO reference, received/accepted/rejected quantities and line evidence.

## Implementation tasks
1. Write a versioned GRN extraction prompt.
2. Map lines into canonical GRNLine records.
3. Preserve ordered, received, accepted and rejected quantities separately.
4. Handle documents where only some quantity fields are present.
5. Capture batch/lot where available without making it mandatory.
6. Validate output and preserve source evidence.
7. Add GRN fixtures for partial receipts and rejection scenarios.

## Primary files / modules
services/extraction GRN prompt/mapper, GRN fixtures and tests.

## Test plan
Complete, partial and ambiguous GRN fixture cases.

## Dependencies
M6 and M1.

## Completion gate
Representative GRNs produce schema-valid structured GRN data.

## Suggested commit
`feat: implement grn extraction`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
