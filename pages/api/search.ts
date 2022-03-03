import { ApolloServer, gql } from "apollo-server-micro";
import { itemsData } from "../../config";

const typeDefs = gql`
  type Query {
    search(quantity: Float): [Result!]!
  }
  type Result {
    id: String
    quantity: Float
  }
`;

const resolvers = {
  Query: {
    async search(parent, args, context) {
      // Note: would definitely organize this out into separate file

      // Start of quantity search algo
      // Uses a greedy approach, incrementing amountFilled until amountNeeded - amountFilled is 0

      // Sorting may not be necessary, especially with a FIFO approach but this way we return the least amount of items
      itemsData.sort(function(a: CarbonRemoval, b: CarbonRemoval) {
        return b.quantity - a.quantity;
      });

      let results: Result[] = [];

      let amountFilled: number = 0;
      let amountNeeded: number = args.quantity;

      for (let item of itemsData) {
        let remaining: number = amountNeeded - amountFilled; // used to determine how much more we need

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
