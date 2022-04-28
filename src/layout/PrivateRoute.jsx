import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  return (
    <Route><Component /></Route>
  );
};

export default PrivateRoute;
