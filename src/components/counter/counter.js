import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as counterActions from 'modules/counter/actions';


export class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired
  };

  render() {
    const {
      counter,
      decrement,
      increment,
      incrementAsync,
      incrementIfOdd
    } = this.props;

    return (
      <div>
        <h1>Counter</h1>
        <h2 ref="currentCount">Clicked: {counter} times</h2>

        <div>
          <button onClick={decrement} ref="decrementButton">-</button>
          <button onClick={increment} ref="incrementButton">+</button>
          <button onClick={() => incrementAsync()} ref="incrementAsyncButton">Increment async</button>
          <button onClick={incrementIfOdd} ref="incrementIfOddButton">Increment if odd</button>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  counter: state.counter
}), counterActions)(Counter);
