# M11 — Evidence System

## Objective
Make extracted values and rule failures traceable back to source documents.

## Implementation tasks
1. Define Evidence model with document ID, page, source text and optional coordinates/confidence.
2. Attach evidence to high-value fields such as invoice number, quantities, prices, taxes and totals.
3. Create evidence references on reconciliation rule results.
4. Store source text excerpts safely without exposing unintended content.
5. Define UI/API response shape for evidence inspection.
6. Add evidence completeness diagnostics.

## Primary files / modules
packages/schemas evidence types, extraction mappings, reconciliation result types, API serializers.

## Test plan
Evidence survives extraction -> normalization -> reconciliation; page/source references remain linked.

## Dependencies
M10 plus M5.

## Completion gate
A reviewer can trace a material result back to a document page/source excerpt.

## Suggested commit
`feat: implement evidence system`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
