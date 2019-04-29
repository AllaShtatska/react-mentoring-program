import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from "react-redux";

import MoviesContainer from '../containers/MoviesContainer';

import configureStore from "../configureStore";

const store = configureStore();

it ('renders correctly', ()=>{
    const component = renderer.create(<Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
            <MoviesContainer />
        </PersistGate>
    </Provider>);

    var jsonComponent = component.toJSON();
    expect(jsonComponent).toMatchSnapshot();
});