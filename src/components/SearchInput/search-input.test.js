import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import SearchInput from "./SearchInput";
import { renderWithTheme } from "../../helpers/test.helper";

describe("Search input render", () => {
  const handleSearch = jest.fn();
  const handleSubmit = jest.fn();
  let input;
  const mockData = [
    {
      id: 1,
      poster_path: "/poster_path",
      title: "black",
      release_date: "2010-05-11",
    },
    {
      id: 2,
      poster_path: "/poster_path",
      title: "black 2",
      release_date: "2010-05-22",
    },
    {
      id: 3,
      poster_path: "/poster_path",
      title: "pink",
      release_date: "2010-05-22",
    },
  ];

  beforeEach(() => {
    renderWithTheme(
      <SearchInput
        onChange={handleSearch}
        data={mockData}
        onSubmit={handleSubmit}
      />
    );
    input = screen.getByRole("textbox");
    handleSearch.mockClear();
    handleSubmit.mockClear();
  });

  it("value can be change", () => {
    fireEvent.change(input, { target: { value: "black" } });
    expect(input.value).toBe("black");
  });

  it("handleSearch can be call", () => {
    fireEvent.change(input, { target: { value: "black" } });
    expect(handleSearch).toHaveBeenCalled();
  });

  it("handleSubmit can't be call when input value is less than 2", () => {
    fireEvent.change(input, { target: { value: "bl" } });
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("handleSubmit can be call", () => {
    fireEvent.change(input, { target: { value: "black" } });
    expect(handleSearch).toHaveBeenCalled();
  });

  it("search result should include input value", async () => {
    fireEvent.change(input, { target: { value: "black" } });
    fireEvent.click(input);
    const inDocumentCount = screen.getAllByText(/black/i).length;
    const mockDataCount = mockData.filter((data) =>
      data.title.includes(input.value)
    ).length;

    expect(inDocumentCount).toBe(mockDataCount);
  });
});
