import { StyleSheet } from "@react-pdf/renderer";
import { theme } from "styles/theme";

const imgWidth = 70;
const imgMargin = 5;

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    color: theme.colors.foreground,
  },
  coloredBackground: {
    backgroundColor: theme.colors.primary,
    color: "#fff",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  headerInfoArea: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 3,
    textTransform: "uppercase",
  },
  logo: {
    width: imgWidth,
    marginLeft: imgMargin,
  },
  paymentTitlesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    fontSize: 12,
    paddingVertical: 3,
  },
  paymentValuesContainer: {
    width: "100%",
    fontSize: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: theme.colors.backgroundDark,
    paddingVertical: 5,
  },
  paymentInfo: {
    color: "#000",
  },
  paymentValue: {
    color: "#fff",
  },
  amountLeft: {
    marginTop: 20,
    fontSize: 16,
  },

  table: {
    width: "100%",
  },
  thead: {},
  tr: {
    display: "flex",
    flexDirection: "row",
  },
  th: {
    color: "#000",
    borderTop: 0,
    fontSize: 10,
  },
  td: {
    width: "100%",
    borderTop: `1px solid ${theme.colors.border}`,
    alignItems: "center",
    justifyContent: "center",
    // color: theme.colors.foreground,
    textAlign: "center",
    fontSize: 14,
    paddingVertical: 4,
    paddingHorizontal: 1,
  },
  lastColumn: {
    width: 300,
    border: `1px solid ${theme.colors.border}`,
    backgroundColor: "#fff",
    color: "#000",
  },
  textsContainer: {
    marginTop: 20,
    flex: 1,
    alignSelf: "flex-start",
  },
  embededTexts: {
    marginTop: 8,
    fontSize: 8,
    color: theme.colors.foreground,
    alignSelf: "flex-start",
    paddingLeft: 8,
  },
  dateText: {
    fontSize: 8,
    color: theme.colors.foreground,
    alignSelf: "flex-start",
    paddingLeft: 8,
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 200,
    width: 350,
  },
});
