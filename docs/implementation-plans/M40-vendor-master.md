# M40 — Vendor Master

## Objective
Create reusable vendor identities and policy profiles.

## Implementation tasks
1. Implement vendor CRUD/search.
2. legal name, aliases, GSTIN, addresses, payment terms, tolerance profile.
3. integrate matching.
4. detect/merge duplicates.
5. expose vendor context in audits.

## Primary files / modules
vendor domain/repository/service, matcher integration, web vendor UI.

## Test plan
CRUD, alias matching, duplicate and merge/reference tests.

## Dependencies
M13, M38, M39

## Completion gate
Vendor master improves identity matching and policy resolution consistently.

## Suggested commit
feat: implement vendor master

## Execution notes
Keep domain logic independent from transport/provider implementations. Add migration/version notes when persistent contracts change and keep security-sensitive operations behind explicit authorization boundaries.
