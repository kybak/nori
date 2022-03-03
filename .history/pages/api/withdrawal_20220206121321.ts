import { ApolloServer, gql } from "apollo-server-micro";
import { ethers } from "ethers";

const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type User {
    name: String
  }
`;

const resolvers = {
  Query: {
    users(parent, args, context) {
      const connection = new ethers();
      return [{ name: "Nextjs" }];
    }
  }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  await startServer;
  await apolloServer.createHandler({
    path: "/api/withdrawal"
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false
  }
};