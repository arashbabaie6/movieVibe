import React from "react";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import themeVariables from "../theme";

export const renderWithTheme = (Component) => {
  const App = () => (
    <ThemeProvider theme={themeVariables()}>
      <Component />
    </ThemeProvider>
  );
  render(<App />);
};
