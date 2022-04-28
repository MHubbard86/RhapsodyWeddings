import React from "react";
import { Route } from "react-router-dom";
import NotAuthorised from '../error/NotAuthorised'

const PrivateRoute = ({ component: Component, auth }) => {
  return (
    <Route>
      {auth.isAuthenticated() ?
        <Component />
      :
        <NotAuthorised />
      }
      </Route>
  );
};

export default PrivateRoute;