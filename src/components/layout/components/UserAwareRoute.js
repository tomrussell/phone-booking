import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';

const UserAwareRoute = ({
  component: Component,
  isAuthenticated,
  isProtected,
  routes,
  location: { pathname },
  ...props
}) => {
  if (isProtected) {
    return (
      <Route
        {...props}
        render={props => (isAuthenticated ? (
          <Component {...props} routes={routes} />
        ) : (
          <Redirect
            to={{
              pathname: '/oidc/login',
              state: { redirectUrl: pathname },
            }}
          />
        ))}
      />
    );
  }
  return (
    <Route
      {...props}
      render={props => <Component {...props} routes={routes} />}
    />
  );
};

export default withRouter(
  connect(state => (
    { isAuthenticated: state.oidc.user && !state.oidc.user.expired }
  ))(UserAwareRoute)
);
