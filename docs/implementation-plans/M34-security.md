# M34 — Security Hardening

## Objective
Harden document handling and application boundaries before real customer data.

## Implementation tasks
1. Validate MIME/signatures, enforce file limits, secure temp files, add malware-scanning hook, protect downloads, manage secrets, add security headers/rate limits, define retention/deletion and incident basics.

## Primary files / modules
apps/api security middleware, storage, configuration, docs.

## Test plan
Security regression tests for uploads, paths, permissions and deleted/expired files.

## Dependencies
M24-M29

## Completion gate
Security controls are enforced at system boundaries and documented.

## Suggested commit
feat: implement security hardening

## Execution notes
Keep domain logic independent from transport/provider implementations. Add migration/version notes when persistent contracts change and keep security-sensitive operations behind explicit authorization boundaries.
