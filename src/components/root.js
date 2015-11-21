import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { IndexRoute, Route, Router } from 'react-router';

// Components
import { App } from './app/app';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { Users } from './users/users';


export class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };

  render() {
    const { history, store } = this.props;

    return (
      <Provider store={store}>
        <Router history={history}>
          <Route component={App} path="/">
            <IndexRoute component={Home}/>
            <Route component={Projects} path="/projects"/>
            <Route component={Users} path="/users"/>
          </Route>
        </Router>
      </Provider>
    );
  }
}
