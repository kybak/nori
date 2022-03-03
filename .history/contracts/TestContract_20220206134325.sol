288

110

450

Cover image for Building a Full Stack NFT Marketplace on Ethereum with Polygon
Nader Dabit
Nader Dabit
Posted on Jul 6, 2021 • Updated on Jan 23

Building a Full Stack NFT Marketplace on Ethereum with Polygon
#
webdev
#
react
#
blockchain
#
ethereum
Building a digital marketplace with Polygon, Next.js, Tailwind, Solidity, Hardhat, Ethers.js, and IPFS
To view the video course for this tutorial, click here

In my last end to end Ethereum tutorial, The Complete Guide to Full Stack Ethereum Development I introduced how to build a basic app on Ethereum using modern tooling like Hardhat and Ethers.js.

In this guide you'll learn how to build, deploy, and test out a full stack NFT marketplace on Ethereum. We'll also look at how to deploy to Polygon.

One thing that has become apparent over the past few months is how quickly Ethereum scaling solutions like Polygon, Arbitrum, and Optimism are gaining momentum and adoption. These technologies enable developers to build the same applications they would directly on Ethereum with the added benefits of lower gas costs and faster transaction speeds among other things.

Because of the value proposition that these solutions offer combined with the general lack of existing content, I will be building out various example projects and tutorials for full stack applications using these various Ethereum scaling solutions, starting with this one on Polygon.

To view the final source code for this project, visit this repo

Prerequisites
To be successful in this guide, you must have the following:

Node.js installed on your machine
Metamask wallet extension installed as a browser extension
The stack
In this guide, we will build out a full stack application using:

Web application framework - Next.js
Solidity development environment - Hardhat
File Storage - IPFS
Ethereum Web Client Library - Ethers.js

Though it will not be part of this guide (coming in a separate post), we will look at how to build a more robust API layer using The Graph Protocol to get around limitations in the data access patterns provided by the native blockchain layer.

About the project
The project that we will be building will be Metaverse Marketplace - a digital marketplace.

Metaverse Marketplace

When a user puts an item for sale, the ownership of the item will be transferred from the creator to the marketplace.

When a user purchases an item, the purchase price will be transferred from the buyer to the seller and the item will be transferred from the marketplace to the buyer.

The marketplace owner will be able to set a listing fee. This fee will be taken from the seller and transferred to the contract owner upon completion of any sale, enabling the owner of the marketplace to earn recurring revenue from any sale transacted in the marketplace.

The marketplace logic will consist of two smart contracts:

NFT Contract - This contract allows users to mint unique digital assets.

Marketplace Contract - This contract allows users to put their digital assets for sale on an open market.

I believe this is a good project because the tools, techniques, and ideas we will be working with lay the foundation for many other types of applications on this stack – dealing with things like payments, commissions, and transfers of ownership on the contract level as well as how a client-side application would use this smart contract to build a performant and nice-looking user interface.

In addition to the smart contract, I'll also show you how to build a subgraph to make the querying of data from the smart contract more flexible and efficient. As you will see, creating views on data sets and enabling various and performant data access patterns is hard to do directly from a smart contract. The Graph makes this much easier.

About Polygon
From the docs:

"Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. Aggregating scalable solutions on Ethereum supporting a multi-chain Ethereum ecosystem."

Polygon is about 10x faster than Ethereum & yet transactions are more than 10x cheaper.

Ok cool, but what does all that mean?

To me it means that I can use the same knowledge, tools, and technologies I have been using to build apps on Ethereum to build apps that are faster and cheaper for users, providing not only a better user experience but also opening the door for many types of applications that just would not be feasible to be built directly on Ethereum.

As mentioned before, there are many other Ethereum scaling solutions such as Arbitrumand Optimism that are also in a similar space. Most of these scaling solutions have technical differences and fall into various categories like sidechains , layer 2s, and state channels.

Polygon recently rebranded from Matic so you will also see the word Matic used interchangeably when referring to various parts of their ecosystem because the name still is being used in various places, like their token and network names.

To learn more about Polygon, check out this post as well as their documentation here.

Now that we have an overview of the project and related technologies, let's start building!

Project setup
To get started, we'll create a new Next.js app. To do so, open your terminal. Create or change into a new empty directory and run the following command:
npx create-next-app digital-marketplace
Next, change into the new directory and install the dependencies:
cd digital-marketplace

npm install ethers hardhat @nomiclabs/hardhat-waffle \
ethereum-waffle chai @nomiclabs/hardhat-ethers \
web3modal @openzeppelin/contracts ipfs-http-client@50.1.2 \
axios
Setting up Tailwind CSS
We'll be using Tailwind CSS for styling, we we will set that up in this step.

Tailwind is a utility-first CSS framework that makes it easy to add styling and create good looking websites without a lot of work.

Next, install the Tailwind dependencies:
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
Next, we will create the configuration files needed for Tailwind to work with Next.js (tailwind.config.js and postcss.config.js) by running the following command:
npx tailwindcss init -p
Next, configure your template content paths in tailwind.config.js:
/* tailwind.config.js */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Finally, delete the code in styles/globals.css and update it with the following:
@tailwind base;
@tailwind components;
@tailwind utilities;
Configuring Hardhat
Next, initialize a new Hardhat development environment from the root of your project:
npx hardhat

? What do you want to do? Create a sample project
? Hardhat project root: <Choose default path>
Now you should see the following files and folders created for you in your root directory:

hardhat.config.js - The entirety of your Hardhat setup (i.e. your config, plugins, and custom tasks) is contained in this file.
scripts - A folder containing a script named sample-script.js that will deploy your smart contract when executed
test - A folder containing an example testing script
contracts - A folder holding an example Solidity smart contract

Next, update the configuration at hardhat.config.js with the following:

View the gist here
/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
//  mumbai: {
//    url: "https://rpc-mumbai.maticvigil.com",
//    accounts: [privateKey]
//  }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
In this configuration, we've configured the local Hardhat development environment as well as the Mumbai testnet.

You can read more about both Matic networks here.

Next, create a file named .secret at the root of your project. For now, we will leave this file empty. Later on, we will populate it with a test wallet private key that will hold some Matic tokens that we will get from the Matic testnet faucet.

Be sure to never commit any private keys to Git. To be extra safe, consider storing these values in temporary environment variables when working with wallets that contain real tokens. To omit from Git, add .secret to your .gitignore file.

Smart Contracts
Next, we'll create our smart contracts! We'll start with the NFT contract for the unique digital assets.

Create a new file in the contracts directory named NFT.sol. Here, add the following code:

View the gist here
// contracts/NFT.sol
// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address contractAddress;

    constructor(address marketplaceAddress) ERC721("Metaverse Tokens", "METT") {
        contractAddress = marketplaceAddress;
    }

    function createToken(string memory tokenURI) public returns (uint) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(contractAddress, true);
        return newItemId;
    }
}
This is a pretty straightforward NFT smart contract that allows users to mint unique digital assets and have ownership of them.

In this contract we are inheriting from the ERC721 standard implemented by OpenZepplin

Next, we'll create the contract for the Marketplace. This is a much larger smart contract. I've done my best to document what each function is doing.

Create a new file in the contracts directory named Market.sol:

View the gist here
// contracts/Market.sol
// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFTMarket is ReentrancyGuard {
  using Counters for Counters.Counter;
  Counters.Counter private _itemIds;
  Counters.Counter private _itemsSold;

  address payable owner;
  uint256 listingPrice = 0.025 ether;

  constructor() {
    owner = payable(msg.sender);
  }

  struct MarketItem {
    uint itemId;
    address nftContract;
    uint256 tokenId;
    address payable seller;
    address payable owner;
    uint256 price;
    bool sold;
  }

  mapping(uint256 => MarketItem) private idToMarketItem;

  event MarketItemCreated (
    uint indexed itemId,
    address indexed nftContract,
    uint256 indexed tokenId,
    address seller,
    address owner,
    uint256 price,
    bool sold
  );

  /* Returns the listing price of the contract */
  function getListingPrice() public view returns (uint256) {
    return listingPrice;
  }

  /* Places an item for sale on the marketplace */
  function createMarketItem(
    address nftContract,
    uint256 tokenId,
    uint256 price
  ) public payable nonReentrant {
    require(price > 0, "Price must be at least 1 wei");
    require(msg.value == listingPrice, "Price must be equal to listing price");

    _itemIds.increment();
    uint256 itemId = _itemIds.current();

    idToMarketItem[itemId] =  MarketItem(
      itemId,
      nftContract,
      tokenId,
      payable(msg.sender),
      payable(address(0)),
      price,
      false
    );

    IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

    emit MarketItemCreated(
      itemId,
      nftContract,
      tokenId,
      msg.sender,
      address(0),
      price,
      false
    );
  }

  /* Creates the sale of a marketplace item */
  /* Transfers ownership of the item, as well as funds between parties */
  function createMarketSale(
    address nftContract,
    uint256 itemId
    ) public payable nonReentrant {
    uint price = idToMarketItem[itemId].price;
    uint tokenId = idToMarketItem[itemId].tokenId;
    require(msg.value == price, "Please submit the asking price in order to complete the purchase");

    idToMarketItem[itemId].seller.transfer(msg.value);
    IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);
    idToMarketItem[itemId].owner = payable(msg.sender);
    idToMarketItem[itemId].sold = true;
    _itemsSold.increment();
    payable(owner).transfer(listingPrice);
  }

  /* Returns all unsold market items */
  function fetchMarketItems() public view returns (MarketItem[] memory) {
    uint itemCount = _itemIds.current();
    uint unsoldItemCount = _itemIds.current() - _itemsSold.current();
    uint currentIndex = 0;

    MarketItem[] memory items = new MarketItem[](unsoldItemCount);
    for (uint i = 0; i < itemCount; i++) {
      if (idToMarketItem[i + 1].owner == address(0)) {
        uint currentId = i + 1;
        MarketItem storage currentItem = idToMarketItem[currentId];
        items[currentIndex] = currentItem;
        currentIndex += 1;
      }
    }
    return items;
  }

  /* Returns only items that a user has purchased */
  function fetchMyNFTs() public view returns (MarketItem[] memory) {
    uint totalItemCount = _itemIds.current();
    uint itemCount = 0;
    uint currentIndex = 0;

    for (uint i = 0; i < totalItemCount; i++) {
      if (idToMarketItem[i + 1].owner == msg.sender) {
        itemCount += 1;
      }
    }

    MarketItem[] memory items = new MarketItem[](itemCount);
    for (uint i = 0; i < totalItemCount; i++) {
      if (idToMarketItem[i + 1].owner == msg.sender) {
        uint currentId = i + 1;
        MarketItem storage currentItem = idToMarketItem[currentId];
        items[currentIndex] = currentItem;
        currentIndex += 1;
      }
    }
    return items;
  }

  /* Returns only items a user has created */
  function fetchItemsCreated() public view returns (MarketItem[] memory) {
    uint totalItemCount = _itemIds.current();
    uint itemCount = 0;
    uint currentIndex = 0;

    for (uint i = 0; i < totalItemCount; i++) {
      if (idToMarketItem[i + 1].seller == msg.sender) {
        itemCount += 1;
      }
    }

    MarketItem[] memory items = new MarketItem[](itemCount);
    for (uint i = 0; i < totalItemCount; i++) {
      if (idToMarketItem[i + 1].seller == msg.sender) {
        uint currentId = i + 1;
        MarketItem storage currentItem = idToMarketItem[currentId];
        items[currentIndex] = currentItem;
        currentIndex += 1;
      }
    }
    return items;
  }
}
Now the smart contract code and environment is complete and we can try testing it out.

