import { ApolloServer, gql } from "apollo-server-micro";
import { ordersData } from "../../config";

const typeDefs = gql`
  type Query {
    items(id: String): [Item!]!
  }
  type Item {
    transactionId: String
    price: String
    date: String
    buyer: Buyer
  }
  type Buyer {
    name: String
    organization: String
    location: String
  }
`;

const resolvers = {
  Query: {
    async items(parent, args, context) {
      return ordersData;
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
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: "/api/items"
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false
  }
};
