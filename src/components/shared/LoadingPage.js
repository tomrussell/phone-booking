import React from 'react';
import injectSheet from 'react-jss';

import Loading from './Loading';

const LoadingPage = ({ classes, ...props }) => (
  <div className={classes.root}>
    <Loading {...props} />
  </div>
);

export default injectSheet(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flex: 1,
  },
}))(LoadingPage);
