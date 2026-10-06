# M45 — ERP Integrations

## Objective
Introduce stable adapters for external procurement systems without coupling the core engine.

## Implementation tasks
1. Define ProcurementIntegration interface.
2. implement CSV/Excel adapters.
3. generic REST adapter.
4. normalize source records.
5. idempotent import tracking.
6. design SAP/Tally/Zoho/Busy adapters as providers.
7. export audit result hooks.

## Primary files / modules
packages/integrations, import jobs, mapping schemas, admin UI.

## Test plan
Import idempotency, mapping errors, partial batches and duplicate-source tests.

## Dependencies
M24-M26, M38-M40

## Completion gate
External records can enter the same canonical audit engine through a stable contract.

## Suggested commit
feat: implement erp integrations

## Execution notes
Keep domain logic independent from transport/provider implementations. Add migration/version notes when persistent contracts change and keep security-sensitive operations behind explicit authorization boundaries.
