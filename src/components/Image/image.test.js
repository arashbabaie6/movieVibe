import { screen, fireEvent } from "@testing-library/react";
import Image from "./Image";
import { renderWithTheme } from "../../helpers/test.helper";

describe("when implement testing", () => {
  renderWithTheme(Image);
  it("to work!", () => {
    expect(true).toBeTruthy()
  });
});
