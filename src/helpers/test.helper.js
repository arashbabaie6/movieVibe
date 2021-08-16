import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import colors from "../theme/colors";
import device, { breakpoints } from "../theme/devices";

export const renderWithTheme = (Component) => {
  const App = () => {
    const [theme, setTheme] = useState("dark");

    return (
      <ThemeProvider
        theme={{
          colors: colors(theme),
          device: device,
          breakpoints: breakpoints,
          theme: "dark",
          setTheme: setTheme,
        }}
      >
        {Component}
      </ThemeProvider>
    );
  };
  const { container } = render(<App />);
  return container
};
