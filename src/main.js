import 'babel-core/polyfill';
import 'styles/styles.scss';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { syncReduxAndRouter } from 'redux-simple-router';

import { Root } from 'components/root';
import createStore from './store';


const history = createBrowserHistory();
const store = createStore();

syncReduxAndRouter(history, store);

ReactDOM.render((
  <Root history={history} store={store}/>
), document.getElementById('root'));
