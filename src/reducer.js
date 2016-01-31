import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { counterReducer } from 'modules/counter/reducer';


export default combineReducers({
  counter: counterReducer,
  routing: routeReducer
});