To do so, we can create a local test to run through much of the functionality, like minting a token, putting it up for sale, selling it to a user, and querying for tokens.

To create the test, open test/sample-test.js and update it with the following code:

View the gist here
/* test/sample-test.js */
describe("NFTMarket", function() {
  it("Should create and execute market sales", async function() {
    /* deploy the marketplace */
    const Market = await ethers.getContractFactory("NFTMarket")
    const market = await Market.deploy()
    await market.deployed()
    const marketAddress = market.address

    /* deploy the NFT contract */
    const NFT = await ethers.getContractFactory("NFT")
    const nft = await NFT.deploy(marketAddress)
    await nft.deployed()
    const nftContractAddress = nft.address

    let listingPrice = await market.getListingPrice()
    listingPrice = listingPrice.toString()

    const auctionPrice = ethers.utils.parseUnits('1', 'ether')

    /* create two tokens */
    await nft.createToken("https://www.mytokenlocation.com")
    await nft.createToken("https://www.mytokenlocation2.com")

    /* put both tokens for sale */
    await market.createMarketItem(nftContractAddress, 1, auctionPrice, { value: listingPrice })
    await market.createMarketItem(nftContractAddress, 2, auctionPrice, { value: listingPrice })

    const [_, buyerAddress] = await ethers.getSigners()

    /* execute sale of token to another user */
    await market.connect(buyerAddress).createMarketSale(nftContractAddress, 1, { value: auctionPrice})

    /* query for and return the unsold items */
    items = await market.fetchMarketItems()
    items = await Promise.all(items.map(async i => {
      const tokenUri = await nft.tokenURI(i.tokenId)
      let item = {
        price: i.price.toString(),
        tokenId: i.tokenId.toString(),
        seller: i.seller,
        owner: i.owner,
        tokenUri
      }
      return item
    }))
    console.log('items: ', items)
  })
})
To run the test, run npx hardhat test from your command line:

Running the test

If the test runs successfully, it should log out an array containing a single marketplace item.

Building the front end
Now that the smart contract is working and ready to go, we can start building out the UI.

The first thing we might think about is setting up a layout so that we can enable some navigation that will persist across all pages.

To set this up, open pages/_app.js and update it with the following code:

View the gist here
/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Metaverse Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-pink-500">
              Sell Digital Asset
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500">
              My Digital Assets
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-pink-500">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
The navigation has links for the home route as well as a page to sell a digital asset, view the assets you have purchased, and a creator dashboard to see the assets you've created as well as the assets you've sold.

Querying the contract for marketplace items
The next page we'll update is pages/index.js. This is the main entry-point of the app, and will be the view where we query for the digital assets for sale and render them to the screen.

View the gist here
/* pages/index.js */
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

import {
  nftaddress, nftmarketaddress
} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'

