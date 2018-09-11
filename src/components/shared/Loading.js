import React from 'react';
import { NonIdealState, Spinner } from '@blueprintjs/core';

const Loading = ({ loadingText }) => (
  <NonIdealState visual={<Spinner />} description={loadingText} />
);

export default Loading;
