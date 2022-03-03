import { ApolloServer, gql } from "apollo-server-micro";
import { ethers } from "ethers";
import axios from "axios";
import Web3Modal from "web3modal";
import { marketaddress, nrtaddress } from "../../config";
import Market from "../../artifacts/contracts/Market.sol/Market.json";
import NRT from "../../artifacts/contracts/NRT.sol/NRT.json";

const typeDefs = gql`
  type Query {
    items: [Item!]!
  }
  type Item {
    price: Int
    tokenId: String
    owner: String
    seller: String
    image: String
  }
`;

const resolvers = {
  Query: {
    async items(parent, args, context) {
      console.log("FETCHING BLOCKCHAIN ITEMS");
      const provider = new ethers.getDefaultProvider(
          "https://polygon-mumbai.g.alchemy.com/v2/CovsWXjKj5tr0B3WHGMCh__1-KtVzfp9"
        ),
        signer = provider.getSigner(),
        marketContract = new ethers.Contract(marketaddress, Market.abi, signer),
        tokenContract = new ethers.Contract(nrtaddress, NRT.abi, provider);

      const data = await marketContract.fetchItemsCreated();
      console.log("--->", data);

      const items = await Promise.all(
        data.map(async i => {
          const tokenUri = await tokenContract.tokenURI(i.tokenId);
          const meta = await axios.get(tokenUri);
          let price = ethers.utils.formatUnits(i.price.toString(), "ether");
          let item = {
            price,
            tokenId: i.tokenId.toNumber(),
            seller: i.seller,
            owner: i.owner,
            sold: i.sold,
            image: meta.data.image
          };
          return item;
        })
      );
      return [{ tokenId: "123" }];
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
