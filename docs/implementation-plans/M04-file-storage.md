# M04 — File Storage

## Objective
Introduce a replaceable file-storage layer, starting with local filesystem storage.

## Implementation tasks
1. Define FileStorage and FileReference interfaces.
2. Implement secure local filesystem provider rooted outside source code.
3. Generate opaque internal file IDs and deterministic paths.
4. Stream files instead of loading large documents fully into memory.
5. Implement get/delete operations and storage cleanup helpers.
6. Add path traversal protections and filename sanitization.
7. Add configuration for storage root and retention behavior.

## Primary files / modules
packages/shared or config storage interfaces; apps/api storage implementation.

## Test plan
Put/get/delete round trip, large-file stream, path traversal rejection and missing-file behavior.

## Dependencies
M0, M1.

## Completion gate
Document upload works through the interface and changing storage provider requires no API/domain changes.

## Suggested commit
`feat: implement file storage`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
