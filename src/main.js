import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'styles/styles.scss';
import { Root } from 'components/root';
import configureStore from './store';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render((
  <Root history={history} store={store}/>
), document.getElementById('root'));
