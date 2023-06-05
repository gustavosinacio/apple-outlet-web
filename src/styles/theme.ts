export const theme = {
  colors: {
    background: "#ffffff",
    backgroundLight: "#c0c0c0",
    backgroundDark: "#666",
    foreground: "#333",
    border: "#a0a0a0",
    primary: "#a81816",
  },
  sizing: {
    padding: {
      smallx: "0.2rem",
      small: "0.3rem",
      medium: "0.5rem",
      large: "1rem",
      largex: "1.5rem",
    },
    margin: {
      small: "0.5rem",
      medium: "1rem",
    },
  },
  typography: {
    fontWeight: {
      regular: "500",
      normal: "600",
      bold: "700",
    },
  },
  breakpoints: {
    small: "min-width: 370px",
    medium: "min-width: 678px",
    large: "min-width: 1300px",
  },
  scrollbar: {
    width: "1rem",
    handlerColor: "#555",
    handlerColorHover: "#888",
  },
};

export type ThemeType = typeof theme;
