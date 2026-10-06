# M38 — Authentication and Multi-Tenancy

## Objective
Convert the validated system into a secure multi-tenant SaaS foundation.

## Implementation tasks
1. Add Organization/User.
2. choose auth/session model.
3. define OWNER/ADMIN/PROCUREMENT/FINANCE/REVIEWER/VIEWER.
4. enforce tenant scoping on DB and file access.
5. add authorization middleware.
6. tenant-aware history.

## Primary files / modules
schemas, API auth, repositories, storage access, web session/auth.

## Test plan
Authentication, role and cross-tenant isolation tests.

## Dependencies
M34-M37

## Completion gate
Two organizations can use one deployment without cross-tenant data/file access.

## Suggested commit
feat: implement authentication and multi-tenancy

## Execution notes
Keep domain logic independent from transport/provider implementations. Add migration/version notes when persistent contracts change and keep security-sensitive operations behind explicit authorization boundaries.
