import { ApolloServer, gql } from "apollo-server-micro";
import { itemsData } from "../../config";

type Order = {
  id: string;
  quantity: number;
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

      // 10

      // 5
      // 4
      // 3
      // 1

      let amountFilled: number = 0;
      let amountNeeded: number = args.quantity;

      for (let item of itemsData) {
        let remaining: number = amountNeeded - amountFilled;

        // base case
        if (remaining === 0) {
          break;
        }

        if (item.quantity <= remaining) {
          amountFilled += item.quantity;
          // add item quantity to order
        } else {
          amountFilled += remaining;
          // add remaining as qty to order
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
