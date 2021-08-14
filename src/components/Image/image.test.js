import React from "react";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import themeVariables from "../../theme";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import Image from "./Image";
import { renderWithTheme } from "../../helpers/test.helper";

describe("when implement testing", () => {
  renderWithTheme(Image);
  const t = screen.getByText("ttt").textContent;
  console.log(t)
  it("to work!", () => {
    expect(t).toBe('ttt')
  });
});
