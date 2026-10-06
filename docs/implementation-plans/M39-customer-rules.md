# M39 — Customer Rule Configuration

## Objective
Allow customers to configure tolerances and procurement policy without code changes.

## Implementation tasks
1. Persist organization rule profiles.
2. build settings API/UI.
3. support price/quantity/tax/rounding/partial-invoice/duplicate policies.
4. resolve effective config at audit start.
5. freeze config/version into audit.

## Primary files / modules
rule settings schemas/repository, resolver, web settings.

## Test plan
CRUD, precedence, invalid config and frozen-audit-version tests.

## Dependencies
M21, M38

## Completion gate
Customer policy changes affect new audits while historical audits remain reproducible.

## Suggested commit
feat: implement customer rule configuration

## Execution notes
Keep domain logic independent from transport/provider implementations. Add migration/version notes when persistent contracts change and keep security-sensitive operations behind explicit authorization boundaries.