export default function Home() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
  }, [])
  async function loadNFTs() {
    /* create a generic provider and query for unsold market items */
    const provider = new ethers.providers.JsonRpcProvider()
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider)
    const data = await marketContract.fetchMarketItems()

    /*
    *  map over items returned from smart contract and format 
    *  them as well as fetch their token metadata
    */
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
      }
      return item
    }))
    setNfts(items)
    setLoadingState('loaded') 
  }
  async function buyNft(nft) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')   
    const transaction = await contract.createMarketSale(nftaddress, nft.tokenId, {
      value: price
    })
    await transaction.wait()
    loadNFTs()
  }
  if (loadingState === 'loaded' && !nfts.length) return (<h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>)
  return (
    <div className="flex justify-center">
      <div className="px-4" style={{ maxWidth: '1600px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
            nfts.map((nft, i) => (
              <div key={i} className="border shadow rounded-xl overflow-hidden">
                <img src={nft.image} />
                <div className="p-4">
                  <p style={{ height: '64px' }} className="text-2xl font-semibold">{nft.name}</p>
                  <div style={{ height: '70px', overflow: 'hidden' }}>
                    <p className="text-gray-400">{nft.description}</p>
                  </div>
                </div>
                <div className="p-4 bg-black">
                  <p className="text-2xl mb-4 font-bold text-white">{nft.price} ETH</p>
                  <button className="w-full bg-pink-500 text-white font-bold py-2 px-12 rounded" onClick={() => buyNft(nft)}>Buy</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
When the page loads, we query the smart contract for any items that are still for sale and render them to the screen along with metadata about the items and a button for purchasing them.

Creating and listing digital items
Next, let's create the page that allows users to create and list digital assets.

There are a few things happening in this page:

The user is able to upload and save files to IPFS
The user is able to create a new unique digital item (NFT)
The user is able to set metadata and price of item and list it for sale on the marketplace
After the user creates and lists an item, they are re-routed to the main page to view all of the items for sale.

View the gist here
/* pages/create-item.js */
import { useState } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

import {
  nftaddress, nftmarketaddress
} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'

export default function CreateItem() {
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
  const router = useRouter()

  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  async function createMarket() {
    const { name, description, price } = formInput
    if (!name || !description || !price || !fileUrl) return
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name, description, image: fileUrl
    })
    try {
      const added = await client.add(data)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
      createSale(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }

  async function createSale(url) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)    
    const signer = provider.getSigner()

    /* next, create the item */
    let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
    let transaction = await contract.createToken(url)
    let tx = await transaction.wait()
    let event = tx.events[0]
    let value = event.args[2]
    let tokenId = value.toNumber()
    const price = ethers.utils.parseUnits(formInput.price, 'ether')

    /* then list the item for sale on the marketplace */
    contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    let listingPrice = await contract.getListingPrice()
    listingPrice = listingPrice.toString()

    transaction = await contract.createMarketItem(nftaddress, tokenId, price, { value: listingPrice })
    await transaction.wait()
    router.push('/')
  }

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <input 
          placeholder="Asset Name"
          className="mt-8 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
        />
        <textarea
          placeholder="Asset Description"
          className="mt-2 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
        />
        <input
          placeholder="Asset Price in Eth"
          className="mt-2 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
        />
        <input
          type="file"
          name="Asset"
          className="my-4"
          onChange={onChange}
        />
        {
          fileUrl && (
            <img className="rounded mt-4" width="350" src={fileUrl} />
          )
        }
        <button onClick={createMarket} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
          Create Digital Asset
        </button>
      </div>
    </div>
  )
}
Viewing only the items purchased by the user
In the Market.sol smart contract, we created a function named fetchMyNFTs that only returns the items owned by the user.

In pages/my-assets.js, we will use that function to fetch and render them.

This functionality is different than the query main pages/index.js page because we need to ask the user for their address and use it in the contract, so the user will have to sign the transaction for it to be able to fetch them properly.

View the gist here
/* pages/my-assets.js */
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

import {
  nftmarketaddress, nftaddress
} from '../config'

import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'

export default function MyAssets() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
  }, [])
  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const data = await marketContract.fetchMyNFTs()

    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
      }
      return item
    }))
    setNfts(items)
    setLoadingState('loaded') 
  }
  if (loadingState === 'loaded' && !nfts.length) return (<h1 className="py-10 px-20 text-3xl">No assets owned</h1>)
  return (
    <div className="flex justify-center">
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
            nfts.map((nft, i) => (
              <div key={i} className="border shadow rounded-xl overflow-hidden">
                <img src={nft.image} className="rounded" />
                <div className="p-4 bg-black">
                  <p className="text-2xl font-bold text-white">Price - {nft.price} Eth</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
Creator dashboard
The final page we will be creating is the creator dashboard that will allow them to view both all of the items they have created as well as the items they have sold.

This page will be using the fetchItemsCreated function from the Market.sol smart contract which returns only the items that match the address of the user making the function call.

On the client, we use the sold boolean to filter the items into another separate array to show the user only the items that have been sold.

Create a new file called creator-dashboard.js in the pages directory with the following code:

View the gist here
/* pages/creator-dashboard.js */
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

import {
  nftmarketaddress, nftaddress
} from '../config'

import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'

export default function CreatorDashboard() {
  const [nfts, setNfts] = useState([])
  const [sold, setSold] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
  }, [])
  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    })
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const data = await marketContract.fetchItemsCreated()

    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        sold: i.sold,
        image: meta.data.image,
      }
      return item
    }))
    /* create a filtered array of items that have been sold */
    const soldItems = items.filter(i => i.sold)
    setSold(soldItems)
    setNfts(items)
    setLoadingState('loaded') 
  }
  if (loadingState === 'loaded' && !nfts.length) return (<h1 className="py-10 px-20 text-3xl">No assets created</h1>)
  return (
    <div>
      <div className="p-4">
        <h2 className="text-2xl py-2">Items Created</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
            nfts.map((nft, i) => (
              <div key={i} className="border shadow rounded-xl overflow-hidden">
                <img src={nft.image} className="rounded" />
                <div className="p-4 bg-black">
                  <p className="text-2xl font-bold text-white">Price - {nft.price} Eth</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
        <div className="px-4">
        {
          Boolean(sold.length) && (
            <div>
              <h2 className="text-2xl py-2">Items sold</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                {
                  sold.map((nft, i) => (
                    <div key={i} className="border shadow rounded-xl overflow-hidden">
                      <img src={nft.image} className="rounded" />
                      <div className="p-4 bg-black">
                        <p className="text-2xl font-bold text-white">Price - {nft.price} Eth</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          )
        }
        </div>
    </div>
  )
}
Running the project
To run the project, we will need to have a deploy script to deploy the smart contracts to the blockchain network.

Deploying the contracts to a local network
When we created the project, Hardhat created an example deployment script at scripts/sample-script.js.

To make the purpose of this script more clear, update the name of scripts/sample-script.js to scripts/deploy.js.

Next, update the main function in scripts/deploy.js with the following code:
async function main() {
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed();
  console.log("nftMarket deployed to:", nftMarket.address);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftMarket.address);
  await nft.deployed();
  console.log("nft deployed to:", nft.address);
}
This script will deploy both contracts to the blockchain network.

We will first test this on a local network, then deploy it to the Mumbai testnet.

To spin up a local network, open your terminal and run the following command:
npx hardhat node
This should create a local network with 19 accounts.

Hardhat node

Next, keep the node running and open a separate terminal window to deploy the contract.

In a separate window, run the following command:
npx hardhat run scripts/deploy.js --network localhost
When the deployment is complete, the CLI should print out the addresses of the contracts that were deployed:

Contract addresses

Using these addresses, create a new file at the root of the project named config.js and add the following code, replacing the placeholder with the contract addresses printed out by the CLI:
export const nftmarketaddress = "market-contract-address"
export const nftaddress = "nft-contract-address"
Importing accounts into MetaMask
You can import the accounts created by the node into your Metamask wallet to try out in the app.

Each of these accounts is seeded with 10000 ETH.

To import one of these accounts, first switch your MetaMask wallet network to Localhost 8545.

Localhost Network

Next, in MetaMask click on Import Account from the accounts menu:

MetaMask import account

Copy then paste one of the Private Keys logged out by the CLI and click Import. Once the account is imported, you should see some the Eth in the account:

MetaMask account

I'd suggest doing this with 2 or 3 accounts so that you have the ability to test out the various functionality between users.

Running the app
Now we can test out the app!

To start the app, run the following command in your CLI:
npm run dev
To test everything out, try listing an item for sale, then switching to another account and purchasing it.

Deploying to Polygon
Now that we have the project up and running and tested locally, let's deploy to Polygon. We'll start by deploying to Mumbai, the Matic test network.

The first thing we will need to do is save one of our private keys from our wallet to the .secrets file.

To get the private key, you can use one of the private keys given to you by Hardhat or you can export them directly from MetaMask.

Private keys

In the real world I suggest never hardcoding private key values in your files as we are doing here, but instead setting it as a local environment variable. If you understand how environment variables work, then use that route instead. Also remember to never push secrets files to Git.

Configuring the network
Next, we need to switch from the local test network to the Mumbai Testnet.

To do so, we need to create and set the network configuration.

First, open MetaMask and click on Settings.

MetaMask settings

Next, click on Networks and then Add Network:

New Network

Here, we will add the following configurations for the Mumbai test network as listed here:

Network Name: Mumbai TestNet
New RPC URL: https://rpc-mumbai.maticvigil.com
Chain ID: 80001
Currency Symbol: Matic

Save this, then you should be able to switch to and use the new network!

Finally, you will need some testnet Matic tokens in order to interact with the applications.

To get these, you can visit the Matic Faucet, inputting the address of the wallets that you would like to request the tokens.

Deploying to the Matic / Polygon network
Now that you have some Matic tokens, you can deploy to the Polygon network!

To do so, be sure that the address associated with the private key you are deploying your contract with has received some Matic tokens in order to pay the gas fees for the transaction.

Also, be sure to uncomment the mumbai configuration in hardhat.config.js:
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey]
    }
To deploy to Matic, run the following command:
npx hardhat run scripts/deploy.js --network mumbai
Once the contracts have been deployed, update the loadNFTs function call in pages/index.js to include the new RPC endpoint:
/* pages/index.js */

/* old provider */
const provider = new ethers.providers.JsonRpcProvider()

/* new provider */
const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com")
You should now be able to update the contract addresses in your project and test on the new network 🎉!
npm run dev
If you run into an error, the contract address printed out to the console by hardhat could be incorrect due to a bug I've run into recently. You can get the correct contract addresses by visiting https://mumbai.polygonscan.com/ and pasting in the address from which the contracts were deployed to see the most recent transactions and getting the contract addresses from the transaction data.

Deploying to Mainnet
To deploy to the main Matic / Polygon network, you can use the same steps we set up for the Mumbai test network.

The main difference is that you'll need to use an endpoint for Matic as well as import the network into your MetaMask wallet as listed here.

An example update in your project to make this happen might look like this:
/* hardhat.config.js */

/* adding Matic main network config to existing config */
...
matic: {
  url: "https://rpc-mainnet.maticvigil.com",
  accounts: [privateKey]
}
...
Public RPCs like the one listed above may have traffic or rate-limits depending on usage. You can sign up for a dedicated free RPC URL using services like Infura, MaticVigil, QuickNode, Alchemy, Chainstack, or Ankr.

For example, using something like Infura:
url: `https://polygon-mainnet.infura.io/v3/${infuraId}`
To view the final source code for this project, visit this repo

Next steps
Congratulations! You've deployed a non-trivial app to Polygon.

The coolest thing about working with solutions like Polygon is how little extra work or learning I had to do compared to building directly on Ethereum. Almost all of the APIs and tooling in these layer 2's and sidechains remain the same, making any skills transferable across various platforms like Polygon.

For the next steps, I'd suggest porting over the queries implemented in this app using The Graph. The Graph will open up many more data access patterns including things like pagination, filtering, and sorting which are necessary for any real-world application.

I will also be publishing a tutorial showing how to use Polygon with The Graph in the coming weeks.

Discussion (207)
Subscribe
pic
Add to the discussion
 
gooseophocles profile image
Goose Gordon
•
Aug 11 '21

Has anyone received the following error? Ran into it while trying out the UI locally after running the deploy script for the first time - have tried to look around the web for answers with minimal success so far:

Error: call revert exception (method="fetchMarketItems()", errorArgs=null, errorName=null, errorSignature=null, reason=null, code=CALL_EXCEPTION, version=abi/5.4.0)

All of my code is the same as the source code currently, please let me know if anyone has any ideas as to why this is happening!


5
 likes
Reply
 
will_urban profile image
Willian Urban
•
Jan 5

Was having the same problem and going crazy, my code was exactly like the tutorial, but one thing: the hardhat version.

After downgrading the hardhat version from 2.6.0 to 2.4.1 the issue has been fixed. (don't forget to delete the artifacts folder and run compile hardhat)


2
 likes
Reply
 
yash_garg profile image
Megabyte
•
Jan 17

command please?


1
 like
Thread
yawnxyz profile image
Jan Z
•
Jan 19

I'm having no problems with version ^2.8.2 so I'd try that one first.

to change versions, do npm install hardhat@^2.8.2 and just replace the numbers at the end


3
 likes
Reply
 
earnestgdata profile image
Earnest Grasshopper 🏴󠁧󠁢󠁳󠁣󠁴󠁿
•
Nov 1 '21

This post is old so this response probably won't help the original poster but it might help anyone else with this same error as I had. It's possible if you have his error that you're using the latest version of Node i.e., 17 which prefers IPv6 in it's search order. So when you're asking hardhat to perform it's node operation and it's creating a loopback of http://::1:8545 (IPv6) vs 127.0.0.1 which is the IPv4 version of the loopback. When you run the deploy script command (while using the IPv6) you'll have to use that 'hardhat' modifier for the network vs localhost or the command will fail and you'll get this error in your marketplace. To fix it you can change the DNS search order in Node 17 or use NVM to install an earlier version of Node.js. happy hunting!


2
 likes
Reply
 
impwong profile image
Matt
•
Dec 1 '21

I updated my localhost to ipv6 nothing change


2
 likes
Reply
 
binstonsukhaelcardoza profile image
Binston-sukhael-cardoza
•
Aug 12 '21

Delete artifacts folder and compile hardhat


Like
Reply
 
legendaryphoenixicarus profile image
legendaryphoenixicarus
•
Oct 21 '21 • Edited on Oct 21

Hi folks, I think I found the solution.
You can find loadNFTs function in pages/index.js. We use the JsonRpcProvider to get the provider. That's the point. You must provide RPC url of the testnet where you want to deploy NFT contracts. In my case, I targeted the bsctestnet, so I provide the RPC url of the bsctestnet to JsonRpcProvider constructor. Maybe you can keep the url in the config.js file. That's all. Cheers~


5
 likes
Thread
theindianappguy profile image
Sanskar Tiwari
•
Oct 22 '21

can you share code how? i am not clear


1
 like
Thread
legendaryphoenixicarus profile image
legendaryphoenixicarus
•
Oct 22 '21 • Edited on Oct 22

export default function Home() {
const [nfts, setNfts] = useState([])
const [loadingState, setLoadingState] = useState('not-loaded')
useEffect(() => {
loadNFTs()
}, [])
async function loadNFTs() {

const provider = new ethers.providers.JsonRpcProvider("data-seed-prebsc-1-s1.binance.org:...)
const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider)
const data = await marketContract.fetchMarketItems()
const items = await Promise.all(data.map(async i => {
const tokenUri = await tokenContract.tokenURI(i.tokenId)
const meta = await axios.get(tokenUri)
let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
let item = {
price,
tokenId: i.tokenId.toNumber(),
seller: i.seller,
owner: i.owner,
image: meta.data.image,
name: meta.data.name,
description: meta.data.description,
}
return item
}))
setNfts(items)
setLoadingState('loaded')
}

Please see the attached image. Cheers!
dev-to-uploads.s3.amazonaws.com/up...


4
 likes
Thread
theindianappguy profile image
Sanskar Tiwari
•
Oct 22 '21 • Edited on Oct 22

from where to get this rpc url?


1
 like
Thread
legendaryphoenixicarus profile image
legendaryphoenixicarus
•
Oct 22 '21

In your metamask settings->networks.
dev-to-uploads.s3.amazonaws.com/up...


3
 likes
Thread
theindianappguy profile image
Sanskar Tiwari
•
Oct 22 '21

sorry not able to understand


1
 like
Thread
legendaryphoenixicarus profile image
legendaryphoenixicarus
•
Oct 22 '21 • Edited on Oct 22

Okay, let me show another screenshot.
dev-to-uploads.s3.amazonaws.com/up...
dev-to-uploads.s3.amazonaws.com/up...
If you are trying to find RPC url of ropsten testnet, click the network name and simply copy the RPC url
dev-to-uploads.s3.amazonaws.com/up...
That's all. Hope this is helpful for you. Thanks.


1
 like
Thread
silviarainicorn profile image
Silvia Barros
•
Jan 21

Thank you! It has been a while since this post but I just wanted to thank you, this solved my problem when deploying it to a testnet (Rynkeby in my case!)


Like
Reply
 
theindianappguy profile image
Sanskar Tiwari
•
Oct 22 '21

"Delete artifacts folder and compile hardhat" this does not solved it for me


1
 like
Reply
 
iidajun profile image
JI
•
Aug 13 '21

I had the same problem.

The problem was solved by resetting the saved data by executing the following command described in the GitHub repository> README.
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
npm run dev
Probably the error is due to some problem with the saved data.




1
 like
Reply
 
theindianappguy profile image
Sanskar Tiwari
•
Oct 22 '21

but i want to deploy this to ropsten not localhost so other can interact with it


1
 like
Reply
 
yash_garg profile image
Megabyte
•
Jan 17 • Edited on Jan 17

I am getting this Error after createItem function (on click Create an Asset button). I have same RPC in Metamask and the JSONRpc. Please guide me through this. Tried to do with different accounts but didn't work.

dev-to-uploads.s3.amazonaws.com/up...


1
 like
Reply
 
latonet profile image
latonet
•
Jan 17

i'm getting this error and also

TypeError: marketContract.fetchMarketItems is not a function.

I've managed to upload to vercel and get it working, can create an NFT but nothing is displayed in dashboard or my items or marketplace front page.

I don't think the images are being sent to IPFS.

Anyone help?


1
 like
Reply
 
blackbeltdegen profile image
blackbeltDegen
•
Jan 27

change your chainID to 31337 in your metamask wallet if you are deploying to the localhost testnet


1
 like
Reply
 
latonet profile image
latonet
•
Jan 17

I've the same problem but no-one seems to be able to answer this. I can create NFTs but they don't show in marketplace to be able to buy


1
 like
Reply
 
yawnxyz profile image
Jan Z
•
Jan 20

This is happening because of a Mumbai error, outputting the wrong contract address. This causes the NFT contract to not approve the Marketplace's contract address to sell the NFTs. Redeploy with this script, by replacing main() in deploy.js with:
async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  let txHash, txReceipt
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed();

  txHash = nftMarket.deployTransaction.hash;
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let nftMarketAddress = txReceipt.contractAddress

  console.log("nftMarket deployed to:", nftMarketAddress);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftMarketAddress);
  await nft.deployed();


  txHash = nft.deployTransaction.hash;
  // console.log(`NFT hash: ${txHash}\nWaiting for transaction to be mined...`);
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let nftAddress = txReceipt.contractAddress

  console.log("nft deployed to:", nftAddress);
}

2
 likes
Thread
latonet profile image
latonet
•
Jan 20

Thanks for this, i've replied to your same post in github.


2
 likes
Reply
 
yash_garg profile image
Megabyte
•
Jan 17

Same Issue. Its saying "execution reverted: ERC721: transfer caller is not owner nor approved"


1
 like
Thread
latonet profile image
latonet
•
Jan 18

my error message is

Error: call revert exception (method="fetchMarketItems()", errorArgs=null, errorName=null, errorSignature=null, reason=null, code=CALL_EXCEPTION, version=abi/5.4.0)

and others related to getting MarketItems.


2
 likes
Thread
yash_garg profile image
Megabyte
•
Jan 18 • Edited on Jan 18

Yes for some reason the market.address (in the deploy.js file) doesnt console.log the address of your NFTMarket address but some random one (same thing for the NFT contract address). What you can do is look at the transaction created by your Mumbai wallet. Find this transactions then get the contract's addresses of these transactions and update them accordingly in your config.js file.
what you can do is redeploy on mumbai and instead of console.log address console.log(market.deployTransaction.hash) and console.log(nft.deployTransaction.hash) . This will give you the transactions hashes then go to mumbai.polygonscan.com/ and enter these transactions hashes in order to find the correct contracts addresses. Update your config.js accordingly.

dev-to-uploads.s3.amazonaws.com/up...


1
 like
Thread
latonet profile image
latonet
•
Jan 18

Hi, thanks for the reply and image, i've got it to work by adding the adding the package.json and package-lock.json from the repository then npm i, after npm run dev to localhost 3000 got a 'network RPC' but that went when i added the chainstack link to index.js for loadNFTs

const provider = new ethers.providers.JsonRpcProvider("matic-mumbai.chainstacklabs.com").

I can now create NFTs and these show in the dashboard for any user and after making changes above also in the marketplace, but i can't click on the Buy button, nothing happens.

Thanks


1
 like
Thread
yash_garg profile image
Megabyte
•
Jan 18

can you please share your git repo, I am having issues in the NFT contract.


1
 like
Thread
latonet profile image
latonet
•
Jan 18

Hi, i don't have a git repo for my site, i used localhost then vercel cli


1
 like
Thread
yash_garg profile image
Megabyte
•
Jan 18

can you share it somehow please then?


1
 like
Thread
latonet profile image
latonet
•
Jan 18

I've not changed the NFT contracts. They're the same as in the git repo from dabit3 here github.com/dabit3/polygon-ethereum....

I got the solution i tried from a discussion on the dabit repo github.com/dabit3/polygon-ethereum...


1
 like
Thread
latonet profile image
latonet
•
Jan 18

I use github and do send files to it bit for some reason they don't upload to the selected repository, i have about 23 repositories i use for various things but this website, and others, are cloned locally then edited and uploaded to vercel by CLI, i can't get them to work on netlify or heroku


1
 like
Reply
 
btandayamo profile image
Bertil Tandayamo
•
Jul 24 '21 • Edited on Jul 24

I had same issue with JsonRpcProvider, so I did
//index.js
const provider = new ethers.providers.JsonRpcProvider('https://rpc-mainnet.maticvigil.com')
Deploy again on mumbai test net, copy new contract address to config file and voila
PSD. Remember to have same url in metamask wallet, hardhat config file and index.js


7
 likes
Reply
 
ssf profile image
Sione
•
Nov 19 '21

if you have a setForSell function in the Market contract say after a user buys then decides to sell again, will you then need to transfer the token to the market address? like IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId). Because I have tried this and it is giving me error 'ERC721: transfer caller is not owner nor approved' but the owner of the token is the one making the transfer. Maybe im not doing something right. Please help


