# M32 — Real AI Validation

## Objective
Measure real extraction quality and select/tune the provider/model.

## Implementation tasks
1. Create evaluation dataset.
2. define field/line accuracy.
3. track false APPROVED, false HOLD and REVIEW.
4. compare providers/models.
5. tune prompts.
6. version model/provider/prompt.
7. set release thresholds.

## Primary files / modules
evaluation scripts, prompt versions and reports.

## Test plan
Offline reproducible scoring; no external provider required in normal CI.

## Dependencies
M6-M10, M31

## Completion gate
A measured model/provider configuration meets agreed accuracy and safety thresholds.

## Suggested commit
feat: implement real ai validation

## Execution notes
Keep business logic deterministic and provider/UI agnostic. Add covering tests with each behavior change and retain version metadata for audit reproducibility.
