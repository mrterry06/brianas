import React from 'react';
import { connect } from 'react-redux';
import { counterActions } from 'core/counter';
import Counter from 'views/components/counter';


function CounterPage(props) {
  return (
    <section>
      <h1>Counter</h1>
      <h2>Clicked: {props.counter} times</h2>

      <Counter {...props} />
    </section>
  );
}

CounterPage.propTypes = {
  counter: React.PropTypes.number.isRequired,
  decrement: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired,
  incrementAsync: React.PropTypes.func.isRequired,
  incrementIfOdd: React.PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = state => ({
  counter: state.counter
});

export default connect(
  mapStateToProps,
  counterActions
)(CounterPage);
