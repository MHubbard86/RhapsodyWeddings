import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Email from "../components/Email/Feedback";
import Reviews from "../components/Reviews/Reviews";
import FAQ from "../components/FAQ/FAQ";
import Packages from "../components/Packages/Packages";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/packages" component={Packages} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/faq" component={FAQ} />
        <Route path="/email" component={Email} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
