import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import Logo from "assets/logo.png";
import { useEffect, useState } from "react";
import { IInstallment } from "types/installments";
import { formatMoney } from "utils";
import { calculateInstallment } from "utils/calculateInstallment";
import { firestore } from "utils/firebase";
import { getVersionSnapshot } from "utils/firebase/getFeeData";

import { styles as S } from "./PDFRenderer.styles";

export default function PDFRenderer({
  amountLeft,
  upfront,
  total,
}: PDFRendererProps) {
  const date = Intl.DateTimeFormat("pt-BR", { dateStyle: "full" }).format(
    new Date()
  );

  const [installments, setInstallments] = useState<IInstallment[]>([]);
  const [embededTexts, setEmbededTexts] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedData = await getVersionSnapshot(firestore);

      setInstallments(fetchedData.fees);
      setEmbededTexts(fetchedData.embededTexts);
    })();
  }, []);

  return (
    <Document>
      <Page size="A4" style={S.container}>
        <View style={S.header}>
          <View style={S.headerInfoArea}>
            <View style={S.coloredBackground}>
              <Text style={S.title}>Calculadora Apple Outlet</Text>
            </View>
            <View style={S.paymentTitlesContainer}>
              <Text style={S.paymentInfo}>VALOR DE ENTRADA</Text>
              <Text style={S.paymentInfo}>VALOR À VISTA NO PIX</Text>
              <Text style={S.paymentInfo}>VALOR DO APARELHO</Text>
            </View>

            <View style={S.paymentValuesContainer}>
              <Text style={S.paymentValue}>{formatMoney(upfront)}</Text>
              <Text style={S.paymentValue}>{formatMoney(amountLeft)}</Text>
              <Text style={S.paymentValue}>{formatMoney(total)}</Text>
            </View>
          </View>
          <Image source={Logo} style={S.logo} />
        </View>

        <View style={S.table}>
          <View style={S.thead}>
            <View style={S.tr}>
              <View style={[S.td, S.th]}>
                <Text>QUANTIDADE DE PARCELAS</Text>
              </View>
              <View style={[S.td, S.th]}>
                <Text>TAXA</Text>
              </View>
              <View style={[S.td, S.th]}>
                <Text>VALOR PARCELADO</Text>
              </View>

              <View style={[S.td, S.th]}>
                <Text>PARCELAS</Text>
              </View>
              <View
                style={[S.td, S.th, S.lastColumn, { fontSize: 8, border: 0 }]}
              >
                <Text>QUANTIDADE DE PARCELAS</Text>
              </View>
            </View>
          </View>
          {installments.map(({ fee, numberOfInstallments }) => {
            const { total, installment } = calculateInstallment(
              amountLeft,
              numberOfInstallments,
              fee
            );

            return (
              <View
                style={[S.tr, S.coloredBackground]}
                key={`${numberOfInstallments}-${fee}`}
              >
                <div style={S.td}>
                  <Text>{numberOfInstallments}</Text>
                </div>
                <div style={S.td}>
                  <Text>{fee.toFixed(2).replace(".", ",")}</Text>
                </div>
                <div style={S.td}>
                  <Text>{formatMoney(total)}</Text>
                </div>
                <div style={S.td}>
                  <Text>{formatMoney(installment)}</Text>
                </div>
                <div
                  style={{
                    ...S.td,
                    ...S.lastColumn,
                  }}
                >
                  <Text>{numberOfInstallments}</Text>
                </div>
              </View>
            );
          })}
        </View>
        <View style={S.textsContainer}>
          {embededTexts.map((embededText, index) => (
            <Text key={index} style={S.embededTexts}>
              {embededText}
            </Text>
          ))}
        </View>
        <Text style={S.dateText}>{date[0].toUpperCase() + date.slice(1)}</Text>
      </Page>
    </Document>
  );
}
