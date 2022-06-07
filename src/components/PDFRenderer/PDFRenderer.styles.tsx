import { StyleSheet } from "@react-pdf/renderer";
import { theme } from "styles/theme";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 100,
    paddingVertical: 20,
    color: theme.colors.foreground,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    fontSize: 24,
  },
  paymentInfoContainer: {
    marginTop: 20,
    width: "100%",
    fontSize: 14,
  },
  paymentInfo: {
    marginTop: 5,
  },
  amountLeft: {
    marginTop: 20,
    fontSize: 16,
  },
  logo: {
    width: 50,
  },
  title: {
    marginLeft: 5,
  },
  table: {
    width: "100%",
    marginTop: 20,
    border: `1px solid ${theme.colors.border}`,
  },
  thead: { fontWeight: "semibold" },
  tr: {
    display: "flex",
    flexDirection: "row",
  },
  th: {
    color: theme.colors.foreground,
    borderTop: 0,
  },
  td: {
    width: "100%",
    borderTop: `1px solid ${theme.colors.border}`,
    alignItems: "center",
    justifyContent: "center",
    color: theme.colors.foreground,
    fontSize: 14,
    paddingVertical: 4,
  },
  tdDarkBackground: {
    backgroundColor: theme.colors.backgroundLight,
    width: "80%",
  },
  embededText: {
    marginTop: 8,
    fontSize: 10,
    color: theme.colors.foreground,
  },
});
