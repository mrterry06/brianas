import { Simulate } from 'react-addons-test-utils';
import { createConnectedTestComponent } from 'src/utils/create-connected-test-component';
import { createTestComponent } from 'src/utils/create-test-component';
import { configureStore } from 'src/core/store';
import ConnectedCounter, { Counter } from './counter';


describe('Counter', () => {
  describe('component', () => {
    let props;

    beforeEach(() => {
      props = {
        counter: 0,
        decrement: () => {},
        increment: () => {},
        incrementAsync: () => {},
        incrementIfOdd: () => {}
      };

      spyOn(props, 'decrement');
      spyOn(props, 'increment');
      spyOn(props, 'incrementAsync');
      spyOn(props, 'incrementIfOdd');
    });


    it('should display current count', () => {
      const store = configureStore();
      const counter = createConnectedTestComponent(ConnectedCounter, Counter, store, props);
      expect(counter.currentCount.textContent).toMatch(/^Clicked: 0 times/);
    });


    describe('`decrement` button', () => {
      it('should invoke `decrement` action', () => {
        const counter = createTestComponent(Counter, props);
        Simulate.click(counter.decrementButton);
        expect(props.decrement).toHaveBeenCalledTimes(1);
      });

      it('should update count', () => {
        const store = configureStore({counter: 2});
        const counter = createConnectedTestComponent(ConnectedCounter, Counter, store, props);
        Simulate.click(counter.decrementButton);
        expect(counter.currentCount.textContent).toMatch(/^Clicked: 1 times/);
      });
    });


    describe('`increment` button', () => {
      it('should invoke `increment` action', () => {
        const counter = createTestComponent(Counter, props);
        Simulate.click(counter.incrementButton);
        expect(props.increment).toHaveBeenCalledTimes(1);
      });

      it('should update count', () => {
        const store = configureStore();
        const counter = createConnectedTestComponent(ConnectedCounter, Counter, store, props);
        Simulate.click(counter.incrementButton);
        expect(counter.currentCount.textContent).toMatch(/^Clicked: 1 times/);
      });
    });


    describe('`increment async` button', () => {
      it('should invoke `incrementAsync` action', () => {
        const counter = createTestComponent(Counter, props);
        Simulate.click(counter.incrementAsyncButton);
        expect(props.incrementAsync).toHaveBeenCalledTimes(1);
      });
    });


    describe('`increment if odd` button', () => {
      it('should invoke `incrementIfOdd` action', () => {
        const counter = createTestComponent(Counter, props);
        Simulate.click(counter.incrementIfOddButton);
        expect(props.incrementIfOdd).toHaveBeenCalledTimes(1);
      });

      it('should update count if current count is odd', () => {
        const store = configureStore({counter: 1});
        const counter = createConnectedTestComponent(ConnectedCounter, Counter, store, props);
        Simulate.click(counter.incrementIfOddButton);
        expect(counter.currentCount.textContent).toMatch(/^Clicked: 2 times/);
      });

      it('should not update count if current count is even', () => {
        const store = configureStore({counter: 2});
        const counter = createConnectedTestComponent(ConnectedCounter, Counter, store, props);
        Simulate.click(counter.incrementIfOddButton);
        expect(counter.currentCount.textContent).toMatch(/^Clicked: 2 times/);
      });
    });
  });
});
