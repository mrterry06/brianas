import React, { PropTypes } from 'react';
import { Link } from 'react-router';


export function App({children}) {
  return (
    <div>
      <header>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link>
      </header>

      <main>{children}</main>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element
};
