/* eslint-disable no-undefined */

import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './constants';
import { counterReducer } from './reducer';


describe('Counter', () => {
  describe('reducer', () => {
    it('should handle initial state', () => {
      expect(counterReducer(undefined, {})).toBe(0);
    });

    it('should handle DECREMENT_COUNTER', () => {
      expect(counterReducer(1, {type: DECREMENT_COUNTER})).toBe(0);
    });

    it('should handle INCREMENT_COUNTER', () => {
      expect(counterReducer(1, {type: INCREMENT_COUNTER})).toBe(2);
    });

    it('should handle unknown action type', () => {
      expect(counterReducer(1, {type: 'unknown'})).toBe(1);
    });
  });
});
