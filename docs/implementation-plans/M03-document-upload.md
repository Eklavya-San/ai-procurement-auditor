# M03 — Document Upload

## Objective
Allow each audit to receive exactly the required procurement documents with safe upload validation.

## Implementation tasks
1. Implement multipart upload middleware with configurable size limits.
2. Define document slot/type rules for PO, Invoice and GRN.
3. Create POST /api/v1/audits/:auditId/documents.
4. Persist document metadata and attach the uploaded file through the storage abstraction.
5. Reject unsupported MIME types, over-sized files and invalid audit IDs.
6. Support replace/re-upload semantics without creating ambiguous active documents.
7. Expose upload progress/status data required by the web client.

## Primary files / modules
apps/api upload route/service, document schemas, storage interface, web upload components.

## Test plan
PDF/image success cases; invalid type, size, missing audit and duplicate-slot cases.

## Dependencies
M2 plus M4 storage interface can be introduced before implementation.

## Completion gate
A single audit can safely receive PO, Invoice and GRN files.

## Suggested commit
`feat: implement document upload`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
