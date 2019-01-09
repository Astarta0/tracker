import { oneLineTrim } from 'common-tags';
import * as faker from 'faker';

const DAY_DURATION = 86400000;
const TASKS_COUNT = 10;

const STATUSES = ['CLOSED', 'ACTIVE', 'IN REVIEW', 'DEFFERED'];
const T_HEADS = ['STARTED', 'ENDED', 'DAYS', 'TASK NAME', 'STATUS'];

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
});

export { TASKS, T_HEADS };
