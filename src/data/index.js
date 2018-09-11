import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BatchHttpLink } from 'apollo-link-batch-http';

import withAuthentication from './withAuthentication';
import withErrorHandling from './withErrorHandling';

const link = new BatchHttpLink({ uri: '/graphql' });

const client = new ApolloClient({
  link: withAuthentication.concat(withErrorHandling.concat(link)),
  cache: new InMemoryCache(),
  connectToDevTools: true,
  queryDeduplication: true,
});

export default client;
