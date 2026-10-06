# M05 — Document Parser

## Objective
Convert PDFs and images into normalized machine-readable content, using native PDF extraction before OCR.

## Implementation tasks
1. Define DocumentParser interface and parser result schema.
2. Implement native PDF text extraction with page boundaries.
3. Add a text sufficiency heuristic to identify likely scanned/image-only PDFs.
4. Implement image input normalization.
5. Add OCR adapter for scanned documents.
6. Preserve page numbers, extracted text and parser confidence/evidence metadata.
7. Return structured parser failures instead of silently returning empty content.

## Primary files / modules
services/document-parser/src/* and parser-related shared schemas.

## Test plan
Text PDF, scanned PDF, PNG/JPG, malformed PDF and low-text fallback fixtures.

## Dependencies
M4 and M1.

## Completion gate
Representative text and scanned documents produce consistent page-aware parser output.

## Suggested commit
`feat: implement document parser`

## Execution notes
Keep domain/business logic independent from HTTP, UI and provider-specific code. Add tests with the implementation rather than deferring the test surface to a later milestone. Preserve version metadata whenever the milestone changes an output that affects audit reproducibility.