2
 likes
Reply
 
mateusasferreira profile image
Mateus Ferreira
•
Dec 7 '21

Hey, I posted my entire solution for this issue, if somebody is still facing it:
dev.to/mateusasferreira/how-to-cre...
Hope it helps ;)


2
 likes
Reply
 
yawnxyz profile image
Jan Z
•
Jan 20

There's a way to change the deploy script w/o changing the contract itself. This is happening because of a Mumbai error, outputting the wrong contract address. This causes the NFT contract to not approve the Marketplace's contract address to sell the NFTs. Redeploy with this script, by replacing main() in deploy.js with:
async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  let txHash, txReceipt
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed();

  txHash = nftMarket.deployTransaction.hash;
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let nftMarketAddress = txReceipt.contractAddress

  console.log("nftMarket deployed to:", nftMarketAddress);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftMarketAddress);
  await nft.deployed();


  txHash = nft.deployTransaction.hash;
  // console.log(`NFT hash: ${txHash}\nWaiting for transaction to be mined...`);
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let nftAddress = txReceipt.contractAddress

  console.log("nft deployed to:", nftAddress);
}

2
 likes
Reply
 
mateusasferreira profile image
Mateus Ferreira
•
Nov 22 '21

Hey, I'm having the same problem :( were you able to solve it since you posted this?


1
 like
Reply
 
ssf profile image
Sione
•
Nov 23 '21

I have not. Still looking for a solution


1
 like
Thread
mateusasferreira profile image
Mateus Ferreira
•
Nov 23 '21

Solved my issue yesterday by writing a custom function to tranfer tokens on my NFT contract. Like this:
contract NFT is ERC721URIStorage {
    (...)
    function transferToken(address from, address to, uint256 tokenId) external {
        require(ownerOf(tokenId) == from, "From address must be token owner");
        _transfer(from, to, tokenId);
    }
}
And in my Market Contract:
import "./NFT.sol";

contract NFTMarket is ReentrancyGuard {
    (...)
    function putItemToResell(address nftContract, uint256 itemId, uint256 newPrice)
        public
        payable
        nonReentrant
        onlyItemOwner(itemId)
    {
        (...)
        uint256 tokenId = idToMarketItem[itemId].tokenId;

        NFT tokenContract = NFT(nftContract);

        tokenContract.transferToken(msg.sender, address(this), tokenId);        
    }

}
Don't know all the implications of this solutions and if it may fail or cause security issues somehow but it solved my problem for know.


1
 like
Thread
ssf profile image
Sione
•
Nov 23 '21

Thanks that solution works but I agree with the implications it may bring if any. Thank you though! Ill update you if I find another stable solution.


1
 like
Thread
mateusasferreira profile image
Mateus Ferreira
•
Nov 24 '21

my pleasure! Keep me posted about the solutions you may find.


Like
Thread
javilonte profile image
Javilonte
•
Nov 29 '21

Hi, thank you for posting this, i would like to use your function on my code but it says "onlyItemOwner(itemId)" never used, am i missing something? thanks again!


1
 like
Thread
mateusasferreira profile image
Mateus Ferreira
•
Nov 29 '21

Hey there! its a modifier that you're missing. I added this to my contract so I can use it in functions to ensure only the item's owner can execute it:

    modifier onlyItemOwner(uint256 id) {
        require(
            idToMarketItem[id].owner == msg.sender,
            "Only product owner can do this operation"
        );
        _;
    }


4
 likes
Thread
javilonte profile image
Javilonte
•
Dec 2 '21

thanksss


1
 like
Reply
 
nan141979 profile image
Skrillx
•
Sep 5 '21

Nader, I'm having this problem after having a lot of Nft No market place...

Error: call revert exception (method="fetchMarketItems()", errorArgs=[{"type":"BigNumber","hex":"0x32"}], errorName="Panic", errorSignature="Panic(uint256)" , reason=null, code=CALL_EXCEPTION, version=abi/5.4.0)

It's a new mistake I've never seen anything like it. What can it be?


3
 likes
Reply
 
josiahabrown profile image
JosiahABrown
•
Oct 28 '21

I had the same problem. If you are testing on Mumbai I suggest changing the RPC provider in both index.js and your metamask account to matic-mumbai.chainstacklabs.com/ instead of rpc-mumbai.matic.today/ . That fixed it for me.


