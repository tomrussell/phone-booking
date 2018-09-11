import React from 'react';

import userManager from '../../../oidc/userManager';
import LoadingPage from '../../shared/LoadingPage';

class LogoutPage extends React.PureComponent {
  componentWillMount() {
    userManager.signoutRedirect();
  }

  render() {
    return <LoadingPage loadingText='Logging out, please wait...' />;
  }
}

export default LogoutPage;
