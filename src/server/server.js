const express = require('express');
const router = require('./taskRouter');

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import { getHTMLtemplate } from './ssr';
import App from '../client/components/App';

const app = express();

app.use('/static', express.static(`${__dirname}/../../static`));

app.get('/', (req, res) => {
  // TODO: fetch tasks for initial state
  let preloadedState;

  const store = configureStore(preloadedState);

  const appHtml = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const finalState = store.getState();

  // Send the rendered page back to the client
  res.send(getHTMLtemplate(appHtml, finalState));
});

app.use('/api/v1/tasks', router);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
