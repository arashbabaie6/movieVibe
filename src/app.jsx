import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import themeVariables from "./theme";
import GlobalStyle from "./_global-style";
import { Navbar, Loading } from "components";

const HomePage = lazy(() => import("./pages/Home"));
const NotFoundPage = lazy(() => import("./pages/404"));

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeVariables()}>
        <GlobalStyle />
        <Navbar>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </Suspense>
        </Navbar>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
