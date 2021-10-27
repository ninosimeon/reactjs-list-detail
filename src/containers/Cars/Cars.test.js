import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import axios from "axios";
import React from "react";
import ContainerExample from "./ContainerExample";

jest.mock("axios");

const mockAxiosResponse = {
  data: {
    name: "nino",
  },
};

describe("Containers / ContainerExample", () => {
  it("ContainerExample should show 'is loading'", async () => {
    axios.get.mockImplementation(() => mockAxiosResponse);
    const { getByText } = render(<ContainerExample />);

    await waitFor(() => {
      const text = getByText("...is loading");
      expect(text).toBeTruthy();
    });
  });

  it("ContainerExample should show NOT SHOW 'is loading'", async () => {
    axios.get.mockImplementation(() => mockAxiosResponse);
    const { getByText } = render(<ContainerExample />);
    expect(axios.get).toHaveBeenCalled();

    await waitForElementToBeRemoved(() => {
      return getByText("...is loading");
    });

    const text = getByText(/hello world/i);
    return expect(text).toBeTruthy();
  });
});
