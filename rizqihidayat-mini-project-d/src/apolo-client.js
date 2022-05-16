import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://evolving-cow-65.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret": "6nvXZ61OJgkrsqefNl0N0pDo7xvlWxkHqEyd1upCEXrfpXbaZnJuorsbD2QDb79n"
    }
  });

export default client 
  