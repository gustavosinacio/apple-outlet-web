import { useEffect, useState } from "react";

import Logo from "../../assets/icon.png";
import { Input } from "../../components/Input/Input";
import { InstallmentsTable } from "../../components/InstallmentsTable/InstallmentsTable";
import * as S from "./Home.styles";

export function Home() {
  const [upfront, setUpfront] = useState<number>(6000);
  const [total, setTotal] = useState<number>(12000);
  const [amountLeft, setAmountLeft] = useState<number>(0);

  useEffect(() => {
    setAmountLeft(total - upfront);
  }, [total, upfront]);

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
    </S.Container>
  );
}
