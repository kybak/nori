export default () => {
  const handleClick = () => {
    console.log("creating token");
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    let contract = new ethers.Contract(nrtaddress, NRT.abi, signer);
    console.log(contract);
    let transaction = await contract.createToken(url);
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
  };

  return <></>;
};
