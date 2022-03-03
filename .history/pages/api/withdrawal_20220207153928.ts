import { ApolloServer, gql } from "apollo-server-micro";
import { ethers } from "ethers";
require("dotenv").config();
import axios from "axios";
import Web3Modal from "web3modal";
import { marketaddress, nrtaddress } from "../../config";
import Market from "../../artifacts/contracts/Market.sol/Market.json";
import NRT from "../../artifacts/contracts/NRT.sol/NRT.json";

const { API_URL, PRIVATE_KEY } = process.env;

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
    async users(parent, args, context) {
      const web3Modal = new Web3Modal({
          network: "mainnet",
          cacheProvider: true
        }),
        connection = await web3Modal.connect(),
        provider = new ethers.providers.Web3Provider(connection),
        signer = provider.getSigner(),
        marketContract = new ethers.Contract(marketaddress, Market.abi, signer),
        tokenContract = new ethers.Contract(nrtaddress, NRT.abi, provider),
        data = await marketContract.fetchItemsCreated();

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

      return [{ items }];
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
