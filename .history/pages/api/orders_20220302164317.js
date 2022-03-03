import { ApolloServer, gql } from "apollo-server-micro";
import { ethers } from "ethers";
import axios from "axios";
import { marketaddress, nrtaddress } from "../../config";
import Market from "../../artifacts/contracts/Market.sol/Market.json";
import NRT from "../../artifacts/contracts/NRT.sol/NRT.json";
import { ordersData } from "../../config";

const typeDefs = gql`
  type Query {
    orders: [Order!]!
  }
  type Order {
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
    async orders(parent, args, context) {
      return ordersData;

      // This fetches orders from Polygon but I'm just returning hardcoded data for now
      const provider = new ethers.getDefaultProvider(
          "https://polygon-mumbai.g.alchemy.com/v2/CovsWXjKj5tr0B3WHGMCh__1-KtVzfp9"
        ),
        signer = provider.getSigner(0),
        marketContract = new ethers.Contract(marketaddress, Market.abi, signer),
        tokenContract = new ethers.Contract(nrtaddress, NRT.abi, provider);

      const data = await marketContract.fetchItemsCreated();

      const orders = await Promise.all(
        data.map(async i => {
          const tokenUri = await tokenContract.tokenURI(i.tokenId);
          const meta = await axios.get(tokenUri);
          let price = ethers.utils.formatUnits(i.price.toString(), "ether");
          let order = {
            price,
            tokenId: i.tokenId.toNumber(),
            seller: i.seller,
            owner: i.owner,
            sold: i.sold,
            image: meta.data.image
          };
          return order;
        })
      );

      return orders;
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
    path: "/api/orders"
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false
  }
};
