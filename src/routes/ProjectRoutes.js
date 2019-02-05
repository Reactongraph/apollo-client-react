import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../container/login";
import Signup from "../container/signup";
import User from "../container/user";
import PageNotFound from "../components/PageNotFound";

// Switch between one screen to another screen
const ProjectRoutes = props => (
  <Router>
    <Switch>
      {/* Authorized Routes */}
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/user" component={User} />

      {/* Routes not defined in my routing */}
      <Route exact path="*" component={props => <PageNotFound {...props} />} />
    </Switch>
  </Router>
);

export default ProjectRoutes;
