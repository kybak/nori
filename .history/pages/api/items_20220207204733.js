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
    transactionId: String
    price: String
    date: String
  }
  type Buyer {
    name: String
    organization: String
    location: String
  }
`;

const items = [
  {
    transactionId: "98981237981289",
    buyer: {
      name: "John Doe",
      organization: "Organization Name",
      location: "123 Some Address, WA USA"
    },
    price: ".084 ETH",
    date: "3/4/22"
  },
  {
    transactionId: "734728389239834",
    buyer: {
      name: "Jane Doe",
      organization: "Company Name",
      location: "832 Some Other Address, WA USA"
    },
    price: ".084 ETH",
    date: "3/4/22"
  },
  {
    transactionId: "63627272383834",
    buyer: {
      name: "Bob John",
      organization: "Another Organization",
      location: "948 Somewhere, WA USA"
    },
    price: ".084 ETH",
    date: "3/5/22"
  },
  {
    transactionId: "98981237981289",
    buyer: {
      name: "John Doe",
      organization: "Organization Name",
      location: "123 Some Address, WA USA"
    },
    price: ".084 ETH",
    date: "3/4/22"
  },
  {
    transactionId: "734728389239834",
    buyer: {
      name: "Jane Doe",
      organization: "Company Name",
      location: "832 Some Other Address, WA USA"
    },
    price: ".084 ETH",
    date: "3/4/22"
  }
];

const resolvers = {
  Query: {
    async items(parent, args, context) {
      return [
        {
          transactionId: "123",
          price: ".084 ETH",
          date: "3/4/22",
          buyer: {
            name: "Jane Doe",
            organization: "Company Name",
            location: "832 Some Other Address, WA USA"
          }
        }
      ];

      const provider = new ethers.getDefaultProvider(
          "https://polygon-mumbai.g.alchemy.com/v2/CovsWXjKj5tr0B3WHGMCh__1-KtVzfp9"
        ),
        signer = provider.getSigner(0),
        marketContract = new ethers.Contract(marketaddress, Market.abi, signer),
        tokenContract = new ethers.Contract(nrtaddress, NRT.abi, provider);

      const data = await marketContract.fetchItemsCreated();

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
