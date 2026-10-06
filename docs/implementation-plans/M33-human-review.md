# M33 — Human Review

## Objective
Allow safe manual resolution of low-confidence or ambiguous audits.

## Implementation tasks
1. Add REVIEW state/reasons.
2. review queue API/UI.
3. inspect evidence.
4. controlled extracted-value correction.
5. record before/after, reviewer and timestamp.
6. re-run normalization/reconciliation.
7. preserve prior versions.

## Primary files / modules
API review routes/services; web review UI; audit versioning.

## Test plan
Review assignment, correction, re-run and immutable history tests.

## Dependencies
M11, M22-M24, M28

## Completion gate
Ambiguous audits can be resolved without bypassing auditability.

## Suggested commit
feat: implement human review

## Execution notes
Keep business logic deterministic and provider/UI agnostic. Add covering tests with each behavior change and retain version metadata for audit reproducibility.
