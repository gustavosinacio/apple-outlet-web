import "firebase/firestore";

import { Home } from "pages/Home";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}
