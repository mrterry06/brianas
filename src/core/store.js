import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';


export function configureStore(initialState = {}) {
  const middleware = applyMiddleware(
    routerMiddleware(browserHistory),
    thunk
  );

  let finalCreateStore;

  if (process.env.NODE_ENV !== 'production') {
    // configure redex-devtools-extension for Chrome
    const devToolsConfig = {
      actionsBlacklist: []
    };

    finalCreateStore = compose(
      middleware,
      window.devToolsExtension ? window.devToolsExtension(devToolsConfig) : f => f
    )(createStore);
  }
  else {
    finalCreateStore = middleware(createStore);
  }

  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(require('./reducer').default);
    });
  }

  return store;
}
