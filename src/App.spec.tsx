import { render, screen } from "@testing-library/react";

import { App } from "./App";

test("Renders App with page title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Apple Outlet/i);
  expect(titleElement).toBeInTheDocument();
});
