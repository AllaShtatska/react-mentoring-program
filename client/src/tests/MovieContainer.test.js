import React from 'react';
import renderer from 'react-test-renderer';

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MoviesContainer from '../containers/MoviesContainer';

import configureStore from "../configureStore";

const store = configureStore();

it('renders correctly', () => {
    const component = renderer.create(
        <Provider store={store.store}>
            <PersistGate loading={null} persistor={store.persistor}>
                <Router>
                    <Route exact path="/" component={MoviesContainer} />
                </Router>
            </PersistGate>
        </Provider>);

    var jsonComponent = component.toJSON();
    expect(jsonComponent).toMatchSnapshot();
});