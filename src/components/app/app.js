import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link> | <Link to="/counter">Counter</Link>
        </header>

        <main>{this.props.children}</main>
      </div>
    );
  }
}
