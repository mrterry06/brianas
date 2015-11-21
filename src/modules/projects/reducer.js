import {
  FETCH_PROJECTS,
  FETCH_PROJECTS_ERROR,
  FETCH_PROJECTS_SUCCESS
} from './constants';


export const INITIAL_STATE = {
  list: []
};


export function projectsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return state;

    case FETCH_PROJECTS_ERROR:
      return state;

    case FETCH_PROJECTS_SUCCESS:
      return {
        list: action.payload
      };

    default:
      return state;
  }
}
