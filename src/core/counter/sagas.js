/* eslint-disable no-constant-condition */
import { delay } from 'redux-saga';
import { call, fork, put, take } from 'redux-saga/effects';
import { counterActions } from './actions';


export function* incrementAsync() {
  yield call(delay, 1000);
  yield put(counterActions.increment());
}


//=====================================
//  WATCHERS
//-------------------------------------

export function* watchIncrementAsync() {
  while (true) {
    yield take(counterActions.INCREMENT_ASYNC);
    yield fork(incrementAsync);
  }
}


//=====================================
//  EXPORT
//-------------------------------------

export const counterSagas = [
  fork(watchIncrementAsync)
];
