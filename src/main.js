import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';

import { browserHistory } from './core/history';
import { configureStore } from './core/store';
import { Root } from './components/root';
import './styles/styles.scss';


const store = configureStore({}, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render((
  <Root history={history} store={store} />
), document.getElementById('root'));