2
 likes
Reply
 
amo profile image
amo
•
Sep 21 '21

Hi, did you find a solution to this error?
I am having the same issue. 😥


2
 likes
Reply
 
theindianappguy profile image
Sanskar Tiwari
•
Oct 22 '21

i am facing the same if found solution please share


1
 like
Thread
amo profile image
amo
•
Oct 24 '21

I honestly cant recall what was the problem, but I think you should compare the code in the video & this article for differences (there are a lot). I had to do line by line debugging to solve some of the errors. it took me more than 2 days to finish this 2 hours tutorial.

all the best.


3
 likes
Reply
 
genie_anabelle profile image
Genie Anabelle
•
Jul 13 '21 • Edited on Jul 13

Hi, I'm having a runtime error in create-item.js when clicking to create the listing! Would appreciate any help, thank you!

The error is regarding: let value = event.args[2]


3
 likes
Reply
 
ksteigerwald profile image
Kris Steigerwald
•
Sep 28 '21 • Edited on Sep 28

Restart your hardhat node, Redeploy your contracts, update your config.js with new contract addresses. Set MetaMask custom nounce to 0 (I had to do this to deal w/ another error) and then update the nounce with each following transaction.

hth


2
 likes
Reply
 
insivika profile image
Philipp A.
•
Dec 30 '21 • Edited on Dec 30

Thank you this worked. I also had a misconfiguration in my metamask account. Can you please explain why I have to manually set the nonce? How could I expect an actual user to do this?


1
 like
Thread
yawnxyz profile image
Jan Z
•
Jan 19

if you get the "nonce too high" error, do this: medium.com/@thelasthash/solved-non...


1
 like
Reply
 
gullinburstilab profile image
Jose Lopez Jr
•
Jan 30

When I redeploy the contract, I dont get any of the console logs, but it says "Done in 1.71s.", is there any reason I am unable to see the addresses?


Like
Reply
 
cryptobeginner profile image
CryptoBeginner
•
Aug 24 '21

Hi i having this same event.args[2] you found any solution?


2
 likes
Reply
 
baart1989 profile image
baart1989
•
Jul 18 '21 • Edited on Jul 18

I had similar in my case it was that i had to re-run deploy.js command.


1
 like
Reply
 
chaun profile image
Chaun
•
Aug 27 '21

Hi also have the same issue, any solutions?


1
 like
Reply
 
insivika profile image
Philipp A.
•
Dec 30 '21

Did you find a soludtion for this?


1
 like
Reply
 
ayumirage profile image
Ayumirage
•
Jul 21 '21 • Edited on Jul 21

im stuck on this error:

./pages/index.js:10:0
Module not found: Can't resolve '../artifacts/contracts/Market.sol/NFTMarket.json'
8 |
9 | import NFT from "../artifacts/contracts/NFT.sol/NFT.json";

10 | import Market from "../artifacts/contracts/Market.sol/NFTMarket.json";
11 |
12 | export default function Home() {
13 | const [nfts, setNfts] = useState([]);


2
 likes
Reply
 
sumeetchawla profile image
Sumeet Chawla
•
Jul 24 '21

If you are running on local, you haven't compiled or tested your code and hence the artifacts are not generated.

If you are trying to build on vercel, this will come cause again the artifacts are missing. The general practice is not to commit those. Add a compile (or test) command to your build script before building nextjs.


1
 like
Reply
 
barryhewitt profile image
Baz-Cloud
•
Aug 13 '21

Hi, please could you help me with this, i've been following this course for days now and I'm totally stuck on this.

Once i type npm run dev this is what i get

BarryH@EPT-LT23 MINGW64 ~/digital-marketplace (main)
$ npm run dev

digital-marketplace@0.1.0 dev
next dev

ready - started server on 0.0.0.0:3000, url: localhost:3000
info - Using webpack 5. Reason: Enabled by default nextjs.org/docs/messages/webpack5
event - compiled successfully
event - build page: /
wait - compiling...
error - ./pages/index.js:11:0
Module not found: Can't resolve '../artifacts/contracts/Market.sol/NFTMarket.json'
9 |
10 | import NFT from '../artifacts/contracts/NFT.sol/NFT.json'

11 | import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'
12 |
13 | export default function Home() {
14 | const [nfts, setNfts] = useState([])

Import trace for requested module:

nextjs.org/docs/messages/module-no...
event - build page: /next/dist/pages/_error
wait - compiling...
error - ./pages/index.js:11:0
Module not found: Can't resolve '../artifacts/contracts/Market.sol/NFTMarket.json'
9 |
10 | import NFT from '../artifacts/contracts/NFT.sol/NFT.json'

11 | import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'
12 |
13 | export default function Home() {
14 | const [nfts, setNfts] = useState([])

Import trace for requested module:

nextjs.org/docs/messages/module-no...
wait - compiling...
event - compiled successfully


1
 like
Reply
 
btandayamo profile image
Bertil Tandayamo
•
Jul 24 '21

Please elaborate


1
 like
Reply
 
vitustockholm profile image
Vitus
•
Aug 23 '21

change => '../artifacts/contracts/Market.sol/NFTMarket.json' to ...... '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'


1
 like
Reply
 
barryhewitt profile image
Baz-Cloud
•
Aug 13 '21

Hi, i'm really stuck on this and have been trying to figure it out for hours, did you manage to figure it out?


1
 like
Reply
 
vitustockholm profile image
Vitus
•
Jan 3

hm, did You try figure out this: '' error - ./pages/index.js:11:0 '' *** index.js 11 code line

time is the master , and time could be disaster .. .
for me worked good enough to go and make tests :

' 'change => '../artifacts/contracts/Market.sol/NFTMarket.json' to ...... '../artifacts/contracts/NFTMarket.sol/NFTMarket.json' ''


1
 like
Reply
 
will_urban profile image
Willian Urban
•
Jan 4

There is a small bug when buying an item when the tokenId and itemId do not match.

How to reproduce:

1- Go to /create-item, mint an item A with price X, but do not list it.
2- Mint an Item B with price Y, then list it.
3- Go to index and try to buy item B.
Result: "Please submit the asking price in order to complete the purchase".
Expected result:
Purchase successful.

Fix:

1- In index.js on the function loadNFTS add itemId: item.itemId.toNumber(), to the object item.
2- When calling createMarketSale the second argument should be nft.itemId.

As I've finished typing all this I've noticed that it has been fixed in the github repo github.com/dabit3/polygon-ethereum...

Well, at least now you know if you are looking for a solution here


4
 likes
Reply
 
authenticfake profile image
authenticfake
•
Jan 5

yes correct, the same fix applied!


3
 likes
Reply
 
giuseppecrj profile image
G.
•
Jul 7 '21

Amazing article as always @dabit3

One small error I found is on sample-test.js instead of:
        tokenId: i.price.toString(),
it should be
        tokenId: i.tokenId.toString(),

4
 likes
Reply
 
dabit3 profile image
Nader Dabit 
•
Jul 7 '21

Thank you! And thanks for the heads up, fixing this now!


3
 likes
Reply
 
arcticmatt profile image
Matt Lim
•
Aug 12 '21

For this part
let tx = await transaction.wait()
let event = tx.events[0]
let value = event.args[2]
it seems like the intention is to get the MarketItemCreated event (otherwise I think that event goes unused)? But it actually gets the Transfer event. Functionally it's equivalent because both have tokenId as their third arg, but it's a little unclear what the intention is.


2
 likes
Reply
 
chaun profile image
Chaun
•
Aug 26 '21

Hi Matt,

Did you manage to find a solution to this error?

Hope to hear from you


1
 like
Reply
 
amo profile image
amo
•
Sep 21 '21 • Edited on Sep 21

Hi, I had the same error it was because I wasn't connected to the correct account in Metamask.

Make sure your metamask local network is on the same port provided when you run "npx hardhat node" probably " 127.0.0.1:8545/" and then import the an account to metamask using any of the private keys given and test it again


1
 like
Thread
99bits profile image
99bits
•
Dec 6 '21

Hi Amo,

I followed your instructions but still having the same issue.


1
 like
Reply
 
sumeetchawla profile image
Sumeet Chawla
•
Jul 21 '21

Hey Nader! This is such a brilliant article and a youtube video. I tried my hands at it and am falling in love with Blockchain.

So, if I am understanding it right, the listing fees should reflect in the owner's account when a certain sale happens right? But I am unable to see it. I will try to revisit the code and figure out why it isn't happening.


2
 likes
Reply
 
dabit3 profile image
Nader Dabit 
•
Jul 22 '21

Amazing to hear! Yes! This should be the case. Maybe consider bumping the listing fee up high to see it show up, maybe something like equivalent of 100 or 1000 Matic


2
 likes
Reply
 
sumeetchawla profile image
Sumeet Chawla
•
Jul 23 '21

Thank you so much for replying. Yes, I did try it with 1000 matic. But it was still not working. It was a very stupid mistake from my end. Out of the three accounts on metamask, one was actually not imported using the keys generated in the hardhat node command 😅 I used that account's private key to initialise the market contract lol.

I was tearing my hair in trying to figure out why it wasn't working as the code made perfect sense.

Great work though. Looking forward to the next article. :D How to create a yield farm 🙈


2
 likes
Thread
d2vin profile image
d2vin
•
Nov 26 '21

Hi, I too was having this issue and using the hardhat private key worked for me as well. Now my question is how do get this functionality to work with my personal ethereum account?


1
 like
Reply
 
d2vin profile image
d2vin
•
Nov 26 '21

Hi, I too was having this issue and using the hardhat private key worked for me as well. Now my question is how do get this functionality to work with my personal ethereum account?


1
 like
Reply
 
arielbk profile image
arielbk
•
Jan 1

I ran into issues with Infura, and with ipfs http server.

Infura requires you to create a billable account to use Polygon now, and you'll need to make another project on there for the IPFS part to get a project id and key specifically for IPFS.

After reading docs, I ended up going with the latest version of ipfs http server (^55.0.0 at time of writing) and doing the following:
import { create } from 'ipfs-http-client'

const projectId = process.env.NEXT_PUBLIC_INFURA_IPFS_PROJECT_ID
const projectSecret = process.env.NEXT_PUBLIC_INFURA_IPFS_PROJECT_SECRET
const projectIdAndSecret = `${projectId}:${projectSecret}`

const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: `Basic ${Buffer.from(projectIdAndSecret).toString(
      'base64'
    )}`,
  },
})
I guess things are changing quickly! 😄


