import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { MainLayout, Loading } from "components";
import Context, { initialContext } from "./helpers/context.helper";
import colors from "./theme/colors";
import device, { breakpoints } from "./theme/devices";

// Routes
const HomePage = lazy(() => import("./pages/Home"));
const NotFoundPage = lazy(() => import("./pages/404"));
const MoviesPage = lazy(() => import("./pages/Movies"));
const CustomList = lazy(() => import("./pages/CustomList"));
const SingleMoviePage = lazy(() => import("./pages/SingleMovie"));

const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <BrowserRouter>
      <ThemeProvider
        theme={{
          colors: colors(theme),
          device: device,
          breakpoints: breakpoints,
          theme: theme,
          setTheme: setTheme,
        }}
      >
        <GlobalStyle />
        <Context.Provider value={initialContext}>
          <MainLayout>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/movies/:search" component={MoviesPage} />
                <Route exact path="/lists/:type" component={CustomList} />
                <Route exact path="/movie/:id" component={SingleMoviePage} />
                <Route path="*" component={NotFoundPage} />
              </Switch>
            </Suspense>
          </MainLayout>
        </Context.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
