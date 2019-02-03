/* eslint-disable no-underscore-dangle */
/* global document, window */

import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import App from './components/App';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
