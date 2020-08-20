import React from "react";
import { render, fireEvent } from "@testing-library/react";

import SearchBar from ".";

describe("SearchBar Rendering test", () => {
  const setup = (props = {}) => {
    const utils = render(<SearchBar />);
    const { getByText, getByPlaceholderText } = utils;
    const deleteButton = getByText("╳"); // button이 있는지 확인
    const input = getByPlaceholderText("상품 검색");
    return {
      ...utils,
      input,
      deleteButton,
    };
  };

  it("has deleteButton", () => {
    const { deleteButton } = setup();
    expect(deleteButton).toBeTruthy();
  });

  it("has input tag", () => {
    const { input } = setup();
    expect(input).toBeTruthy();
  });

  it("change input text and delete", () => {
    const { deleteButton, input, getByPlaceholderText } = setup();

    fireEvent.change(input, { target: { value: "Good Day" } });
    fireEvent.keyPress(input, { key: "A", code: 65 });

    expect(getByPlaceholderText("상품 검색").value).toEqual("Good Day");

    fireEvent.click(deleteButton);

    expect(getByPlaceholderText("상품 검색").value).toEqual("");
  });
});
