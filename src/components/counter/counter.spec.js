import { Simulate } from 'react-addons-test-utils';
import { createConnectedTestComponent } from 'utils/create-connected-test-component';
import { createTestComponent } from 'utils/create-test-component';
import createStore from '../../store';
import ConnectedCounter, { Counter } from './counter';


describe('Counter', () => {
  describe('component', () => {
    let props;

    beforeEach(() => {
      props = {
        decrement: sinon.spy(),
        increment: sinon.spy(),
        incrementAsync: sinon.spy(),
        incrementIfOdd: sinon.spy()
      };
    });


    it('should display current count', () => {
      const store = createStore();
      const counter = createConnectedTestComponent(ConnectedCounter, Counter, store, props);
      expect(counter.refs.currentCount.textContent).toMatch(/^Clicked: 0 times/);
    });


    describe('`decrement` button', () => {
      it('should invoke `decrement` action', () => {
        const counter = createTestComponent(Counter, props);
        Simulate.click(counter.refs.decrementButton);
        expect(props.decrement.callCount).toBe(1);
      });

      it('should update count', () => {
        const store = createStore({counter: 2});
        const counter = createConnectedTestComponent(ConnectedCounter, Counter, store, props);
        Simulate.click(counter.refs.decrementButton);
        expect(counter.refs.currentCount.textContent).toMatch(/^Clicked: 1 times/);
      });
    });


    describe('`increment` button', () => {
      it('should invoke `increment` action', () => {
        const counter = createTestComponent(Counter, props);
        Simulate.click(counter.refs.incrementButton);
        expect(props.increment.callCount).toBe(1);
      });

      it('should update count', () => {
        const store = createStore();
        const counter = createConnectedTestComponent(ConnectedCounter, Counter, store, props);
        Simulate.click(counter.refs.incrementButton);
        expect(counter.refs.currentCount.textContent).toMatch(/^Clicked: 1 times/);
      });
    });


    describe('`increment async` button', () => {
      it('should invoke `incrementAsync` action', () => {
        const counter = createTestComponent(Counter, props);
        Simulate.click(counter.refs.incrementAsyncButton);
        expect(props.incrementAsync.callCount).toBe(1);
      });
    });


    describe('`increment if odd` button', () => {
      it('should invoke `incrementIfOdd` action', () => {
        const counter = createTestComponent(Counter, props);
        Simulate.click(counter.refs.incrementIfOddButton);
        expect(props.incrementIfOdd.callCount).toBe(1);
      });

      it('should update count if current count is odd', () => {
        const store = createStore({counter: 1});
        const counter = createConnectedTestComponent(ConnectedCounter, Counter, store, props);
        Simulate.click(counter.refs.incrementIfOddButton);
        expect(counter.refs.currentCount.textContent).toMatch(/^Clicked: 2 times/);
      });

      it('should not update count if current count is even', () => {
        const store = createStore({counter: 2});
        const counter = createConnectedTestComponent(ConnectedCounter, Counter, store, props);
        Simulate.click(counter.refs.incrementIfOddButton);
        expect(counter.refs.currentCount.textContent).toMatch(/^Clicked: 2 times/);
      });
    });
  });
});
