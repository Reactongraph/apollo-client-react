import { gql } from "apollo-boost";
import client from "./ApolloClient";

export default async (query, variables) =>
  client.query({
    query: gql`
      ${query}
    `,
    variables
  });
