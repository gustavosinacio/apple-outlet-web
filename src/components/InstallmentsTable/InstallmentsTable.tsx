import { useEffect, useState } from "react";
import { IInstallment } from "types/installments";
// import { createTable } from "utils/firebase/createFeeTable";
import { firestore } from "utils/firebase/firestore";
import { getVersionSnapshot } from "utils/firebase/getFeeData";

import { InstallmentRow } from "./InstallmentRow/InstallmentRow";

export function InstallmentsTable({ amountLeft }: InstallmentsTableProps) {
  const [installments, setInstallments] = useState<IInstallment[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedData = await getVersionSnapshot(firestore);

      console.log(9821, fetchedData);
      setInstallments(fetchedData.fees);
    })();
  }, []);

  return (
    <>
      {/* <button onClick={() => createTable(firestore)}>create</button> */}

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
          {installments.map(({ fee, numberOfInstallments }) => (
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
