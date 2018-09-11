import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';

import Header from './layout/components/Header';
import routes from './layout/routes';
import UserAwareRoute from './layout/components/UserAwareRoute';

const App = ({ classes }) => (
  <div className={classes.root}>
    <Helmet title='Loading...' titleTemplate='%s | Arizona' />
    <Header />
    {
      routes.map(route => <UserAwareRoute key={route.path} {...route} />)
    }
  </div>
);

export default injectSheet(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
}))(App);
