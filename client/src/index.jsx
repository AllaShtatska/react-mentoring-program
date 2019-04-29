import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'


import MoviesContainer from "./containers/MoviesContainer";

import configureStore from "./configureStore";

const store = configureStore();

ReactDOM.render(
        <Provider store={store.store}>
            <PersistGate loading={null} persistor={store.persistor}>
                <MoviesContainer />
            </PersistGate>
        </Provider>, 
        document.getElementById('root'));