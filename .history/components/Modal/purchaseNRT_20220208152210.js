import { ethers } from "ethers";
import Web3Modal from "web3modal";

import { nrtaddress, marketaddress } from "../../config";

import Market from "../../artifacts/contracts/Market.sol/Market.json";

async function buyNrt(nrt) {
  return new Promise((resolve, reject) => {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(marketaddress, Market.abi, signer);

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nrt.price.toString(), "ether");
    const transaction = await contract.createMarketSale(
      nrtaddress,
      nrt.tokenId,
      {
        value: price
      }
    );
    await transaction.wait();

   resolve(true)
  });
}

export default buyNrt;
