import React from 'react';
import injectSheet from 'react-jss';

const MetaData = ({ classes, data }) => (
  <div className={classes.root}>
    <div className={classes.section}>
      <h6>Technology</h6>
      <span>{data.technology}</span>
    </div>
    <div className={classes.section}>
      <h6>2G Bands</h6>
      <span>{data.twoGBands}</span>
    </div>
    <div className={classes.section}>
      <h6>3G Bands</h6>
      <span>{data.threeGBands}</span>
    </div>
    <div className={classes.section}>
      <h6>4G Bands</h6>
      <span>{data.fourGBands}</span>
    </div>
  </div>
);

export default injectSheet(
  () => ({
    root: { padding: '10px' },
    section: { marginBottom: '10px' },
  }),
)(MetaData);
