import { defaultConfig } from "config/initialConfig";

import { InstallmentRow } from "./InstallmentRow/InstallmentRow";

export function InstallmentsTable({ amountLeft }: InstallmentsTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nº Parcelas</th>
          <th>Taxa</th>
          <th>Total</th>
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
  );
}
