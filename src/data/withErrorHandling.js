/* eslint-disable no-console */
/* eslint-disable max-len */
import { onError } from 'apollo-link-error';
import { errorToaster } from '../components/shared/Toaster';

const withErrorHandling = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => (
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    ));
    graphQLErrors.forEach(({ message }) => errorToaster(message));
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    errorToaster(networkError.message);
  }
});

export default withErrorHandling;
