import React from 'react';
import Layout from "./layout";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Router, Route, Switch } from "react-router";
import { syncHistoryWithStore } from "mobx-react-router";
import { RouterStore } from "./store";
import { createHashHistory } from "history";
import { Provider } from "mobx-react";
import theme from "./theme";

const hashHistory = createHashHistory();
const routerStore = new RouterStore();
const history = syncHistoryWithStore(hashHistory, routerStore);
const rootStore = {
  router: routerStore,
};

const app: React.FC = () => {
  return (
    <Provider {...rootStore}>
      <MuiThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            <Route
              path={"/"}
              component={Layout}
            />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};

export default app;
