import React from 'react';
import { CallbackComponent } from 'redux-oidc';
import { withRouter } from 'react-router-dom';

import userManager from '../../../oidc/userManager';
import LoadingPage from '../../shared/LoadingPage';

class CallbackPage extends React.PureComponent {
  successCallback = (user) => {
    const { history } = this.props;
    if (user.state && user.state.redirectUrl) {
      history.push(user.state.redirectUrl);
    } else {
      history.push('/');
    }
  };

  render() {
    return (
      <CallbackComponent
        userManager={userManager}
        successCallback={this.successCallback}
      >
        <LoadingPage loadingText='Please wait...' />
      </CallbackComponent>
    );
  }
}

export default withRouter(CallbackPage);
