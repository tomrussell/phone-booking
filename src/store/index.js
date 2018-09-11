import { createStore } from 'redux';

import reducers from './reducers';

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers'); // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
