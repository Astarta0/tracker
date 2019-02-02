import axios from 'axios';

import * as TYPE from './types';

export function fetchTasks() {
  return async dispatch => {
    dispatch({
      type: TYPE.FETCH_TASKS_PENDING
    });

    try {
      const { data: tasks } = await axios.get('/api/v1/tasks');

      dispatch({
        type: TYPE.FETCH_TASKS_SUCCESS,
        payload: { tasks }
      });

    } catch (error) {

      dispatch({
        type: TYPE.FETCH_TASKS_FAILED,
        payload: { error: error.message }
      });

    }
  };
}
