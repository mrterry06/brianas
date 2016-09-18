import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counterReducer } from './counter';


export default combineReducers({
  counter: counterReducer,
  routing: routerReducer
});
