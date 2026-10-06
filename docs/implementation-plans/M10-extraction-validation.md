# M10 — Extraction Validation

## Objective
Make malformed, incomplete or suspicious model output safe before it reaches normalization/reconciliation.

## Implementation tasks
1. Implement a single validation gateway after every provider response.
2. Separate transport/provider errors from schema validation errors.
3. Implement bounded structured-output repair/retry.
4. Record original output, validation result and repair attempt metadata under controlled retention.
5. Detect required-field absence where the downstream business rule needs a value.
6. Assign REVIEW eligibility when extraction confidence is insufficient.
7. Ensure invalid output never enters reconciliation.

## Primary files / modules
services/extraction validation service, schemas, extraction persistence metadata.

## Test plan
Malformed JSON, wrong types, missing values, repair success/failure and provider retry behavior.

## Dependencies
M7-M9 and M6.

## Completion gate
Only validated extraction objects enter the normalization pipeline.

## Suggested commit
`feat: implement extraction validation`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
