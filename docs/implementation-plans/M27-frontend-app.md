# M27 — Frontend Application

## Objective
Build the core React audit workflow.

## Implementation tasks
1. Add routes/layout.
2. New Audit with three upload cards.
3. API integration.
4. processing state.
5. audit list.
6. error/empty/loading states.
7. responsive layout.
8. use Tailwind/shadcn consistently.

## Primary files / modules
apps/web/src/app, components, features/audits.

## Test plan
Component tests plus browser smoke test for create/upload/navigation.

## Dependencies
M26

## Completion gate
A user can create an audit in the browser and track it.

## Suggested commit
feat: implement frontend application

## Execution notes
Keep business logic deterministic and provider/UI agnostic. Add covering tests with each behavior change and retain version metadata for audit reproducibility.
