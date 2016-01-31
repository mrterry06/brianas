import 'styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import { Root } from 'components/root';
import createStore from './store';


ReactDOM.render((
  <Root history={browserHistory} store={createStore()}/>
), document.getElementById('root'));
