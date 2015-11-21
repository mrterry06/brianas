import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        <header>
          <Link to="/">Home</Link> | <Link to="/projects">Projects</Link> | <Link to="/users">Users</Link>
        </header>

        <main>{children}</main>
      </div>
    );
  }
}
