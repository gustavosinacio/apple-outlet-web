import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle(
  ({ theme: { colors, breakpoints, scrollbar, typography } }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Quicksand", sans-serif;
    }

    body {
      -webkit-font-smoothing: antialiased;
      background: ${colors.background};
      color: ${colors.foreground};
      height: 100vh;
    }

    html {
      font-size: 81.25%;

      @media (${breakpoints.medium}) {
        font-size: 93.75%;
      }

      @media (${breakpoints.large}) {
        font-size: 100%;
      }
    }

    p,
    span {
      font-weight: ${typography.fontWeight.normal};
    }

    ::-webkit-scrollbar {
      width: ${scrollbar.width};
    }
    ::-webkit-scrollbar-track {
      background: ${colors.backgroundLight};
    }
    ::-webkit-scrollbar-thumb {
      background: ${scrollbar.handlerColor};
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${scrollbar.handlerColorHover};
    }
  `
);
