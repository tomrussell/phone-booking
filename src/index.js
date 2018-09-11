import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { OidcProvider } from 'redux-oidc';
import { ThemeProvider } from 'react-jss';
import { createBrowserHistory } from 'history';

import client from './data';
import configureStore from './store';
import userManager from './oidc/userManager';
import theme from './styles/theme';
import App from './components/App';

import './styles/index.css';

const store = configureStore();
const history = createBrowserHistory();

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <OidcProvider store={store} userManager={userManager}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <Router history={history}>
              <Component />
            </Router>
          </ThemeProvider>
        </ApolloProvider>
      </OidcProvider>
    </Provider>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
