import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from './reducers';

import watchFetchMovies from './sagas/watchFetchMovies';
import watchFetchMoviesOfTheSameGenre from "./sagas/watchFetchMoviesOfTheSameGenre";

const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();

const configuredStore = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchMovies);
sagaMiddleware.run(watchFetchMoviesOfTheSameGenre);

export default () => {
    let store = configuredStore
    let persistor = persistStore(store)
    return { store, persistor }
  }
  