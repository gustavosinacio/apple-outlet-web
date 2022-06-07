import { usePDF } from "@react-pdf/renderer";
import { useEffect, useState } from "react";

import Logo from "../../assets/icon-1.png";
import { Input } from "../../components/Input/Input";
import { InstallmentsTable } from "../../components/InstallmentsTable/InstallmentsTable";
import PDFRenderer from "../../components/PDFRenderer/PDFRenderer";
import * as S from "./Home.styles";

export function Home() {
  const [upfront, setUpfront] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [amountLeft, setAmountLeft] = useState<number>(0);
  const [downloadDisabled, setDownloadDisabled] = useState(false);
  const [error, setError] = useState<string>();

  const [instance, updateInstance] = usePDF({
    document: (
      <PDFRenderer amountLeft={amountLeft} upfront={upfront} total={total} />
    ),
  });

  function download() {
    if (amountLeft === 0) {
      setError("Valor à pagar não pode ser R$ 0,00");
      return;
    }
    setError(undefined);

    fetch(instance.url as RequestInfo)
      .then((resp) => resp.arrayBuffer())
      .then((resp) => {
        // set the blog type to final pdf
        const file = new Blob([resp], { type: "application/pdf" });

        // process to auto download it
        const fileURL = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = fileURL;
        link.download = `AppleOutlet-${new Date().getTime()}`;
        link.click();
      });
  }

  useEffect(() => {
    setAmountLeft(total - upfront);
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
        <div>
          <S.InputWrapper>
            <p>Entrada: </p>
            <span>R$</span>
            <Input
              alt="upfront"
              placeholder="Entrada"
              value={upfront}
              onChange={(event) => setUpfront(event.target.value)}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <p>Total da compra: </p>
            <span>R$</span>
            <Input
              alt="total-value"
              placeholder="Total da compra"
              value={total}
              onChange={(event) => setTotal(event.target.value)}
            />
          </S.InputWrapper>
        </div>

        <InstallmentsTable amountLeft={amountLeft} />
      </main>

      <div>
        <button type="button" onClick={download} disabled={downloadDisabled}>
          Download PDF
        </button>
        {error && <span className="error">{error}</span>}
        {instance.loading && <span className="loading">{"Carregando..."}</span>}
      </div>

      {/* <PDFViewer amountLeft={amountLeft} upfront={upfront} total={total} /> */}
    </S.Container>
  );
}
