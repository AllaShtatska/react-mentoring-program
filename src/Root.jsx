import "isomorphic-fetch";
import "babel-polyfill";
import React from "react";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";
import { Route, Link, Switch, Redirect } from "react-router-dom";

import Hello from "./components/Hello";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";

const Root = ({ Router, location, context }) => (
  <Router location={location} context={context}>
    <div>
      <h1>Server Side Rendering</h1>
      <Hello name="World" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/users/:userId" component={UserPage} />
        <Route path="/users" component={UsersPage} />
      </Switch>
    </div>
  </Router>
);

export default hot(module)(Root);
