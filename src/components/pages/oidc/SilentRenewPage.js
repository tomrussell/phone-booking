import React from 'react';
import { processSilentRenew } from 'redux-oidc';

import LoadingPage from '../../shared/LoadingPage';

class SilentRenewPage extends React.PureComponent {
  componentWillMount() {
    processSilentRenew();
  }

  render() {
    return <LoadingPage loadingText='Refreshing authentication token...' />;
  }
}

export default SilentRenewPage;