2
 likes
Reply
 
zonezter_bas profile image
Bas
•
Jan 29

Could you please show an example text on how to get this in the code? I don´t really understand it. I think I´m having the IPFS problems as well.


1
 like
Reply
 
yawnxyz profile image
Jan Z
•
Jan 19

I ended up signing up for an account at maticvigil.com which doesn't need a credit card


1
 like
Reply
 
zonezter_bas profile image
Bas
•
Jan 5

I have tried everything when it comes to this error:
Error: call revert exception (method="fetchMarketItems()", errorArgs=null, errorName=null, errorSignature=null, reason=null, code=CALL_EXCEPTION, version=abi/5.4.0)

Everybody else here seems to have fixed it by providing the RPC url in the
const provider = new ethers.providers.JsonRpcProvider

But for some reason I keep getting the same error anyway, anybody have any idea where to look? :(


1
 like
Reply
 
skimaharvey profile image
Skima Harvey
•
Jan 10 • Edited on Jan 10

Yes for some reason the market.address (in the deploy.js file) doesnt console.log the address of your NFTMarket address but some random one (same thing for the NFT contract address). What you can do is look at the transaction created by your Mumbai wallet. Find this transactions then get the contract's addresses of these transactions and update them accordingly in your config.js file.


3
 likes
Reply
 
zonezter_bas profile image
Bas
•
Jan 10

Thank you very much! How do I look at the transactions created by the Mumbai wallet?


1
 like
Thread
skimaharvey profile image
Skima Harvey
•
Jan 10

what you can do is redeploy on mumba and instead of console.log address console.log(market.deployTransaction.hash) and console.log(nft.deployTransaction.hash) . This will give you the transactions hashes then go to mumbai.polygonscan.com/ and enter these transactions hashes in order to find the correct contracts addresses. Update your config.js accordingly


3
 likes
Thread
zonezter_bas profile image
Bas
•
Jan 10 • Edited on Jan 10

This fixed it. I now have it deployed the project and its working on mumbai. Once again, thank you so much! I have been going crazy trying to figure this out.


2
 likes
Thread
skimaharvey profile image
Skima Harvey
•
Jan 10

Sure np. Ran into this issue last night as well. Just weird that nft.address logs another address...


1
 like
Thread
latonet profile image
latonet
•
Jan 17

where is console.log? (to "instead of console.log address .....") (jan 10 post)


1
 like
Thread
latonet profile image
latonet
•
Jan 18

where is console.log file to get market.deployTransaction.hash and nft.deployTransaction.hash?


1
 like
Reply
 
kritzheng profile image
KritzHeng
•
Sep 2 '21

I'm stuck on this error

Unhandled Runtime Error
Error: could not detect network (event="noNetwork", code=NETWORK_ERROR, version=providers/5.3.1)

Source
.next\static\chunks\pages\index.js (173:0) @ Logger.makeError

171 | }
172 | // @todo: Any??

