import React from 'react';
import injectSheet from 'react-jss';
import { Classes } from '@blueprintjs/core';
import classNames from 'classnames';

const User = ({ classes, user }) => (
  <h4 className={classNames(classes.text, Classes.TEXT_MUTED)}>{user}</h4>
);

export default injectSheet(
  () => ({
    text: {
      paddingLeft: '10px',
      marginBottom: 0,
    },
  }),
)(User);
