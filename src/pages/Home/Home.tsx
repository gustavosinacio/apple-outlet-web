import { Input } from "../../components/Input/Input";
import * as S from "./Home.styles";

export function Home() {
  return (
    <S.Container>
      <h1>Apple Outlet</h1>

      <div>
        <h3>Entrada</h3>
        <Input alt="upfront" placeholder="Entrada" />
      </div>
      <div>
        <h3>Total da compra</h3>
        <Input alt="total-value" placeholder="Total da compra" />
      </div>

      <table>
        <thead>
          <tr>
            <th>Taxa</th>
            <th>Nº Parcelas</th>
            <th>Total</th>
            <th>Parcelas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11,0</td>
            <td>10</td>
            <td>6.741,57</td>
            <td>674,16</td>
          </tr>
          <tr>
            <td>11,0</td>
            <td>10</td>
            <td>6.741,57</td>
            <td>674,16</td>
          </tr>
          <tr>
            <td>11,0</td>
            <td>10</td>
            <td>6.741,57</td>
            <td>674,16</td>
          </tr>
          <tr>
            <td>11,0</td>
            <td>10</td>
            <td>6.741,57</td>
            <td>674,16</td>
          </tr>
          <tr>
            <td>11,0</td>
            <td>10</td>
            <td>6.741,57</td>
            <td>674,16</td>
          </tr>
          <tr>
            <td>11,0</td>
            <td>10</td>
            <td>6.741,57</td>
            <td>674,16</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
}
