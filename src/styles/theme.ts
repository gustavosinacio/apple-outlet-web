export const theme = {
  colors: {
    background: "#f0f0f0",
    backgroundLight: "#c0c0c0",
    foreground: "#555",
    foregroundLight: "#777",
    border: "#a0a0a0",
    primary: "#a81816",
  },
  sizing: {
    padding: {
      smallx: "0.2rem",
      small: "0.5rem",
      medium: "1rem",
      large: "1.5rem",
    },
    margin: {
      small: "0.5rem",
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
    medium: "min-width: 600px",
    large: "min-width: 1000px",
  },
  scrollbar: {
    width: "1rem",
    handlerColor: "#555",
    handlerColorHover: "#888",
  },
};

export type ThemeType = typeof theme;
