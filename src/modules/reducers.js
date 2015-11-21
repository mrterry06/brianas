import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

// Reducers
import { projectsReducer } from './projects';
import { usersReducer } from './users';


export const reducer = combineReducers({
  projects: projectsReducer,
  routing: routeReducer,
  users: usersReducer
});
