import thunk from 'redux-thunk';
import { createMockStore } from 'src/utils/create-mock-store';

import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER
} from './constants';

import {
  decrement,
  increment,
  incrementAsync,
  incrementIfOdd
} from './actions';


describe('Counter', () => {
  describe('action creators', () => {
    describe('`decrement` action creator', () => {
      it('should create decrement action', () => {
        expect(decrement()).toEqual({type: DECREMENT_COUNTER});
      });
    });

    describe('`increment` action creator', () => {
      it('should create increment action', () => {
        expect(increment()).toEqual({type: INCREMENT_COUNTER});
      });
    });

    describe('`incrementAsync` action creator', () => {
      it('should create increment action', done => {
        const expectedActions = [{type: INCREMENT_COUNTER}];
        const store = createMockStore({counter: 0}, expectedActions, [thunk], done);
        store.dispatch(incrementAsync(100));
      });
    });

    describe('`incrementIfOdd` action creator', () => {
      it('should create increment action if count is odd', done => {
        const expectedActions = [{type: INCREMENT_COUNTER}];
        const store = createMockStore({counter: 1}, expectedActions, [thunk], done);
        store.dispatch(incrementIfOdd());
      });

      it('should not create increment action if count is even', done => {
        const expectedActions = [];
        const store = createMockStore({counter: 2}, expectedActions, [thunk]);
        store.dispatch(incrementIfOdd());
        done();
      });
    });
  });
});
