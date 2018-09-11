import React from 'react';
import injectSheet from 'react-jss';
import classnames from 'classnames';

const MetaDataValue = ({ classes, value }) => (
  <span
    className={
      classnames(!value && classes.notAvailable)
    }
  >
    { value || 'Not Applicable' }
  </span>
);

export default injectSheet(
  theme => ({
    notAvailable: {
      color: theme.mutedText,
      fontStyle: 'italic',
    },
  }),
)(MetaDataValue);
