import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'


import MoviesContainer from "./containers/MoviesContainer";

import {moviesFetchRequested} from './actions/moviesFetchRequested'

import configureStore from "./configureStore";

const store = configureStore();

ReactDOM.render(
        <Provider store={store.store}>
            <PersistGate loading={null} persistor={store.persistor}>
                <MoviesContainer />
            </PersistGate>
        </Provider>, 
        document.getElementById('root'));

var initialState = store.store.getState();
store.store.dispatch(moviesFetchRequested(initialState.movies.filter, initialState.movies.filterValue, initialState.movies.sortType));