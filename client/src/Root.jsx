import "isomorphic-fetch";
import "babel-polyfill";
import React from "react";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import MoviesContainer from "./containers/MoviesContainer";
import MovieContainer from "./containers/MovieContainer";

import NotFound from "./components/NotFound";

const Root = ({ Router, location, context, store }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <Switch>
        <Route exact path="/" component={MoviesContainer} />
        <Route path="/search/:searchQuery" component={MoviesContainer} />
        <Route path="/film/:id" component={MovieContainer} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({ url: PropTypes.string }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  }).isRequired
};

Root.defaultProps = {
  location: null,
  context: null
};

export default hot(module)(Root);
