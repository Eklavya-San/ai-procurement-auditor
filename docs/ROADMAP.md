# AI Procurement Auditor — Implementation Roadmap

## Product goal
Build a procurement audit application that accepts a PO, Invoice and GRN, extracts structured data, deterministically reconciles them, and returns APPROVED, WARNING or HOLD with evidence.

## Architecture rule
AI is responsible for document understanding and structured extraction. Deterministic software is responsible for normalization, calculations, rules and payment recommendations. The LLM never directly decides payment status.

## Phase 1 — Foundation
- Convert repository into a Yarn workspaces + TypeScript monorepo.
- Bootstrap React web app and Express API.
- Add shared TypeScript configuration, linting, formatting and tests.
- Add MongoDB connection and environment configuration.
- Add /health endpoint.
Done when web, API and MongoDB run locally and CI can type-check/build/test.

## Phase 2 — Domain model
Create validated schemas for PurchaseOrder, Invoice, GRN, Vendor, line items, money, tax, Audit, RuleResult and ReconciliationResult.
Normalize dates, units, currencies and money representation.
Done when invalid extraction payloads are rejected by runtime validation.

## Phase 3 — Deterministic reconciliation engine
Implement small independent rules for vendor, PO number, quantity, unit price, tax, totals and duplicate invoices.
Implement line-item matching with deterministic priority: item code, SKU, normalized description, then fuzzy matching/manual review.
Implement configurable tolerances.
Decision precedence: critical failure -> HOLD; warning without critical failure -> WARNING; otherwise APPROVED.
Done when golden tests cover matching, quantity, price, tax, totals, partial receipts, duplicate invoices and rounding.

## Phase 4 — Document ingestion
Add audit creation and PO/Invoice/GRN upload APIs.
Support PDF, PNG and JPG/JPEG initially.
Create FileStorage abstraction with local filesystem implementation.
Track document states: UPLOADED, QUEUED, PROCESSING, EXTRACTED, NORMALIZED, FAILED.
Done when a user can create an audit and upload three documents.

## Phase 5 — Parsing and extraction
Build parser abstraction for native PDF text extraction first, with OCR fallback for scanned documents.
Build provider-agnostic ExtractionProvider interface.
Support mock provider for tests and OpenAI-compatible/Ollama/FreeToken-compatible providers for development.
Extract strict PO, Invoice and GRN JSON. Missing values must remain null; the model must not invent values.
Store page/source evidence and extraction confidence for important fields.
Done when real documents produce schema-valid structured data with source traceability.

## Phase 6 — Processing worker
Move parsing, extraction, normalization and reconciliation into background jobs.
Pipeline: parse -> extract PO/Invoice/GRN -> validate -> normalize -> match -> reconcile -> finalize.
Retry transient AI/provider errors; preserve permanent failures.
Persist stage progress so the UI never depends on a long-running HTTP request.
Done when an audit can process asynchronously and recover from transient failures.

## Phase 7 — Web application
Build Dashboard, New Audit, Processing and Audit Detail screens.
New Audit: three upload cards with progress and validation.
Processing: visible stage progress.
Result: decision banner, financial impact, document summary, line comparison, mismatch reasons, rules and evidence.
Done when a non-technical user can upload three documents and understand the result in under a minute.

## Phase 8 — Reporting
Implement JSON export.
Implement Excel workbook with Summary, Line Comparison, Rule Results and Evidence sheets.
Implement PDF audit report.
Done when finance/procurement can download a complete audit package.

## Phase 9 — Reliability and quality
Create golden document fixtures and mock AI extraction fixtures.
Add unit, integration and end-to-end tests.
Track extraction accuracy, false approvals, false holds, review rate and processing time.
Add REVIEW state for low-confidence extraction, ambiguous matching or unreadable documents.
Done when deterministic regression tests pass and real-document validation shows acceptable business accuracy.

## Phase 10 — Security and production
Add file type/size validation, secure temporary storage, secret management, structured logs, correlation IDs, health checks and graceful shutdown.
Add persistent backups and a tested restore procedure.
Containerize web, API, worker and MongoDB with Docker Compose.
Add CI/CD for lint, type-check, tests and builds.
Done when the system can run reliably in staging with operational visibility.

## Phase 11 — SaaS
Add authentication, organization/tenant isolation and roles: OWNER, ADMIN, PROCUREMENT, FINANCE, REVIEWER, VIEWER.
Add customer-specific tolerances, vendor master data and audit history.
Add dashboard metrics for holds, warnings, leakage and mismatch reasons.
Done when multiple customer organizations can safely use the same deployment.

## Phase 12 — Expansion
Add vendor quotation comparison, purchase requisition validation, price history, advanced duplicate detection, notifications and ERP integrations.
Start integrations with generic CSV/Excel and REST interfaces before expensive ERP-specific connectors.
Add billing only after usage validates the business model.

## Required release gates
- Three real documents can be processed end-to-end.
- APPROVED/WARNING/HOLD is produced deterministically.
- Every HOLD has specific rule-level reasons.
- Financial differences are reproducible and tested.
- Important extracted values have page/source evidence.
- JSON and Excel export work.
- Failed jobs can be retried.
- No LLM directly decides whether payment is approved.

## First coding sequence
1. Foundation and workspace configuration.
2. Domain schemas.
3. Reconciliation engine and tests.
4. Upload API and storage.
5. Parser abstraction and implementation.
6. Extraction provider and mock provider.
7. Real PO/Invoice/GRN extraction.
8. Normalization and line matching.
9. Worker orchestration.
10. React upload/processing/result UI.
11. Evidence and exports.
12. Real-document accuracy validation.
13. Security, observability and production deployment.

## Immediate next commit
feat: initialize typescript monorepo and domain schemas
