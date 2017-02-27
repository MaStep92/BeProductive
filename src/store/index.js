import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';

import timerMiddleware from '../middlewares/timerMiddleware';
import localStorageMiddleware from '../middlewares/localStorageMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(timerMiddleware, localStorageMiddleware)
));

export default store;
