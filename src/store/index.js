import { createStore } from 'redux';
import { loadUser } from 'redux-oidc';

import userManager from '../oidc/userManager';
import reducers from './reducers';

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers'); // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  // Load the user from OIDC
  loadUser(store, userManager);

  return store;
}
