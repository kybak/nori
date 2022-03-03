import { ApolloServer, gql } from "apollo-server-micro";
import { itemsData } from "../../config";

type CarbonRemoval = {
  id: string,
  project_name: string,
  quantity: number,
  location: string,
  year: number
};

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
    async search(parent, args, context) {
      // Note: would definitely organize this out into separate file

      itemsData.sort(function(a: CarbonRemoval, b: CarbonRemoval) {
        return b.quantity - a.quantity;
      });

      let total: number = 0;
      let orders: Order[] = [];

      for (let item of csvData) {
        // add each item quantity to total until target reached or less than

        if (total < orderQuantity) {
          throw new Error(
            "The total inventory is not sufficient to meet your demand"
          );
        }
      }
      return itemsData;
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
    path: "/api/search"
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false
  }
};