173 | const error = new Error(message);
174 | error.reason = reason;
175 | error.code = code;
176 | Object.keys(params).forEach(function (key) {
Call Stack
Logger.throwError
/_next/static/chunks/pages/index.js (7889:20)
JsonRpcProvider.
.next\static\chunks\pages\index.js (334:0)
Generator.throw

rejected
/_next/static/chunks/pages/index.js (12104:65)


2
 likes
Reply
 
bleedingeffigy profile image
Alex Hernandez
•
Sep 27 '21

The issue may be because of this line:
const provider = new ethers.providers.JsonRpcProvider()

I read the ethers docs, and they recommend JsonRpcProvider() for local nodes, for others they recommend getDefaultProvider() or Web3Provider(web3.currentProvider).
The other pages use Web3Provider, it's only index.js that uses the bad one.
So the fix for me was to make this change to index.js:
const provider = new ethers.providers.Web3Provider(web3.currentProvider)
And now I'm connected to and playing with the network!


3
 likes
Reply
 
yosi profile image
yosi
•
Oct 28 '21 • Edited on Oct 29

You need to define networkId to the provider - ethers.getDefaultProvider('ropsten')


2
 likes
Reply
 
thapelo505 profile image
thapelo505
•
Sep 7 '21

someone please help me sove these, i ran npm audit and got the same message
is it the package versions?

44 vulnerabilities (11 low, 4 moderate, 29 high)

To address issues that do not require attention, run:
npm audit fix

Some issues need review, and may require choosing
a different dependency.

digital-marketplace>npm list
digital-marketplace@0.1.0 C:\Users\Monnosi\Music\typebeats\projects\digital-marketplace
+-- @nomiclabs/hardhat-ethers@2.0.2
+-- @nomiclabs/hardhat-waffle@2.0.1
+-- @openzeppelin/contracts@4.3.1
+-- autoprefixer@10.3.4
+-- axios@0.21.4
+-- chai@4.3.4
+-- ethereum-waffle@3.4.0
+-- ethers@5.4.6
+-- ipfs-http-client@52.0.3
+-- next@11.1.2
+-- postcss@8.3.6
+-- react-dom@17.0.2
+-- react@17.0.2
+-- tailwindcss@2.2.10
`-- web3modal@1.9.4


1
 like
Reply
 
chaun profile image
Chaun
•
Sep 8 '21

Run npm audit fix


1
 like
Reply
 
thapelo505 profile image
thapelo505
•
Sep 9 '21

i tried it but it still gives me the same


Like
Thread
shinobi_242 profile image
Eric
•
Sep 15 '21

use yarn instead


1
 like
Reply
 
nan141979 profile image
Skrillx
•
Aug 19 '21

Hey Nader, I wanted to thank you so much for this post and for this wonderful job!

I'm learning a lot and demonstrating to my close friends... Do you have any complete courses?

I was able to run perfectly and execute, I wanted to know how I could implement it so that the assets that were bought can have their prices changed and sell again.

From what I understand after you buy the NFT you have nothing to do with it anymore.

That's right??


3
 likes
Reply
 
rakveli profile image
rakveli
•
Jan 9

Have you been able to find a solution to this ?


1
 like
Reply
 
coderbang1 profile image
coderbang1
•
Sep 25 '21 • Edited on Sep 25

i can create items, but when i try to buy nothing happens.

console shows this error: MetaMask - RPC Error: Internal JSON-RPC error.
Object { code: -32603, message: "Internal JSON-RPC error.
(code: 3, message: "execution reverted: Please submit the asking price in order to complete the purchase")

and this one: Uncaught (in promise)

[Note that: its not on matic. i have deploy it to bsc testnet. ]


2
 likes
Reply
 
x777 profile image
YD
•
Sep 28 '21

Any solution?


2
 likes
Reply
 
will_urban profile image
Willian Urban
•
Jan 5

Could this be it?

dev.to/will_urban/comment/1l193


2
 likes
Reply
 
yawnxyz profile image
Jan Z
•
Jan 19 • Edited on Jan 20

Hey all, there's currently a bug on Mumbai causing deployed addresses to be incorrect. This is causing the constructor of the NFT contract to approve the wrong address for NFT purchases (because it uses the address of the Market deployment for approval) — causing the annoying "execution reverted: ERC721: approve caller is not owner nor approved for all" error.

Try using Mainnet (yes, you'll have to use real money) but it works!

Reference: github.com/nomiclabs/hardhat/issue...

Here's a workaround deploy script that will make it work on Mumbai. Replace main() in deploy.js with:
async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  let txHash, txReceipt
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed();

  txHash = nftMarket.deployTransaction.hash;
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let nftMarketAddress = txReceipt.contractAddress

  console.log("nftMarket deployed to:", nftMarketAddress);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftMarketAddress);
  await nft.deployed();


  txHash = nft.deployTransaction.hash;
  // console.log(`NFT hash: ${txHash}\nWaiting for transaction to be mined...`);
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let nftAddress = txReceipt.contractAddress

  console.log("nft deployed to:", nftAddress);
}

2
 likes
Reply
 
yash_garg profile image
Megabyte
•
Jan 21

Thank you so much, finally it solved after 3 days of suffering.
Thank You again.


1
 like
Reply
 
barryhewitt profile image
Baz-Cloud
•
Aug 13 '21

Hi, i hope you're well

Firstly thank you for putting this together it's really amazing!

I've spent a few days going through it slowly and using your code examples above to avoid any syntax errors and i'm nearly at the end but am getting the following error and wondered if you could help?

error - ./pages/create-item.js:14:0
Module not found: Can't resolve '../artifacts/contracts/Market.sol/NFTMarket.json'
12 |
13 | import NFT from '../artifacts/contracts/NFT.sol/NFT.json'

14 | import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'


1
 like
Reply
 
Sloan, the sloth mascot
Comment deleted
 
chaun profile image
Chaun
•
Aug 26 '21

You need to add NFT -> /NFTMarket.sol/NFTMarket.json'


1
 like
Reply
 
chaun profile image
Chaun
•
Aug 26 '21

You need to add NFT -> /NFTMarket.sol/NFTMarket.json'


1
 like
Reply
 
oxamyy profile image
0xamyy
•
Sep 10 '21 • Edited on Sep 10

Hi I am following this article and sadly my test does not run successfully right now, does anyone know what this error is?
when i run npx hardhat test in the terminal , it fails at the function :
0 passing (717ms)
1 failing

1) NFTMarket
should create and describe and execute market sales:
Error: missing argument: in Contract constructor (count=0, expectedCount=1, code=MISSING_ARGUMENT, version=contracts/5.4.1)
at Logger.makeError (node_modules/@ethersproject/logger/src.ts/index.ts:225:28)
at Logger.throwError (node_modules/@ethersproject/logger/src.ts/index.ts:237:20)
at Logger.checkArgumentCount (node_modules/@ethersproject/logger/src.ts/index.ts:296:18)
at ContractFactory. (node_modules/@ethersproject/contracts/src.ts/index.ts:1201:16)
at step (node_modules/@ethersproject/contracts/lib/index.js:48:23)
at Object.next (node_modules/@ethersproject/contracts/lib/index.js:29:53)
at /home/nft-marketplace/node_modules/@ethersproject/contracts/lib/index.js:23:71
at new Promise ()
at __awaiter (node_modules/@ethersproject/contracts/lib/index.js:19:12)
at ContractFactory.deploy (node_modules/@ethersproject/contracts/lib/index.js:1111:16)

thanks!


1
 like
Reply
 
rizkywellyanto profile image
Rizky Wellyanto
•
Nov 17 '21

I'm getting the same error. Anyone knows how to solve this?


1
 like
Reply
 
spaceh3ad profile image
spaceh3ad
•
Sep 17 '21

Got same error while testing contracts. This error happens as i try to call function that takes bool as parameter.


1
 like
Reply
 
sonnyk37 profile image
SonnyK
•
Jan 7

Anyone get this error:

Error: Transaction reverted: function selector was not recognized and there's no fallback function

Various forums online seem to suggest that I need a receiver function, but that doesn't fix the problem for me. Any help would be greatly appreciated!


2
 likes
Reply
 
emmanuelmartinez profile image
Emaxnuel
•
Jul 23 '21

Hello everyone :)

I have this error in my-assets.js:

Unhandled Runtime Error

Error: call revert exception (method="fetchMyNFTs()", errorSignature=null, errorArgs=[null], reason=null, code=CALL_EXCEPTION, version=abi/5.0.0-beta.156)

I copied and pasted the code from Github, I already looked everywhere on the Web but I can't figure it out because I don't fully understand what it is

I feel so desperate and frustrated, so useless :(


1
 like
Reply
 
sumeetchawla profile image
Sumeet Chawla
•
Jul 24 '21 • Edited on Jul 24

You are calling the JsonRpcProvider but initialising it with a public rpc url while running a local node. Remove that and it should work fine. 👍🏼

const provider = new ethers.providers.JsonRpcProvider() in index page


1
 like
Reply
 
btandayamo profile image
Bertil Tandayamo
•
Jul 24 '21

dev.to/btandayamo/comment/1gh38


1
 like
Reply
 
zhaluza profile image
Zac Haluza
•
Aug 1 '21

I'm getting the following error when I enter pragma solidity ^0.8.3 at the top of my smart contracts:
Source file requires different compiler version (current compiler is 0.7.3+commit.9bfce1f6.Emscripten.clang) - note that nightly builds are considered to be strictly less than the released version
Even after reinstalling my dependencies, my yarn.lock file still lists solc "0.7.3" as a dependency of hardhat@^2.5.0. Right now I'm using 0.7.3 as the Solidity version of my smart contracts - doubt it'll cause any issues for a smaller project like this, but I'm curious about how to get around it, or if that's even necessary.

Looking forward to finishing this project! Wrapping my head about how to build apps in the Web 3.0 paradigm has been both challenging and exciting, and I appreciate you putting such a huge effort into creating this type of much-needed content.


1
 like
Reply
 
thapelo505 profile image
thapelo505
•
Sep 9 '21

i have really tried everything

npm audit report
elliptic <6.5.4
Severity: moderate
Use of a Broken or Risky Cryptographic Algorithm - npmjs.com/advisories/1648
fix available via npm audit fix
node_modules/ganache-core/node_modules/elliptic
@ethersproject/signing-key <=5.0.9
Depends on vulnerable versions of elliptic
node_modules/ganache-core/node_modules/@ethersproject/signing-key

lodash <4.17.21
Severity: high
Command Injection - https://npmjs.com/advisories/1673
No fix available
node_modules/ganache-core/node_modules/lodash
ganache-core *
Depends on vulnerable versions of lodash
Depends on vulnerable versions of web3
Depends on vulnerable versions of web3-provider-engine
node_modules/ganache-core
@ethereum-waffle/provider *
Depends on vulnerable versions of @ethereum-waffle/ens
Depends on vulnerable versions of ganache-core
node_modules/@ethereum-waffle/provider
@ethereum-waffle/chai >=2.5.0
Depends on vulnerable versions of @ethereum-waffle/provider
node_modules/@ethereum-waffle/chai
ethereum-waffle >=2.3.0-istanbul.0
Depends on vulnerable versions of @ethereum-waffle/chai
Depends on vulnerable versions of @ethereum-waffle/provider
node_modules/ethereum-waffle
@nomiclabs/hardhat-waffle *
Depends on vulnerable versions of ethereum-waffle
node_modules/@nomiclabs/hardhat-waffle

node-fetch <=2.6.0 || 3.0.0-beta.1 - 3.0.0-beta.8
Denial of Service - npmjs.com/advisories/1556
No fix available
node_modules/ganache-core/node_modules/fetch-ponyfill/node_modules/node-fetch
node_modules/ganache-core/node_modules/node-fetch
cross-fetch <=2.2.3 || 3.0.0 - 3.0.5
Depends on vulnerable versions of node-fetch
node_modules/ganache-core/node_modules/cross-fetch
fetch-ponyfill 1.0.0 - 6.0.2
Depends on vulnerable versions of node-fetch
node_modules/ganache-core/node_modules/fetch-ponyfill
eth-json-rpc-middleware 1.1.0 - 5.0.2
Depends on vulnerable versions of fetch-ponyfill
node_modules/ganache-core/node_modules/eth-json-rpc-middleware
eth-json-rpc-infura <=5.0.0
Depends on vulnerable versions of eth-json-rpc-middleware
node_modules/ganache-core/node_modules/eth-json-rpc-infura
web3-provider-engine 14.0.0 - 15.0.12
Depends on vulnerable versions of eth-json-rpc-infura
node_modules/ganache-core/node_modules/web3-provider-engine
ganache-core *
Depends on vulnerable versions of lodash
Depends on vulnerable versions of web3
Depends on vulnerable versions of web3-provider-engine
node_modules/ganache-core
@ethereum-waffle/provider *
Depends on vulnerable versions of @ethereum-waffle/ens
Depends on vulnerable versions of ganache-core
node_modules/@ethereum-waffle/provider
@ethereum-waffle/chai >=2.5.0
Depends on vulnerable versions of @ethereum-waffle/provider
node_modules/@ethereum-waffle/chai
ethereum-waffle >=2.3.0-istanbul.0
Depends on vulnerable versions of @ethereum-waffle/chai
Depends on vulnerable versions of @ethereum-waffle/provider
node_modules/ethereum-waffle
@nomiclabs/hardhat-waffle *
Depends on vulnerable versions of ethereum-waffle
node_modules/@nomiclabs/hardhat-waffle

normalize-url 4.3.0 - 4.5.0 || 5.0.0 - 5.3.0 || 6.0.0
Severity: high
Regular Expression Denial of Service - npmjs.com/advisories/1755
fix available via npm audit fix
node_modules/ganache-core/node_modules/normalize-url

path-parse <1.0.7
Severity: moderate
Regular Expression Denial of Service in path-parse - npmjs.com/advisories/1773
fix available via npm audit fix
node_modules/ganache-core/node_modules/path-parse

tar <=4.4.17 || 5.0.0 - 5.0.9 || 6.0.0 - 6.1.8
Severity: high
Arbitrary File Creation/Overwrite due to insufficient absolute path sanitization - npmjs.com/advisories/1770
Arbitrary File Creation/Overwrite via insufficient symlink protection due to directory cache poisoning - npmjs.com/advisories/1771
Arbitrary File Creation/Overwrite via insufficient symlink protection due to directory cache poisoning using symbolic links - npmjs.com/advisories/1779
Arbitrary File Creation/Overwrite on Windows via insufficient relative path sanitization - npmjs.com/advisories/1781
fix available via npm audit fix
node_modules/ganache-core/node_modules/tar

underscore 1.3.2 - 1.12.0
Severity: high
Arbitrary Code Execution - npmjs.com/advisories/1674
No fix available
node_modules/ganache-core/node_modules/underscore
web3-bzz <=1.3.5
Depends on vulnerable versions of underscore
node_modules/ganache-core/node_modules/web3-bzz
web3 *
Depends on vulnerable versions of web3-bzz
Depends on vulnerable versions of web3-eth
node_modules/ganache-core/node_modules/web3
ganache-core *
Depends on vulnerable versions of lodash
Depends on vulnerable versions of web3
Depends on vulnerable versions of web3-provider-engine
node_modules/ganache-core
@ethereum-waffle/provider *
Depends on vulnerable versions of @ethereum-waffle/ens
Depends on vulnerable versions of ganache-core
node_modules/@ethereum-waffle/provider
@ethereum-waffle/chai >=2.5.0
Depends on vulnerable versions of @ethereum-waffle/provider
node_modules/@ethereum-waffle/chai
ethereum-waffle >=2.3.0-istanbul.0
Depends on vulnerable versions of @ethereum-waffle/chai
Depends on vulnerable versions of @ethereum-waffle/provider
node_modules/ethereum-waffle
@nomiclabs/hardhat-waffle *
Depends on vulnerable versions of ethereum-waffle
node_modules/@nomiclabs/hardhat-waffle
web3-core-helpers <=1.3.6-rc.2 || 2.0.0-alpha - 3.0.0-rc.4
Depends on vulnerable versions of underscore
Depends on vulnerable versions of web3-utils
node_modules/ganache-core/node_modules/web3-core-helpers
web3-core <=1.3.5 || 2.0.0-alpha - 3.0.0-rc.4
Depends on vulnerable versions of web3-core-helpers
node_modules/ganache-core/node_modules/web3-core
web3-eth-ens <=1.3.6-rc.2 || 2.0.0-alpha - 3.0.0-rc.4
Depends on vulnerable versions of underscore
Depends on vulnerable versions of web3-core
Depends on vulnerable versions of web3-core-helpers
node_modules/ganache-core/node_modules/web3-eth-ens
web3-eth <=1.3.6-rc.2 || 2.0.0-alpha - 3.0.0-rc.4
Depends on vulnerable versions of underscore
Depends on vulnerable versions of web3-core-helpers
Depends on vulnerable versions of web3-eth-ens
node_modules/ganache-core/node_modules/web3-eth
web3-core-method <=1.3.6-rc.2 || 2.0.0-alpha - 3.0.0-rc.4
Depends on vulnerable versions of underscore
Depends on vulnerable versions of web3-core-helpers
node_modules/ganache-core/node_modules/web3-core-method
web3-net 1.2.0 - 1.3.5 || 2.0.0-alpha - 3.0.0-rc.4
Depends on vulnerable versions of web3-core-method
node_modules/ganache-core/node_modules/web3-net
web3-eth-personal <=1.3.5 || 2.0.0-alpha - 3.0.0-rc.4
Depends on vulnerable versions of web3-core-helpers
Depends on vulnerable versions of web3-net
node_modules/ganache-core/node_modules/web3-eth-personal
web3-shh <=1.3.5
Depends on vulnerable versions of web3-core-method
Depends on vulnerable versions of web3-net
node_modules/ganache-core/node_modules/web3-shh
web3-core-subscriptions <=1.3.6-rc.2 || 2.0.0-alpha - 3.0.0-rc.4
Depends on vulnerable versions of underscore
Depends on vulnerable versions of web3-core-helpers
node_modules/ganache-core/node_modules/web3-core-subscriptions
web3-eth-contract <=1.3.6-rc.2 || 2.0.0-alpha - 3.0.0-rc.4
Depends on vulnerable versions of underscore
Depends on vulnerable versions of web3-core-helpers
node_modules/ganache-core/node_modules/web3-eth-contract
web3-providers-http <=1.0.0 || 1.2.0 - 1.3.5 || 3.0.0-rc.0 - 3.0.0-rc.4
Depends on vulnerable versions of web3-core-helpers
node_modules/ganache-core/node_modules/web3-providers-http
web3-providers-ipc <=1.3.6-rc.2 || >=3.0.0-rc.0
Depends on vulnerable versions of underscore
Depends on vulnerable versions of web3-core-helpers
node_modules/ganache-core/node_modules/web3-providers-ipc
web3-providers-ws <=1.3.6-rc.2 || 3.0.0-rc.0 - 3.0.0-rc.4
Depends on vulnerable versions of underscore
Depends on vulnerable versions of web3-core-helpers
node_modules/ganache-core/node_modules/web3-providers-ws
web3-core-requestmanager <=1.3.5 || 3.0.0-rc.0 - 3.0.0-rc.4
Depends on vulnerable versions of underscore
node_modules/ganache-core/node_modules/web3-core-requestmanager
web3-eth-abi <=1.3.6-rc.2 || 2.0.0-alpha - 3.0.0-rc.4
Depends on vulnerable versions of underscore
Depends on vulnerable versions of web3-utils
node_modules/ganache-core/node_modules/web3-eth-abi
web3-eth-accounts <=1.3.5 || 2.0.0-alpha - 3.0.0-rc.4
Depends on vulnerable versions of underscore
node_modules/ganache-core/node_modules/web3-eth-accounts
web3-utils 1.0.0-beta.8 - 1.3.5 || 2.0.0-alpha - 3.0.0-rc.4
Depends on vulnerable versions of underscore
node_modules/ganache-core/node_modules/web3-utils
web3-eth-iban <=1.3.5 || 2.0.0-alpha - 3.0.0-rc.4
Depends on vulnerable versions of web3-utils
node_modules/ganache-core/node_modules/web3-eth-iban

web3 *
Severity: high
Insecure Credential Storage - npmjs.com/advisories/877
Depends on vulnerable versions of web3-bzz
Depends on vulnerable versions of web3-eth
No fix available
node_modules/ganache-core/node_modules/web3
ganache-core *
Depends on vulnerable versions of lodash
Depends on vulnerable versions of web3
Depends on vulnerable versions of web3-provider-engine
node_modules/ganache-core
@ethereum-waffle/provider *
Depends on vulnerable versions of @ethereum-waffle/ens
Depends on vulnerable versions of ganache-core
node_modules/@ethereum-waffle/provider
@ethereum-waffle/chai >=2.5.0
Depends on vulnerable versions of @ethereum-waffle/provider
node_modules/@ethereum-waffle/chai
ethereum-waffle >=2.3.0-istanbul.0
Depends on vulnerable versions of @ethereum-waffle/chai
Depends on vulnerable versions of @ethereum-waffle/provider
node_modules/ethereum-waffle
@nomiclabs/hardhat-waffle *
Depends on vulnerable versions of ethereum-waffle
node_modules/@nomiclabs/hardhat-waffle

ws 5.0.0 - 5.2.2 || 6.0.0 - 6.2.1 || 7.0.0 - 7.4.5
Severity: moderate
Regular Expression Denial of Service - npmjs.com/advisories/1748
fix available via npm audit fix
node_modules/ganache-core/node_modules/web3-provider-engine/node_modules/ws

yargs-parser <=13.1.1 || 14.0.0 - 15.0.0 || 16.0.0 - 18.1.1
Prototype Pollution - npmjs.com/advisories/1500
No fix available
node_modules/@ensdomains/ens/node_modules/yargs-parser
yargs 4.0.0-alpha1 - 12.0.5 || 14.1.0 || 15.0.0 - 15.2.0
Depends on vulnerable versions of yargs-parser
node_modules/@ensdomains/ens/node_modules/yargs
solc 0.3.6 - 0.5.10
Depends on vulnerable versions of yargs
node_modules/@ensdomains/ens/node_modules/solc
@ensdomains/ens *
Depends on vulnerable versions of solc
node_modules/@ensdomains/ens
@ethereum-waffle/ens *
Depends on vulnerable versions of @ensdomains/ens
node_modules/@ethereum-waffle/ens
@ethereum-waffle/provider *
Depends on vulnerable versions of @ethereum-waffle/ens
Depends on vulnerable versions of ganache-core
node_modules/@ethereum-waffle/provider
@ethereum-waffle/chai >=2.5.0
Depends on vulnerable versions of @ethereum-waffle/provider
node_modules/@ethereum-waffle/chai
ethereum-waffle >=2.3.0-istanbul.0
Depends on vulnerable versions of @ethereum-waffle/chai
Depends on vulnerable versions of @ethereum-waffle/provider
node_modules/ethereum-waffle
@nomiclabs/hardhat-waffle *
Depends on vulnerable versions of ethereum-waffle
node_modules/@nomiclabs/hardhat-waffle

44 vulnerabilities (11 low, 4 moderate, 29 high)

To address issues that do not require attention, run:
npm audit fix


1
 like
Reply
 
chaun profile image
Chaun
•
Aug 27 '21

Has anyone managed to solve this?

63 | let tx = await transaction.wait()
64 | let event = tx.events[0]

65 | let value = event.args[2]
| ^
66 | let tokenId = value.toNumber()
67 |
68 | const price = ethers.utils.parseUnits(formInput.price, 'ether')

????


1
 like
Reply
 
amo profile image
amo
•
Sep 21 '21

Hi, I had the same error it was because I wasn't connected to the correct account in Metamask.

Make sure your metamask local network is on the same port provided when you run "npx hardhat node" probably "127.0.0.1:8545/" and then import the an account to metamask using any of the private keys given and test it again


1
 like
Reply
 
insivika profile image
Philipp A.
•
Dec 30 '21

This fixed it for me, thanks!


2
 likes
Reply
 
lsbyerley profile image
lsbyerley
•
Oct 21 '21

Awesome tutorial! I've noticed when you create a market item with createMarketItem() on the create-item page, the item.owner and item.seller values are not the same. Is this on purpose or should these values be the same? If they are the same, the item would show up on the my-assets page. Is the creator of the item not initially the owner?


1
 like
Reply
 
hoangsonsky profile image
hoangsonsky
•
Jul 30 '21

Thanks. I try to deploy to the ropsten network but I have a mistake.
It is Error: call revert exception (method="fetchMarketItems()", errorArgs=null, errorName=null, errorSignature=null, reason=null, code=CALL_EXCEPTION, version=abi/5.4.0)
How can I fix it?


2
 likes
Reply
 
theindianappguy profile image
Sanskar Tiwari
•
Oct 22 '21 • Edited on Oct 22

i am facing the same if you have solution please share solution


1
 like
Reply
 
jamesonhill profile image
Jameson Hill
•
Jul 8 '21

This is awesome, thanks @dabit3 ! Question. In the deploy script, what's the difference between deploying the NFTMarket contract and NFT contract? The former calls deploy() with no args, whereas the later calls deploy(NFTMarket.address).


Like
Reply
 
sumeetchawla profile image
Sumeet Chawla
•
Jul 18 '21

If you look at the constructor for NFT smart contract, it requires the NFTMarket address.


1
 like
Reply
 
jujumimi19 profile image
Frangipad
•
Aug 10 '21

I would like to code something similar for supply chain track application with nft token, somebody said that it is cheaper with tezos, i am a newbie and iwould like to know the best way to follow, any suggest?


1
 like
Reply
 
biggestorca profile image
Artem
•
Nov 26 '21

Hi 👋
Thanks for the lesson 🙏
It's really helpfully 😌
One moment: when testing - 'auctionPrice' in sample-test.js must be same as 'listingPrice' in contract. Otherwise test will fail with message: 'Error: VM Exception while processing transaction: reverted with reason string 'Please submit the asking price in order to the complete purchase''.
So set 'auctionPrice' value in test same as 'listingPrice' in contract to pass the test)


1
 like
Reply
 
hellosongi profile image
HelloSongi
•
Aug 23 '21

HOW DO I FIX THIS PLEASE?

./pages/index.js:12:0
Module not found: Can't resolve '../artifacts/contracts/Market.sol/NFTMarket.json'
10 |
11 | import NFT from '../artifacts/contracts/NFT.sol/NFT.json'

12 | import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'
13 |
14 | export default function Home() {
15 | const [nfts, setNfts] = useState([])

Import trace for requested module:

nextjs.org/docs/messages/module-no...


1
 like
Reply
 
chaun profile image
Chaun
•
Aug 26 '21

You need to add NFT -> /NFTMarket.sol/NFTMarket.json'


1
 like
Reply
View full discussion (207 comments)
Code of Conduct • Report abuse
Read next
jarjanazy profile image
Get To Know Annotations in Java
Abdulcelil Cercenazi - Feb 4

haseebseo profile image
Do's and Don’ts of Creating an Online Gaming Website
Abdul Haseeb Kamal - Jan 22

mistval profile image
Discord Webhook Powered Contact Form
Randall - Jan 27

iainfreestone profile image
🚀10 Trending projects on GitHub for web developers - 4th February 2022
Iain Freestone - Feb 4


Nader Dabit
Follow
Web and mobile developer specializing in cross-platform, cloud-enabled, and Web3 application development.
LOCATION
Madison, MS USA
WORK
DevRel Engineer at Edge & Node / The Graph Protocol
JOINED
Jan 6, 2019
More from Nader Dabit
Defining the web3 stack
#web3 #blockchain #ethereum
Building and Testing Smart Contracts with Foundry by Paradigm
#solidity #web3 #blockchain #webdev
10 Minute Tutorial - Full Stack GitHub Authentication with Supabase & React
#webdev #react #authentication #javascript
// contracts/NFT.sol
// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address contractAddress;

    constructor(address marketplaceAddress) ERC721("Metaverse Tokens", "METT") {
        contractAddress = marketplaceAddress;
    }

    function createToken(string memory tokenURI) public returns (uint) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(contractAddress, true);
        return newItemId;
    }
}