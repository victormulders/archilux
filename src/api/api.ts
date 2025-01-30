import { GraphQLClient } from "graphql-request";

const getEndpoints = (): string =>
  process.env.NEXT_PUBLIC_CLIENT_GRAPHQL_ENDPOINT ?? "";

export const client = new GraphQLClient(getEndpoints());
