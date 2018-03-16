import {createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";

import app from 'app/reducers/appReducer';

export default createStore(
  app,
  applyMiddleware(createLogger(), thunk)
);
