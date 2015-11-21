import {
  FETCH_PROJECTS_ERROR,
  FETCH_PROJECTS_SUCCESS
} from './constants';


export function fetchProjects() {
  return dispatch => {
    dispatch(fetchProjectsSuccess([
      {name: 'Project 1'},
      {name: 'Project 2'}
    ]));
  };
}

export function fetchProjectsError(error) {
  return {
    type: FETCH_PROJECTS_ERROR,
    error: true,
    payload: error
  };
}

export function fetchProjectsSuccess(projects) {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    payload: projects
  };
}
