import React from 'react';
import { withRouter } from 'react-router-dom';

import userManager from '../../../oidc/userManager';
import LoadingPage from '../../shared/LoadingPage';

class LoginPage extends React.PureComponent {
  componentWillMount() {
    const { location: { state } } = this.props;
    userManager.signinRedirect({ state });
  }

  render() {
    return <LoadingPage loadingText='Redirecting to login provider...' />;
  }
}

export default withRouter(LoginPage);
