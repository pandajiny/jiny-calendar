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
export const REQUST_LOGIN = gql`
  mutation requestLogin($email: String, $password: String) {
    requestLogin(email: $email, password: $password) {
      user {
        name
        email
      }
    }
  }
`;
