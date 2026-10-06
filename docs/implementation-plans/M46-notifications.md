# M46 — Notifications

## Objective
Deliver reliable signals for actionable audit events.

## Implementation tasks
1. Define notification events.
2. email/webhook provider interface.
3. trigger completion/HOLD/REVIEW/duplicate/material mismatch.
4. user preferences.
5. idempotent retries.
6. delivery status history.

## Primary files / modules
notification schemas/service/providers, worker jobs, preferences UI.

## Test plan
Trigger, disabled preference, retry and duplicate-delivery tests.

## Dependencies
M25, M38-M39

## Completion gate
Relevant users receive one reliable notification per actionable event.

## Suggested commit
feat: implement notifications

## Execution notes
Keep domain logic independent from transport/provider implementations. Add migration/version notes when persistent contracts change and keep security-sensitive operations behind explicit authorization boundaries.
