import React from 'react';
import { Link } from 'react-router';


function App({children}) {
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
  children: React.PropTypes.element
};

export default App;
