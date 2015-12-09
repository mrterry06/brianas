import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER
} from './constants';


export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();
    if (counter % 2 !== 0) {
      dispatch(increment());
    }
  };
}
