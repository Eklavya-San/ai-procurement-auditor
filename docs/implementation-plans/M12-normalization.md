# M12 — Normalization

## Objective
Convert equivalent representations into canonical values before comparison.

## Implementation tasks
1. Normalize whitespace, casing and punctuation for comparison keys.
2. Normalize dates into ISO format while retaining original source values.
3. Normalize units into a controlled unit vocabulary.
4. Normalize currency and money into exact arithmetic representation.
5. Normalize GST/tax representations into numeric rates and components.
6. Normalize PO/invoice/GRN reference strings.
7. Create comparison-safe vendor and item keys without overwriting source values.

## Primary files / modules
packages/shared normalization utilities; packages/schemas normalized forms.

## Test plan
Equivalent value pairs for units, dates, currency, vendor names, references and tax formats.

## Dependencies
M1 and M11.

## Completion gate
Equivalent source representations compare identically while source originals remain available.

## Suggested commit
`feat: implement normalization`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
