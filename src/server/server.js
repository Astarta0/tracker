const express = require('express');
const path = require('path');

const TASKS = require('./data-stub/tasks-table');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../../index.html`));
});

app.get('/dist/client-bundle.js', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../../dist/client-bundle.js`));
});

app.get('/api/tasks', (req, res) => {
  res.json(TASKS);
});

app.delete('/api/tasks/:id', (req, res) => {
  res.json(TASKS);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
