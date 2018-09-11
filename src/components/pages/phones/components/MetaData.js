import React from 'react';
import injectSheet from 'react-jss';

import MetaDataValue from './MetaDataValue';

const MetaData = ({ classes, data }) => (
  <div className={classes.root}>
    <div className={classes.section}>
      <h6>Technology</h6>
      <MetaDataValue value={data.technology} />
    </div>
    <div className={classes.section}>
      <h6>2G Bands</h6>
      <MetaDataValue value={data.twoGBands} />
    </div>
    <div className={classes.section}>
      <h6>3G Bands</h6>
      <MetaDataValue value={data.threeGBands} />
    </div>
    <div className={classes.section}>
      <h6>4G Bands</h6>
      <MetaDataValue value={data.fourGBands} />
    </div>
  </div>
);

export default injectSheet(
  () => ({
    root: { padding: '10px' },
    section: { marginBottom: '10px' },
  }),
)(MetaData);
