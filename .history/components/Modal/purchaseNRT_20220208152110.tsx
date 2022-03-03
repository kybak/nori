async function buyNrt(nrt) {
  /* needs the user to sign the transaction, so will use Web3Provider and sign it */
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(marketaddress, Market.abi, signer);

  /* user will be prompted to pay the asking proces to complete the transaction */
  const price = ethers.utils.parseUnits(nrt.price.toString(), "ether");
  const transaction = await contract.createMarketSale(nrtaddress, nrt.tokenId, {
    value: price
  });
  await transaction.wait();
}

export default buyNrt;
