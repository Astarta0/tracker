const express = require('express');
const path = require('path');
const router = require('./task-router');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../../index.html`));
});

app.get('/dist/client-bundle.js', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../../dist/client-bundle.js`));
});

app.use('/api/v1/tasks', router);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
