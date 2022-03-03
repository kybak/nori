// import Web3Modal from "web3modal";
import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Mutation {
    search(quantity: Number): Item
  }
  type Item {
    id: String
    project_name: String
    quantity: String
    location: String
    year: Number
  }
`;

const resolvers = {
  Query: {
    async search(parent, args, context) {}
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
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: "/api/search"
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false
  }
};
