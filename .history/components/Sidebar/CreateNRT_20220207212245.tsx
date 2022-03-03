/* pages/create-item.js */
import { useState } from "react";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { useRouter } from "next/router";
import Web3Modal from "web3modal";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

import { nrtaddress, marketaddress } from "../../config";

import NRT from "../../artifacts/contracts/NRT.sol/NRT.json";
import Market from "../../artifacts/contracts/Market.sol/Market.json";

export default () => {
  return new Promise(async resolve => {
    const web3Modal = new Web3Modal(),
      connection = await web3Modal.connect(),
      provider = new ethers.providers.Web3Provider(connection),
      signer = provider.getSigner();

    let contract = new ethers.Contract(nrtaddress, NRT.abi, signer),
      transaction = await contract.createToken("http://google.comm");

    console.log("TOKEN T", transaction);
    let tx = await transaction.wait();
    let event = tx.events[0];
    console.log("TOKEN", tx);
    let value = event.args[2];
    let tokenId = value.toNumber();
    const price = ethers.utils.parseUnits(formInput.price, "ether");
    contract = new ethers.Contract(marketaddress, Market.abi, signer);
    console.log("contract: ", contract);
    contract.on("MarketItemCreated", async function(event) {
      console.log("event---->", event);
    });
    console.log("getting listing price");
    let listingPrice = await contract.getListingPrice();
    console.log(listingPrice);

    listingPrice = listingPrice.toString();
    console.log("creating market item");
    transaction = await contract.createMarketItem(nrtaddress, tokenId, price, {
      value: listingPrice
    });
    console.log(transaction);
    await transaction.wait();
  });
};
