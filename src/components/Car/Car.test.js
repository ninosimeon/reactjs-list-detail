import { render } from "@testing-library/react";
import React from "react";
import ComponentExample from "./ComponentExample";

const mockProps = {
  data: {
    name: "david",
  },
};

describe("Components/ComponentExample", () => {
  it("ComponentExample should render 'Hello world: david'", () => {
    const { getByTestId } = render(<ComponentExample {...mockProps} />);

    const text = getByTestId("content")?.textContent;

    expect(text).toBe("Hello world: david");
  });

  it("ComponentExample should NOT render 'Hello world: nino'", () => {
    const { getByTestId } = render(<ComponentExample {...mockProps} />);

    const text = getByTestId("content")?.textContent;

    expect(text).not.toBe("Hello world: nino");
  });
});
