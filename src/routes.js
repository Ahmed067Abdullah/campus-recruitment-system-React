import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import Signin from "./containers/SignIn/SignIn";
import Signup from "./containers/SignUp/SignUp";

const getRoutes = isAthenticated => {
  let routes = (
    <Switch>
      <Route path="/signin" exact component={Signin} />
      <Route path="/signup" exact component={Signup} />
      <Redirect to="/signin" />
    </Switch>
  );
  // if (isAthenticated) {
  //   routes = (
  // <Switch>
  //   <Route path="/profile" component={Profile} />
  //   <Route path="/auth" component={Auth} />
  //   <Route path="/donors" component={Donors} />
  //   <Route path="/logout" component={Logout} />
  //   <Route path="/" exact component={Auth} />
  // </Switch>
  //   );
  // }
  return routes;
};

export default getRoutes;
