import React from 'react';
import injectSheet from 'react-jss';

const MainContainer = ({ classes, children }) => (
  <main className={classes.root}>{children}</main>
);

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
});

export default injectSheet(styles)(MainContainer);
