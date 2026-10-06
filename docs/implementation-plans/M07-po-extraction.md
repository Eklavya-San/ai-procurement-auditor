# M07 — PO Extraction

## Objective
Extract Purchase Order headers, line items, taxes, totals and evidence into the canonical schema.

## Implementation tasks
1. Write a versioned PO extraction prompt/instruction set.
2. Define output JSON shape exactly matching the PO schema.
3. Pass page-aware parser content to the provider.
4. Request null for unavailable fields and prohibit invented values.
5. Capture field confidence and page/source evidence where available.
6. Validate output through packages/schemas and expose extraction diagnostics.
7. Create representative PO fixtures for common table/header layouts.

## Primary files / modules
services/extraction PO prompt/provider mapper, PO schema fixtures.

## Test plan
Schema-valid extraction fixture tests plus missing-field and noisy-layout cases using the mock provider.

## Dependencies
M1, M5, M6.

## Completion gate
A PO can be converted from parsed content into validated canonical PO JSON.

## Suggested commit
`feat: implement po extraction`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
