const { oneLineTrim } = require('common-tags');
const faker = require('faker');

const { STATUSES, DAY_DURATION, TASKS_COUNT } = require('../../constants');

function getTimeString(data) {
  const day = data.getDate();
  const month = data.getMonth() + 1;

  return oneLineTrim`
  ${day < 10 ? `0${day}` : day}/
  ${month < 10 ? `0${month}` : month}/
  ${data.getFullYear()}
  `;
}

function getTaskDuration(i) {
  const start = new Date(Date.now() - DAY_DURATION * i);
  const end = new Date(Date.now() - DAY_DURATION * i / (2 + getRandomArbitrary(0, 2)));
  const duration = Math.ceil((end.getTime() - start.getTime()) / DAY_DURATION + 1);

  return {
    started: getTimeString(start),
    ended: getTimeString(end),
    days: duration
  };
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomStatus(i) {
  return STATUSES[Math.round((i + getRandomArbitrary(0, 10))) % STATUSES.length];
}

function getNewId(tasks) {
  return tasks.length;
}

const TASKS = [...Array(TASKS_COUNT).keys()].map((v, i) => {
  const { started, ended, days } = getTaskDuration(i);

  return {
    id: i,
    started,
    ended,
    days,
    name: `${faker.company.bs()}\u00A0${i}`,
    status: getRandomStatus(i)
  };
}).map(t => (
  {
    ...t,
    ended: t.status === 'ACTIVE' ? null : t.ended
  }
));

module.exports = {
  TASKS,
  getNewId
};
