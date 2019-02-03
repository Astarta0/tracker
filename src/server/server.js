const express = require('express');
const path = require('path');
const router = require('./task-router');

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

//TODO перенести в глобальную область
import configureStore from '../client/store/configure-store';
import { getHTMLtemplate } from './ssr';
import App from '../client/components/App';

const app = express();

app.use('/static', express.static(`${__dirname}/../../static`));

app.get('/', (req, res) => {

  // Compile an initial state
  let preloadedState;

  // Create a new Redux store instance
  const store = configureStore(preloadedState);

  // Render the component to a string
  const appHtml = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Grab the initial state from our Redux store
  const finalState = store.getState();

  // Send the rendered page back to the client
  res.send(getHTMLtemplate(appHtml, finalState));


});

app.use('/api/v1/tasks', router);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
