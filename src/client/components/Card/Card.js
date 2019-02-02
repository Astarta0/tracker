import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchTasks } from '../../actions/tasks-actions';
import TasksTable from '../Tasks-table';
import Pagination from '../Pagination';
import join from '../../../utils/utils';
import './Card.css';

class Card extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    const { isLoading, tasks, error } = this.props;

    return (
      <div className="card">

        <div className="card__header">
          <h2 className="card__header-title">History</h2>
        </div>
        <div className="filter-panel">
          <button
            type="button"
            className="filter-panel__btn"
          >
            Status
          </button>
        </div>
        <div className={join('card__content-wrapper', `card__content-wrapper_alignment_${isLoading || Boolean(error)}`)}>
          { error ? (
            <div className="card__error">
              <span role="img" aria-label="cat" style={{ fontSize: '22px' }}> 😿 </span>
              {error}
            </div>
          )
            : (isLoading || !tasks
              ? (<div className="card__loader">Loading ...</div>)
              : <TasksTable />) }
        </div>
        <Pagination />
      </div>
    );
  }
}

Card.propTypes = {
  isLoading: PropTypes.bool,
  tasks: PropTypes.array,
  error: PropTypes.string,

  fetchTasks: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  fetchTasks
};

const mapStateToProps = state => {
  const { isLoading, error, tasks } = state.tasks;

  return {
    isLoading,
    error,
    tasks
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
