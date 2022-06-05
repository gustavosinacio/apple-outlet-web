import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../styles/theme";

type Children = ReactNode | ReactNode[];

export function renderWithTheme(
  component: ReactElement<any, string | React.JSXElementConstructor<any>>,
  options?: RenderOptions
) {
  const Wrapper = ({ children }: { children: Children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  return render(component, { wrapper: Wrapper, ...options });
}
