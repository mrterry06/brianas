import { counterActions } from './actions';


export function counterReducer(state = 0, action) {
  switch (action.type) {
    case counterActions.DECREMENT:
      return state - 1;

    case counterActions.INCREMENT:
      return state + 1;

    case counterActions.INCREMENT_IF_ODD:
      return (state % 2 !== 0) ? state + 1 : state;

    default:
      return state;
  }
}
