import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counterReducer } from 'src/core/counter/reducer';


export default combineReducers({
  counter: counterReducer,
  routing: routerReducer
});
