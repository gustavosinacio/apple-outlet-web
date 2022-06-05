import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home/Home";
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
