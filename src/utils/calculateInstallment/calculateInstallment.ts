import { roundToTwo } from "utils/roundToTwo";

export function calculateInstallment(
  amountLeft: number,
  numberOfInstallments: number,
  fee: number
) {
  const total = roundToTwo((100 * amountLeft) / (100 - fee));
  const installment = roundToTwo(total / numberOfInstallments);

  return { total, installment };
}
