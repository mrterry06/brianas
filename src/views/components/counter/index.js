import React from 'react';
import Button from '../button';


function Counter({
  decrement,
  increment,
  incrementAsync,
  incrementIfOdd
}) {
  return (
    <div>
      <Button onClick={decrement}>-</Button>
      <Button onClick={increment}>+</Button>
      <Button onClick={incrementAsync}>Increment async</Button>
      <Button onClick={incrementIfOdd}>Increment if odd</Button>
    </div>
  );
}

Counter.propTypes = {
  decrement: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired,
  incrementAsync: React.PropTypes.func.isRequired,
  incrementIfOdd: React.PropTypes.func.isRequired
};

export default Counter;
