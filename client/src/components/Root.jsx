import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MoviesContainer from "../containers/MoviesContainer";
import MovieContainer from "../containers/MovieContainer";

import NotFound from './NotFound';

const Root = ({ store }) => (
    <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
            <Router>
                <Switch>
                    <Route exact path="/" component={MoviesContainer} />
                    <Route path="/search/:searchQuery" component={MoviesContainer} />
                    <Route path="/film/:id" component={MovieContainer} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </PersistGate>
    </Provider>
    );

export default Root;