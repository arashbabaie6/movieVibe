import React from "react";
import { ThemeProvider } from "styled-components";
import themeVariables from "./theme";
import GlobalStyle from "./_global-style";
import MainPage from "./pages";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeVariables()}>
        <GlobalStyle />
        <MainPage />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
