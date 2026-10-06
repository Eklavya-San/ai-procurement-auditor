# M26 — API Layer

## Objective
Expose stable REST APIs for the complete audit lifecycle.

## Implementation tasks
1. Implement audit CRUD/list.
2. document upload/status.
3. process endpoint.
4. reconciliation result.
5. health/readiness.
6. validation/error envelopes.
7. pagination.
8. OpenAPI contract.

## Primary files / modules
apps/api/src/routes, controllers, services, middleware, openapi.

## Test plan
API contract and error-path tests for all endpoints.

## Dependencies
M2-M4, M24-M25

## Completion gate
API supports the full backend workflow without leaking internals.

## Suggested commit
feat: implement api layer

## Execution notes
Keep business logic deterministic and provider/UI agnostic. Add covering tests with each behavior change and retain version metadata for audit reproducibility.
