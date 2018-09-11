import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';
import { FocusStyleManager } from '@blueprintjs/core';

import Phones from './pages/phones/PhonesPage';

FocusStyleManager.onlyShowFocusOnTabs();

const App = ({ classes }) => (
  <div className={classes.root}>
    <Helmet title='Loading...' titleTemplate='%s | Test Phone Booking' />
    <div className={classes.main}>
      <h1>Test Phone Inventory</h1>
      <Phones />
    </div>
  </div>
);

export default injectSheet(
  theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: theme.background,
    },
    main: {
      width: '800px',
      padding: '40px 0',
      display: 'flex',
      flexDirection: 'column',
    },
  })
)(App);
