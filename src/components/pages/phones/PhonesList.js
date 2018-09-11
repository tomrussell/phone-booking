import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';

import Phone from './Phone';

const PhonesList = ({ classes, phones }) => (
  <div className={classes.root}>
    <Helmet title='Phone Inventory' />
    {
      phones.map(phone => <Phone key={phone.name} phone={phone} />)
    }
  </div>
);

export default injectSheet(
  () => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '800px',
    },
    card: { marginBottom: '20px' },
  }),
)(PhonesList);
