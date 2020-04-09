import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import gql from "graphql-tag";
const link = createHttpLink({ uri: "http://localhost:4000/graphql" });

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

// GQL
export const TRY_LOGIN = gql`
  mutation logIn($email: String, $password: String) {
    logIn(email: $email, password: $password) {
      name
    }
  }
`;
