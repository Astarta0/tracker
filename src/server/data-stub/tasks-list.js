const { TASKS, getNewId } = require('./helper');

class TasksList {
  constructor() {
    this.taskslist = TASKS;
  }

  getTasks() {
    return this.taskslist;
  }

  deleteTask(id) {
    this.taskslist = this.taskslist.filter(task => task.id !== id);
    return this.taskslist;
  }

  updateTask({ id, started, ended, days, name, status }) {
    const idx = this.taskslist.findIndex(task => task.id === id);
    if (idx !== -1) {
      this.taskslist[idx] = { id, started, ended, days, name, status };
    }
    return this.taskslist;
  }

  createTask(params) {
    const id = getNewId(this.taskslist);
    this.taskslist.push({ id, ...params });
    return this.taskslist;
  }
}

const tasksList = new TasksList();
module.exports = tasksList;
