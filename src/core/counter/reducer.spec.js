import { counterActions } from './actions';
import { counterReducer } from './reducer';


describe('counter', () => {
  describe('counterReducer', () => {
    it('should handle initial state', () => {
      expect(counterReducer(undefined, {})).toBe(0);
    });

    it('should handle DECREMENT_COUNTER', () => {
      expect(counterReducer(1, counterActions.decrement())).toBe(0);
    });

    it('should handle INCREMENT_COUNTER', () => {
      expect(counterReducer(1, counterActions.increment())).toBe(2);
    });

    it('should handle INCREMENT_COUNTER_IF_ODD', () => {
      expect(counterReducer(1, counterActions.incrementIfOdd())).toBe(2);
      expect(counterReducer(2, counterActions.incrementIfOdd())).toBe(2);
    });
  });
});
