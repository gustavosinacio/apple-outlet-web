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
      display: flex;
      justify-content: center;
    }

    html {
      font-size: 81.25%;

      @media (${breakpoints.small}) {
        font-size: 93.75%;
      }

      @media (${breakpoints.medium}) {
        font-size: 100%;
      }

      @media (${breakpoints.large}) {
        font-size: 106.25%;
      }
    }

    p,
    span {
      font-weight: ${typography.fontWeight.normal};
    }

    input {
      caret-color: ${colors.primary};

      ::selection {
        background: ${colors.primary};
        color: white;
      }
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
