import { delay } from 'redux-saga';
import { call, fork, put, take } from 'redux-saga/effects';
import { counterActions } from './actions';
import { incrementAsync, watchIncrementAsync } from './sagas';


describe('counter', () => {
  describe('sagas', () => {
    describe('incrementAsync()', () => {
      const generator = incrementAsync();

      it('should delay for 1 second', () => {
        expect(generator.next().value).toEqual(
          call(delay, 1000)
        );
      });

      it('should put INCREMENT action', () => {
        expect(generator.next().value).toEqual(
          put(counterActions.increment())
        );
      });

      it('should be done', () => {
        expect(generator.next().done).toBe(true);
      });
    });


    describe('watchIncrementAsync()', () => {
      const generator = watchIncrementAsync();

      it('should take INCREMENT_ASYNC action', () => {
        expect(generator.next().value).toEqual(
          take(counterActions.INCREMENT_ASYNC)
        );
      });

      it('should fork incrementAsync', () => {
        expect(generator.next().value).toEqual(
          fork(incrementAsync)
        );
      });
    });
  });
});
