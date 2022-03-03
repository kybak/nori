import { ApolloServer, gql } from "apollo-server-micro";
import { itemsData } from "../../config";

// I'm sure there's a way to write this once between gql and ts and would love to explore this further!
type Result = {
  id: string;
  quantity: number;
};

const typeDefs = gql`
  type Query {
    search(quantity: Int): Result
  }
  type Result {
    id: String
    quantity: String
  }
`;

const resolvers = {
  Query: {
    async search(parent, args, context) {
      // Note: would definitely organize this out into separate file

      itemsData.sort(function(a: CarbonRemoval, b: CarbonRemoval) {
        return b.quantity - a.quantity;
      });

      let results: Result[] = [];

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
          results.push({ id: item.id, quantity: item.quantity });
        } else {
          amountFilled += remaining;

          // add remaining as qty to order
          results.push({ id: item.id, quantity: remaining });
        }
      }

      return results;
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
