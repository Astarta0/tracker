const express = require('express');
const tasksList = require('./data-stub/tasks-list');

const router = express.Router();

// '/' === '/api/v1/tasks'
router.get('/', (req, res) => {
  res.json(tasksList.getTasks());
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json(tasksList.deleteTask(id));
});

router.put('/:id', (req, res) => {
  res.json(tasksList.updateTask(req.params));
});

router.post('/:id', (req, res) => {
  res.json(tasksList.createTask(req.params));
});

module.exports = router;
