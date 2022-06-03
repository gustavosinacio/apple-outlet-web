import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("Renders App with page title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Apple Outlet/i);
  expect(linkElement).toBeInTheDocument();
});
