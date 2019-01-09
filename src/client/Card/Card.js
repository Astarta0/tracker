import React, { Component } from 'react';

import TasksTable from '../Tasks-table';
import Pagination from '../Pagination';
import './Card.css';

class Card extends Component {
  render() {
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
        <TasksTable />
        <Pagination />
      </div>
    );
  }
}

export default Card;
