import {
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESS
} from './constants';


export function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersSuccess([
      {name: 'Jane Doe'},
      {name: 'John Smith'}
    ]));
  };
}

export function fetchUsersError(error) {
  return {
    type: FETCH_USERS_ERROR,
    error: true,
    payload: error
  };
}

export function fetchUsersSuccess(projects) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: projects
  };
}
