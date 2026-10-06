export type Decision = "APPROVED" | "WARNING" | "HOLD";

export interface ReconciliationInput {
  invoiceQuantity: number;
  acceptedGrnQuantity: number;
  poUnitPrice: number;
  invoiceUnitPrice: number;
}

export function reconcile(input: ReconciliationInput): Decision {
  if (input.invoiceQuantity > input.acceptedGrnQuantity) return "HOLD";
  if (input.invoiceUnitPrice > input.poUnitPrice) return "HOLD";
  return "APPROVED";
}
