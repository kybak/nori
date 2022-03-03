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
import { rejects } from "assert";

export default () => {
  return new Promise(async (resolve, reject) => {
    try {
      const web3Modal = new Web3Modal(),
        connection = await web3Modal.connect(),
        provider = new ethers.providers.Web3Provider(connection),
        signer = provider.getSigner();

      let contract = new ethers.Contract(nrtaddress, NRT.abi, signer),
        transaction = await contract.createToken("http://google.com");

      let tx = await transaction.wait();
      let event = tx.events[0],
        value = event.args[2],
        tokenId = value.toNumber();

      const price = ethers.utils.parseUnits("0.084", "ether");
      contract = new ethers.Contract(marketaddress, Market.abi, signer);
      let listingPrice = await contract.getListingPrice();
      listingPrice = listingPrice.toString();

      transaction = await contract.createMarketItem(
        nrtaddress,
        tokenId,
        price,
        {
          value: listingPrice
        }
      );

      await transaction.wait();
      resolve(true);
    } catch (err) {
      rejects(err);
    }
  });
};
