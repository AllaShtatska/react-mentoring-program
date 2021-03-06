import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./src/reducers";
import rootSaga from "./src/sagas";

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export default initialState => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};
