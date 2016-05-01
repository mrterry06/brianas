import React from 'react';
import { Provider } from 'react-redux';

import {
  findRenderedComponentWithType,
  renderIntoDocument
} from 'react-addons-test-utils';


export function createConnectedTestComponent(ConnectedTestComponent, TestComponent, store, props) {
  const renderedComponent = renderIntoDocument(
    <Provider store={store}>
      <ConnectedTestComponent {...props} />
    </Provider>
  );

  return findRenderedComponentWithType(renderedComponent, TestComponent);
}
