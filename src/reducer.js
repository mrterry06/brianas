import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { counterReducer } from 'modules/counter/reducer';


export default combineReducers({
  counter: counterReducer,
  routing: routeReducer
});
