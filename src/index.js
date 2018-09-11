import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'react-jss';

import client from './data';
import theme from './styles/theme';
import App from './components/App';

import './styles/index.css';


const render = (Component) => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    </ApolloProvider>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
