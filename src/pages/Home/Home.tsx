import { usePDF } from "@react-pdf/renderer";
import Logo from "assets/icon-1.png";
import { Input } from "components/Input";
import { InstallmentsTable } from "components/InstallmentsTable/InstallmentsTable";
import PDFRenderer from "components/PDFRenderer/PDFRenderer";
import { ChangeEvent, useEffect, useState } from "react";
import { formatMoney } from "utils";

import * as S from "./Home.styles";

export function Home() {
  const [upfront, setUpfront] = useState<number>();
  const [total, setTotal] = useState<number>();
  const [amountLeft, setAmountLeft] = useState<number>();
  const [downloadDisabled, setDownloadDisabled] = useState(false);
  const [error, setError] = useState<string>();

  const [instance, updateInstance] = usePDF({
    document: (
      <PDFRenderer
        amountLeft={amountLeft || 0}
        upfront={upfront}
        total={total}
      />
    ),
  });

  function download() {
    if (!amountLeft) {
      setError("Valor à pagar não pode ser R$ 0,00");
      return;
    }
    setError(undefined);

    const fileURL = URL.createObjectURL(instance.blob as Blob);
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = `AppleOutlet-${new Date().getTime()}`;
    link.click();
  }

  function handleChangeUpfrontValue(event: ChangeEvent<HTMLInputElement>) {
    setUpfront(parseFloat(event.target.value));
  }

  function handleChangeTotalValue(event: ChangeEvent<HTMLInputElement>) {
    setTotal(parseFloat(event.target.value));
  }

  useEffect(() => {
    setAmountLeft((total || 0) - (upfront || 0));
  }, [total, upfront]);

  useEffect(() => {
    updateInstance();
  }, [amountLeft, updateInstance]);

  useEffect(() => {
    if (instance.error || instance.loading) {
      if (instance.error) setError(instance.error);

      setDownloadDisabled(true);
    } else {
      setError(undefined);
      setDownloadDisabled(false);
    }
  }, [instance.error, instance.loading]);

  return (
    <S.Container>
      <header>
        <img src={Logo} alt="apple-outlet-logo" height={50} />
        <h1>Apple Outlet</h1>
      </header>

      <main>
        <S.InputsContainer>
          <div>
            <p>ENTRADA: </p>
            <div>
              <span>R$</span>
              <Input
                alt="upfront"
                placeholder="Entrada"
                value={upfront}
                onChange={handleChangeUpfrontValue}
              />
            </div>
          </div>
          <div>
            <p>TOTAL DA COMPRA: </p>
            <div>
              <span>R$</span>
              <Input
                alt="total-value"
                placeholder="Total"
                value={total}
                onChange={handleChangeTotalValue}
              />
            </div>
          </div>
          <h3>Valor à pagar: {formatMoney(amountLeft)}</h3>
        </S.InputsContainer>

        <InstallmentsTable amountLeft={amountLeft || 0} />
      </main>

      <div>
        <button type="button" onClick={download} disabled={downloadDisabled}>
          Download PDF
        </button>
        {error && <span className="error">{error}</span>}
        {instance.loading && <span className="loading">{"Carregando..."}</span>}
      </div>
    </S.Container>
  );
}
