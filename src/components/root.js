import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { IndexRoute, Route, Router } from 'react-router';

// components
import { App } from './app/app';
import Counter from './counter/counter';
import { Home } from './home/home';


export function Root({history, store}) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route component={App} path="/">
          <IndexRoute component={Home}/>
          <Route component={Counter} path="/counter"/>
        </Route>
      </Router>
    </Provider>
  );
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};
