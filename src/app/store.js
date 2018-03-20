import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import app from 'app/reducers/appReducer';
import cardLibrary from 'app/reducers/cardLibraryReducer';

export default createStore(
  combineReducers({app, cardLibrary}),
  applyMiddleware(createLogger(), thunk)
);
