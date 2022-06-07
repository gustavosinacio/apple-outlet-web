import { formatMoney } from "utils";
import { calculateInstallment } from "utils/calculateInstallment";

export function InstallmentRow({
  amountLeft,
  numberOfInstallments,
  fee,
}: InstallmentRowProps) {
  const { total, installment } = calculateInstallment(
    amountLeft,
    numberOfInstallments,
    fee
  );

  return (
    <tr>
      <td>{numberOfInstallments}</td>
      <td>{fee.toFixed(2).replace(".", ",")}</td>
      <td>{formatMoney(total)}</td>
      <td>{formatMoney(installment)}</td>
    </tr>
  );
}
