import { createReducer } from 'utils/create-reducer';

import {
  FETCH_USERS,
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESS
} from './constants';


export const INITIAL_STATE = {
  list: []
};


export const usersReducer = createReducer(INITIAL_STATE, {
  [FETCH_USERS](state) {
    return state;
  },

  [FETCH_USERS_ERROR](state) {
    return state;
  },

  [FETCH_USERS_SUCCESS](state, action) {
    return {
      list: action.payload
    };
  }
});
