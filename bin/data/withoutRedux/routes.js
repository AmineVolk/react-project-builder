const content = `
import React from "react";
import { Route, Switch } from "react-router-dom";
import history from "./history";
import Home from "./screens/home";
import ScreenExp1 from "./screens/screenExp1";

const Routes = () => <Switch>
  <Route exact path="/" history={history} component={Home} />
  <Route path="/screenExp1" history={history} component={ScreenExp1} />
</Switch>;
export default Routes;
  `

module.exports.routes = { content };
