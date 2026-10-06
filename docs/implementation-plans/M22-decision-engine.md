# M22 — Decision Engine

## Objective
Aggregate rule outcomes into APPROVED, WARNING, HOLD or REVIEW.

## Implementation tasks
1. Define severity precedence.
2. HOLD for critical failures.
3. WARNING for non-critical warnings.
4. APPROVED when applicable rules pass.
5. REVIEW for ambiguous/missing/high-risk data.
6. generate stable reason codes.

## Primary files / modules
packages/reconciliation/src/decision/*.

## Test plan
Test all combinations and reason-code snapshots.

## Dependencies
M16, M21

## Completion gate
Final status is deterministic and every non-pass has explicit reasons.

## Suggested commit
feat: implement decision engine

## Execution notes
Keep business logic deterministic and provider/UI agnostic. Add covering tests with each behavior change and retain version metadata for audit reproducibility.
