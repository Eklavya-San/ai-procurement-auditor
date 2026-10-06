# M02 — Audit Creation

## Objective
Create the persistent audit lifecycle and API primitives before documents are processed.

## Implementation tasks
1. Create audit repository interface and MongoDB implementation.
2. Create audit service with create/get/list operations.
3. Define audit status transitions and reject invalid transitions.
4. Implement POST /api/v1/audits, GET /api/v1/audits and GET /api/v1/audits/:id.
5. Return stable audit IDs and timestamps.
6. Add pagination contract for audit listing.
7. Add request validation and consistent API error responses.

## Primary files / modules
apps/api/src/routes/audits*, controllers, services, repositories, schemas/models.

## Test plan
Create/get/list audit integration tests plus invalid transition tests.

## Dependencies
M0, M1.

## Completion gate
The API can create an audit record and retrieve it consistently from MongoDB.

## Suggested commit
`feat: implement audit creation`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
