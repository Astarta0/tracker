import React, { Component } from 'react';

import * as tasksList from '../../server/data-stub/tasks-list';
import { T_HEADS } from '../../constants';
import Label from '../Label';
import './Tasks-table.css';

class TasksTable extends Component {
  render() {
    return (
      <table className="tasks-table">
        <thead>
          <tr>
            {T_HEADS.map((v, i) => (
              <th className="tasks-table__thead-item" key={i}>
                {v}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="tasks-table__tbody">
          {tasksList.getTasks().map(task => {
            const { id, started, ended, days, name, status } = task;

            return (
              <tr className="tasks-table__row" key={id}>
                <td>{started}</td>
                <td>{ended}</td>
                <td>{days}</td>
                <td>{name}</td>
                <td><Label status={status} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default TasksTable;
