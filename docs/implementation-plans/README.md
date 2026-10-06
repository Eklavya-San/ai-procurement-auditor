# AI Procurement Auditor — Implementation Plans

This directory contains the implementation plan for every roadmap milestone. Each plan is intentionally executable: objective, scoped tasks, affected modules, tests, dependencies and a concrete completion gate.

## Execution discipline

When these plans are executed, break each milestone into independently reviewable tasks. Use a fresh implementer for each independent task, then a task-level spec/quality review, and a final whole-branch review. This follows the attached subagent-driven-development workflow, which explicitly calls for a fresh implementer plus review after each task. fileciteturn16file0L8-L12

| ID | Milestone | Plan | Depends on |
|---|---|---|---|
| M00 | Foundation | [M00-foundation.md](./M00-foundation.md) | None beyond the current repository bootstrap. |
| M01 | Domain Schemas | [M01-domain-schemas.md](./M01-domain-schemas.md) | M0 Foundation. |
| M02 | Audit Creation | [M02-audit-creation.md](./M02-audit-creation.md) | M0, M1. |
| M03 | Document Upload | [M03-document-upload.md](./M03-document-upload.md) | M2 plus M4 storage interface can be introduced before implementation. |
| M04 | File Storage | [M04-file-storage.md](./M04-file-storage.md) | M0, M1. |
| M05 | Document Parser | [M05-document-parser.md](./M05-document-parser.md) | M4 and M1. |
| M06 | AI Provider Abstraction | [M06-ai-provider.md](./M06-ai-provider.md) | M1 and M5. |
| M07 | PO Extraction | [M07-po-extraction.md](./M07-po-extraction.md) | M1, M5, M6. |
| M08 | Invoice Extraction | [M08-invoice-extraction.md](./M08-invoice-extraction.md) | M6 and M1. |
| M09 | GRN Extraction | [M09-grn-extraction.md](./M09-grn-extraction.md) | M6 and M1. |
| M10 | Extraction Validation | [M10-extraction-validation.md](./M10-extraction-validation.md) | M7-M9 and M6. |
| M11 | Evidence System | [M11-evidence-system.md](./M11-evidence-system.md) | M10 plus M5. |
| M12 | Normalization | [M12-normalization.md](./M12-normalization.md) | M1 and M11. |
| M13 | Vendor Matching | [M13-vendor-matching.md](./M13-vendor-matching.md) | M12, M1. |
| M14 | Line Item Matching | [M14-line-item-matching.md](./M14-line-item-matching.md) | M12, M13, M1. |
| M15 | Reconciliation Engine | [M15-reconciliation-engine.md](./M15-reconciliation-engine.md) | M13, M14, M1. |
| M16 | Core Business Rules | [M16-core-business-rules.md](./M16-core-business-rules.md) | M15. |
| M17 | Quantity Rules | [M17-quantity-rules.md](./M17-quantity-rules.md) | M14, M16, M21 will later supply tolerance. |
| M18 | Price Rules | [M18-price-rules.md](./M18-price-rules.md) | M14, M16. |
| M19 | Tax Rules | [M19-tax-rules.md](./M19-tax-rules.md) | M14, M16, M21. |
| M20 | Total Rules | [M20-total-rules.md](./M20-total-rules.md) | M16, M19, M21. |
| M21 | Tolerance Engine | [M21-tolerance-engine.md](./M21-tolerance-engine.md) | M16 and M1. |
| M22 | Decision Engine | [M22-decision-engine.md](./M22-decision-engine.md) | M16 and M21. |
| M23 | Financial Impact | [M23-financial-impact.md](./M23-financial-impact.md) | M17-M20, M21. |
| M24 | Audit Persistence | [M24-audit-persistence.md](./M24-audit-persistence.md) | M2, M10, M22, M23. |
| M25 | Background Worker | [M25-background-worker.md](./M25-background-worker.md) | M5-M24. |
| M26 | API Layer | [M26-api-layer.md](./M26-api-layer.md) | M2-M4, M24-M25. |
| M27 | Frontend Application | [M27-frontend-app.md](./M27-frontend-app.md) | M26 and M0. |
| M28 | Reconciliation UI | [M28-reconciliation-ui.md](./M28-reconciliation-ui.md) | M27, M22, M23, M11. |
| M29 | Reporting and Export | [M29-exports.md](./M29-exports.md) | M24, M28. |
| M30 | Duplicate Invoice Detection | [M30-duplicate-detection.md](./M30-duplicate-detection.md) | M24, M22. |
| M31 | Golden Test Fixtures | [M31-test-fixtures.md](./M31-test-fixtures.md) | M1-M23. |
| M32 | Real AI Validation | [M32-real-ai-validation.md](./M32-real-ai-validation.md) | M31 and M6-M10. |
| M33 | Human Review | [M33-human-review.md](./M33-human-review.md) | M11, M22, M24, M28. |
| M34 | Security Hardening | [M34-security.md](./M34-security.md) | M24-M29. |
| M35 | Observability | [M35-observability.md](./M35-observability.md) | M25-M26. |
| M36 | Production Docker | [M36-production-docker.md](./M36-production-docker.md) | M0, M25, M34, M35. |
| M37 | CI/CD | [M37-ci-cd.md](./M37-ci-cd.md) | M31, M36. |
| M38 | Authentication and Multi-Tenancy | [M38-multi-tenancy.md](./M38-multi-tenancy.md) | M34-M37. |
| M39 | Customer Rule Configuration | [M39-customer-rules.md](./M39-customer-rules.md) | M21, M38. |
| M40 | Vendor Master | [M40-vendor-master.md](./M40-vendor-master.md) | M13, M38, M39. |
| M41 | Procurement Dashboard | [M41-procurement-dashboard.md](./M41-procurement-dashboard.md) | M24, M38-M40. |
| M42 | Price History | [M42-price-history.md](./M42-price-history.md) | M40-M41 and M21. |
| M43 | Vendor Quotation Comparison | [M43-quotation-comparison.md](./M43-quotation-comparison.md) | M5-M14, M31, M38-M40. |
| M44 | Purchase Requisition Validation | [M44-purchase-requisition-validation.md](./M44-purchase-requisition-validation.md) | M14-M22, M38-M40. |
| M45 | ERP Integrations | [M45-erp-integrations.md](./M45-erp-integrations.md) | M24-M26, M38-M40. |
| M46 | Notifications | [M46-notifications.md](./M46-notifications.md) | M25, M38-M39. |
| M47 | Billing | [M47-billing.md](./M47-billing.md) | M38, M41 and real customer usage validation. |

## Recommended execution order

M00 → M01 → M02 → M03 → M04 → M05 → M06 → M07/M08/M09 → M10 → M11 → M12 → M13 → M14 → M15 → M16 → M17/M18/M19/M20 → M21 → M22 → M23 → M24 → M25 → M26 → M27 → M28 → M29 → M30 → M31 → M32 → M33 → M34 → M35 → M36 → M37 → M38 → M39 → M40 → M41 → M42 → M43 → M44 → M45 → M46 → M47

M07-M09 can be developed as three independent extraction tasks after the common extraction abstraction exists. M17-M20 are independent rule implementations after line matching and rule contracts are stable.

## MVP execution boundary

The first shippable product should complete M00-M33, with M34-M37 hardening the deployment before exposing real customer documents at scale. M38-M47 are SaaS and expansion work after the core PO/Invoice/GRN audit workflow is proven.

## Engineering rule

Do not let the LLM produce the final payment decision. Extraction must end at validated structured data; reconciliation, calculations, tolerances and final status remain deterministic.
