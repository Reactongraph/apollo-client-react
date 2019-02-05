import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// Create Apollo-Client Object
const url = 'http://localhost:3000/graphql';
const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: url,
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});
const client = new ApolloClient({
  link: httpLink,
  cache,
});

export default client;
