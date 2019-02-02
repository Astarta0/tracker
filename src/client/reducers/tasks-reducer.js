import * as TYPE from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  tasks: null,
  error: null
};

export default function tasks(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPE.FETCH_TASKS_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case TYPE.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: action.payload.tasks
      };

    case TYPE.FETCH_TASKS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}
