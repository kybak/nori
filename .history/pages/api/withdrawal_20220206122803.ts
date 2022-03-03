import { ApolloServer, gql } from "apollo-server-micro";
import { ethers } from "ethers";
require("dotenv").config();

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
      const connection = new ethers.providers.JsonRpcProvider(API_URL),
        gasPrice = connection.getGasPrice(),
        wallet = new ethers.Wallet(PRIVATE_KEY),
        signer = wallet.connect(connection),
        recipient = "0x8F25689155B8658aA2d9f885F510D9a54Eb790a7",
        tx = {
          from: wallet.address,
          to: recipient,
          value: ethers.utils.parseUnits("0.001", "wei"),
          gasPrice,
          gasLimit: ethers.utils.hexlify(100000),
          nonce: connection.getTransactionCount(wallet.address, "latest")
        },
        transaction = await signer.sendTransaction(tx);
      console.log(transaction);

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
