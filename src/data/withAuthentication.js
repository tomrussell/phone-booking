import { setContext } from 'apollo-link-context';
import userManager from '../oidc/userManager';

const getAuthorizationToken = () => userManager.getUser()
  .then((user) => {
    if (user && user.access_token) {
      return `Bearer ${user.access_token}`;
    }
    return null;
  });

const withAuthentication = setContext(() => getAuthorizationToken()
  .then(token => (
    { headers: { Authorization: token } }
  )));

export default withAuthentication;
