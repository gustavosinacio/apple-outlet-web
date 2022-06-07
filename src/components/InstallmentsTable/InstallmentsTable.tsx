import { defaultConfig } from "../../config/initialConfig";
import { formatMoney } from "../../utils";
import { InstallmentRow } from "./InstallmentRow/InstallmentRow";

export function InstallmentsTable({ amountLeft }: InstallmentsTableProps) {
  return (
    <>
      <h3>Valor à pagar: {formatMoney(amountLeft)}</h3>

      <table>
        <thead>
          <tr>
            <th>Taxa</th>
            <th>Total</th>
            <th>Nº Parcelas</th>
            <th>Parcela</th>
          </tr>
        </thead>
        <tbody>
          {defaultConfig.installments.map(({ fee, numberOfInstallments }) => (
            <InstallmentRow
              key={`${numberOfInstallments}-${fee}`}
              fee={fee}
              amountLeft={amountLeft}
              numberOfInstallments={numberOfInstallments}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
