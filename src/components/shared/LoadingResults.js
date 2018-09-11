import React from 'react';

import Loading from './Loading';
import Error from './Error';

const LoadingResults = ({
  loading,
  error,
  loadingText,
  children,
  ...props
}) => {
  if (loading) {
    return <Loading {...props} loadingText={loadingText || 'Please wait' } />;
  }
  if (error) return <Error />;
  return children;
};

export default LoadingResults;
