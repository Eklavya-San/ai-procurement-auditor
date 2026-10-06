# M21 — Tolerance Engine

## Objective
Centralize configurable thresholds and policy resolution.

## Implementation tasks
1. Define global defaults.
2. resolve customer/vendor/document/rule overrides.
3. support absolute and percentage tolerances.
4. define boundaries.
5. version effective settings.

## Primary files / modules
packages/reconciliation/src/tolerances/*; settings schemas.

## Test plan
Test default values, precedence, exact boundaries and mixed tolerance types.

## Dependencies
M16

## Completion gate
Rules change behavior through configuration, not code edits.

## Suggested commit
feat: implement tolerance engine

## Execution notes
Keep business logic deterministic and provider/UI agnostic. Add covering tests with each behavior change and retain version metadata for audit reproducibility.
