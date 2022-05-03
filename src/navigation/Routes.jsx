import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../layout/Home";
import AppRoutes from './RoutesSetup';
import ComponentRoute from './ComponentRoute';

function Routes() {
  const appRoutes = AppRoutes();
  return (
    <Route>
      <Switch>
        {Object.keys(appRoutes).map((key) => {
          const appRoutesGroup = appRoutes[key];
          return appRoutesGroup.map((appRoute, index) => (
            <ComponentRoute {...appRoute} key={index} />
          ));
        })}
        <Route path="/" exact component={Home} />
        <Route path="*" component={Home} />
      </Switch>
    </Route>
  );
}

export default Routes;

