import { stateTransformer } from 'redux-seamless-immutable'

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

const loggerMiddleware = createLogger({
  stateTransformer: stateTransformer
});

export const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
};

export default configureStore();
