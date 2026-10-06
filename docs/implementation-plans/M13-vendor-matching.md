# M13 — Vendor Matching

## Objective
Match vendor identities across PO, Invoice and GRN safely and audibly.

## Implementation tasks
1. Build normalized vendor comparison keys.
2. Prefer exact legal name/GSTIN matches.
3. Add alias matching where a configured vendor master exists.
4. Use fuzzy matching only for unresolved names and produce confidence.
5. Return ambiguous matches as REVIEW instead of guessing.
6. Attach matched identities and match method to audit results.

## Primary files / modules
packages/reconciliation/vendor matcher, schemas, future vendor repository interface.

## Test plan
Exact, alias, punctuation/casing variation, fuzzy and ambiguous vendor cases.

## Dependencies
M12, M1.

## Completion gate
Vendor mismatches are detected deterministically with an auditable match method.

## Suggested commit
`feat: implement vendor matching`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
