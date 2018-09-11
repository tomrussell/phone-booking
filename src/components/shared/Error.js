import React from 'react';
import { NonIdealState } from '@blueprintjs/core';

const Error = ({ errorText }) => (
  <NonIdealState icon='error' title='Error' description={errorText} />
);

export default Error;
