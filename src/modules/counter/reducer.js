import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER
} from './constants';


export function counterReducer(state = 0, action) {
  switch (action.type) {
    case DECREMENT_COUNTER:
      return state - 1;

    case INCREMENT_COUNTER:
      return state + 1;

    default:
      return state;
  }
}
