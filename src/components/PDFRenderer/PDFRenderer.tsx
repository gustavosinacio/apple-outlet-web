import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import Logo from "assets/icon-1.png";
import { defaultConfig } from "config/initialConfig";
import { formatMoney } from "utils";
import { calculateInstallment } from "utils/calculateInstallment";

import { styles as S } from "./PDFRenderer.styles";

export default function PDFRenderer({
  amountLeft,
  upfront,
  total,
}: PDFRendererProps) {
  return (
    <Document>
      <Page size="A4" style={S.container}>
        <View style={S.header}>
          <Image source={Logo} style={S.logo} />
          <Text style={S.title}>Apple Outlet</Text>
        </View>
        <View style={S.paymentInfoContainer}>
          <Text style={S.paymentInfo}>Entrada: {upfront}</Text>
          <Text style={S.paymentInfo}>Total da compra: {total}</Text>
          <Text style={[S.paymentInfo, S.amountLeft]}>
            Valor à pagar: {amountLeft}
          </Text>
        </View>
        <View style={S.table}>
          <View style={S.thead}>
            <View style={S.tr}>
              <View style={[S.td, S.th, S.tdDarkBackground]}>
                <Text>Taxa</Text>
              </View>
              <View style={[S.td, S.th]}>
                <Text>Total</Text>
              </View>
              <View style={[S.td, S.th, S.tdDarkBackground]}>
                <Text>Nº Parcelas</Text>
              </View>
              <View style={[S.td, S.th]}>
                <Text>Parcela</Text>
              </View>
            </View>
          </View>
          {defaultConfig.installments.map(({ fee, numberOfInstallments }) => {
            const { total, installment } = calculateInstallment(
              amountLeft,
              numberOfInstallments,
              fee
            );

            return (
              <View style={S.tr} key={`${numberOfInstallments}-${fee}`}>
                <View style={[S.td, S.tdDarkBackground]}>
                  <Text>{fee.toFixed(2).replace(".", ",")}</Text>
                </View>
                <View style={S.td}>
                  <Text>{formatMoney(total)}</Text>
                </View>
                <View style={[S.td, S.tdDarkBackground]}>
                  <Text>{numberOfInstallments}</Text>
                </View>
                <View style={S.td}>
                  <Text>{formatMoney(installment)}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <Text style={S.embededText}>{defaultConfig.embededText}</Text>
      </Page>
    </Document>
  );
}
