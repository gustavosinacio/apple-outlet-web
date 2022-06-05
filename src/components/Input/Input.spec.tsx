import { fireEvent } from "@testing-library/react";

import { renderWithTheme } from "../../styledTests/renderWithTheme";
import { Input } from "./Input";

describe("Input tests", () => {
  it("should call on change function", () => {
    const onChange = jest.fn();

    const input = renderWithTheme(
      <Input alt="test-input" onChange={onChange} />
    ).getByAltText("test-input");

    fireEvent.change(input, { target: { value: "changing input value" } });

    expect(onChange).toBeCalled();
  });
});
