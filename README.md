# AI Procurement Auditor

Automatically reconcile **Purchase Order (PO) + Invoice + GRN** and explain whether a payment should be **APPROVED**, **WARNING**, or **HOLD**.

## Product principle

AI extracts and normalizes document data. Deterministic business rules perform reconciliation and make the payment recommendation.

## MVP

Upload:
- Purchase Order
- Invoice
- GRN

Then:
1. Extract structured fields
2. Normalize values
3. Reconcile PO ↔ Invoice ↔ GRN
4. Calculate financial differences
5. Return APPROVED / WARNING / HOLD with reasons
6. Export JSON / Excel

## Stack

- Web: React + TypeScript + Tailwind + shadcn/ui
- API: Node.js + Express + TypeScript
- Data: MongoDB
- Runtime: Docker / Docker Compose
- AI: provider-agnostic, OpenAI-compatible interface

## Architecture

```
Documents
   ↓
Parser / OCR
   ↓
LLM extraction
   ↓
Structured schemas
   ↓
Normalization
   ↓
Deterministic reconciliation
   ↓
Decision + explanation
```

## Project status

Initial repository bootstrap. Next milestone: end-to-end reconciliation using three sample documents.
