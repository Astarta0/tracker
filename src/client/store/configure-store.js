/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/root-reducer';

/* global window */
const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    enhancer
  );
}
/* eslint-enable */
