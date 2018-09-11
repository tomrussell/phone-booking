import React from 'react';
import injectSheet from 'react-jss';
import { Classes } from '@blueprintjs/core';
import moment from 'moment';

const BookedDate = ({ classes, date }) => (
  <div className={classes.root}>
    <h6>Booked On:</h6>
    <span className={Classes.TEXT_MUTED}>{moment(date).format('LLL')}</span>
  </div>
);

export default injectSheet(
  () => ({ root: { padding: '10px' } }),
)(BookedDate);
