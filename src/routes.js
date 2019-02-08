import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

// auth containers
// import Signin from "./containers/Auth/SignIn/SignIn";
// import Signup from "./containers/Auth/SignUp/SignUp";
import Logout from "./containers/Auth/Logout/Logout";

// student containers
import StudentProfile from "./containers/Student/Profile/Profile";

// company containers
import CompanyProfile from "./containers/Company/Profile/Profile";

const getRoutes = status => {
  let routes = (
    <Switch>
      <Route path="/profile" component={StudentProfile} />
      <Route path="/logout" component={Logout} />
      <Redirect to="/profile" />
      {/* <Route path="/signin" exact component={Signin} />
      <Route path="/signup" exact component={Signup} />
      <Redirect to="/signin" /> */}
    </Switch>
  );

  // routes for admin
  // if (status === 1) {
  //   routes = (
  //     <Switch>
  //       <Route path="/logout" component={Logout} />
  //       <Route path="/auth" component={Auth} />
  //       <Route path="/donors" component={Donors} />
  //       <Route path="/" exact component={Auth} />
  //     </Switch>
  //   );
  // }
  console.log("status", status);
  // routes for students
  if (status === 2) {
    console.log("status", status);
    routes = (
      <Switch>
        <Route path="/profile" component={StudentProfile} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/profile" />
        {/* <Route path="/companies" component={Auth} />
        <Route path="/vacancies" component={Donors} />
        <Route path="/" exact component={Auth} /> */}
      </Switch>
    );
  }

  // routes for companies
  else if (status === 3) {
    routes = (
      <Switch>
        <Route path="/profile" component={CompanyProfile} />
        <Route path="/logout" component={Logout} />
        {/* <Route path="/auth" component={Auth} />
        <Route path="/donors" component={Donors} />
        <Route path="/" exact component={Auth} /> */}
      </Switch>
    );
  }

  return routes;
};

export default getRoutes;
