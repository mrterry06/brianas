import 'babel-core/polyfill';
import 'styles/styles.scss';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import thunk from 'redux-thunk';

// Components
import { Root } from 'components/root';

// Modules
import reducer from 'modules/reducers';


const history = createBrowserHistory();


const store = compose(
  applyMiddleware(thunk)
)(createStore)(reducer);


if (module.hot) {
  module.hot.accept('./modules/reducers', () => {
    store.replaceReducer(require('./modules/reducers'));
  });
}


syncReduxAndRouter(history, store);


ReactDOM.render((
  <Root history={history} store={store}/>
), document.getElementById('root'));
