import { counterActions } from './actions';


describe('counter', () => {
  describe('countActions', () => {
    describe('decrementCounter()', () => {
      it('should create an action', () => {
        expect(counterActions.decrement()).toEqual({
          type: counterActions.DECREMENT
        });
      });
    });

    describe('incrementCounter()', () => {
      it('should create an action', () => {
        expect(counterActions.increment()).toEqual({
          type: counterActions.INCREMENT
        });
      });
    });

    describe('incrementAsync()', () => {
      it('should create an action', () => {
        expect(counterActions.incrementAsync()).toEqual({
          type: counterActions.INCREMENT_ASYNC
        });
      });
    });

    describe('incrementCounterIfOdd()', () => {
      it('should create an action', () => {
        expect(counterActions.incrementIfOdd()).toEqual({
          type: counterActions.INCREMENT_IF_ODD
        });
      });
    });
  });
});
