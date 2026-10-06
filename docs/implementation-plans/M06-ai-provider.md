# M06 — AI Provider Abstraction

## Objective
Make extraction provider-independent so local Ollama/FreeToken and cloud OpenAI-compatible endpoints can be swapped.

## Implementation tasks
1. Define ExtractionProvider, ExtractionRequest and ExtractionResponse interfaces.
2. Define provider error taxonomy for validation, timeout, rate limit and upstream failures.
3. Implement MockExtractionProvider for deterministic CI tests.
4. Implement OpenAI-compatible HTTP provider with configurable base URL, key and model.
5. Add Ollama-compatible configuration path where endpoint semantics match the abstraction.
6. Add FreeToken/OpenAI-compatible configuration path without coupling the domain layer to FreeToken.
7. Record provider/model metadata with every extraction attempt.

## Primary files / modules
services/extraction/src/providers/*, packages/config, shared extraction types.

## Test plan
Mock provider contract tests; timeout/error mapping; provider selection configuration tests.

## Dependencies
M1 and M5.

## Completion gate
The extraction pipeline can switch providers entirely through configuration.

## Suggested commit
`feat: implement ai provider abstraction`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
