import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../layout/Home";
import Email from "../components/Email/Feedback";
import Reviews from "../components/Reviews/Reviews";
import FAQ from "../components/FAQ/FAQ";
import Packages from "../components/Packages/Packages";

function Routes() {
  return (
    <Route>
      <Switch>
        <Route path="/packages" component={Packages} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/faq" component={FAQ} />
        <Route path="/email" component={Email} />
        <Route path="/" exact component={Home} />
        <Route path="*" component={Home} />
      </Switch>
    </Route>
  );
}

export default Routes;
