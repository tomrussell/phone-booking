import { createUserManager } from 'redux-oidc';

const config = {
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_uri: `${window.location.origin}/oidc/callback`,
  response_type: 'id_token token',
  scope: 'openid profile',
  authority: process.env.REACT_APP_AUTHORITY,
  post_logout_redirect_uri: `${window.location.origin}`,
  silent_redirect_uri: `${window.location.origin}/oidc/silent-renew`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
};

export default createUserManager(config);
