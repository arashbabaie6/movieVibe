import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import Image from "./Image";
import { renderWithTheme } from "../../helpers/test.helper";

describe("when Image render", () => {
  let fallback;
  beforeEach(() => {
    renderWithTheme(<Image src="/image-src" />);
    fallback = screen.getByTestId("fallback");
  });

  it("should see fallback", () => {
    expect(fallback).toBeInTheDocument();
  });

  it("fallback disappear after image load", () => {
    const img = screen.getByRole("img");
    expect(fallback).toBeInTheDocument();
    fireEvent.load(img);
    expect(fallback).not.toBeInTheDocument();
  });
});
