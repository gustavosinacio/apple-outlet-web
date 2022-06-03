import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle(
  ({ theme: { colors } }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Courier New", Courier, monospace;
    }

    body {
      -webkit-font-smoothing: antialiased;
      background: ${colors.background};
      color: ${colors.foreground};
    }
  `
);
