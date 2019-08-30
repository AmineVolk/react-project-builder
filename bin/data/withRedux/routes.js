const content = `

import React from "react";
import { Route, Switch } from "react-router-dom";
import history from "./history";
import Home from "./screens/home/homeContainer";
import ScreenExp1 from "./screens/screenExp1/screenExp1Container";

const Routes = () => <Switch>
  <Route exact path="/" history={history} component={Home} />
  <Route path="/screenExp1" history={history} component={ScreenExp1} />
</Switch>;
export default Routes;


  `

module.exports.routesWithRedux = { content };
