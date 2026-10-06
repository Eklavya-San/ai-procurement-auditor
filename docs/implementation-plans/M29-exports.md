# M29 — Reporting and Export

## Objective
Generate JSON, Excel and PDF audit reports.

## Implementation tasks
1. Create stable export DTO.
2. Excel Summary/Line Comparison/Rule Results/Evidence sheets.
3. PDF report.
4. preserve selected immutable result version.
5. secure download endpoints.

## Primary files / modules
apps/api export services; report templates; web export controls.

## Test plan
JSON snapshots, workbook sheet/column tests and PDF smoke generation.

## Dependencies
M24, M28

## Completion gate
Every completed audit can be exported as a complete audit package.

## Suggested commit
feat: implement reporting and export

## Execution notes
Keep business logic deterministic and provider/UI agnostic. Add covering tests with each behavior change and retain version metadata for audit reproducibility.
