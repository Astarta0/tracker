import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchTasks } from '../../actions/tasks-actions';
import { T_HEADS } from '../../../constants';
import Label from '../Label';
import './Tasks-table.css';

class TasksTable extends Component {

  render() {
    const { tasks } = this.props;

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
          {tasks.map(task => {
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

TasksTable.propTypes = {
  tasks: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

export default connect(mapStateToProps)(TasksTable);
