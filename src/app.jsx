import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import themeVariables from "./theme";
import GlobalStyle from "./_global-style";
import { MainLayout, Loading } from "components";

const HomePage = lazy(() => import("./pages/Home"));
const NotFoundPage = lazy(() => import("./pages/404"));
const MoviesPage = lazy(() => import("./pages/Movies"));
const CustomList = lazy(() => import("./pages/CustomList"));

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeVariables()}>
        <GlobalStyle />
        <MainLayout>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/movies/:search" component={MoviesPage} />
              <Route exact path="/lists/:type" component={CustomList} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </Suspense>
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
