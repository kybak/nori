/* test/sample-test.js */
describe("Market", function() {
  it("Should create and execute market sales", async function() {
    /* deploy the marketplace */
    const Market = await ethers.getContractFactory("Market");
    const market = await Market.deploy();
    await market.deployed();
    const marketAddress = market.address;

    /* deploy the nrt contract */
    const NRT = await ethers.getContractFactory("NRT");
    const nrt = await NRT.deploy(marketAddress);
    await nrt.deployed();
    const nrtContractAddress = nrt.address;

    let listingPrice = await market.getListingPrice();
    listingPrice = listingPrice.toString();
    console.log("listing price: ", listingPrice);

    const auctionPrice = ethers.utils.parseUnits("1", "ether");

    /* create two tokens */
    await nrt.createToken("https://www.mytokenlocation.com");
    await nrt.createToken("https://www.mytokenlocation2.com");

    /* put both tokens for sale */
    await market.createMarketItem(nrtContractAddress, 1, auctionPrice, {
      value: listingPrice
    });
    await market.createMarketItem(nrtContractAddress, 2, auctionPrice, {
      value: listingPrice
    });

    const [_, buyerAddress] = await ethers.getSigners();
    console.log(buyerAddress);

    /* execute sale of token to another user */
    await market
      .connect(buyerAddress)
      .createMarketSale(nrtContractAddress, 1, { value: auctionPrice });

    /* query for and return the unsold items */
    items = await market.fetchMarketItems();
    items = await Promise.all(
      items.map(async i => {
        const tokenUri = await nrt.tokenURI(i.tokenId);
        let item = {
          price: i.price.toString(),
          tokenId: i.tokenId.toString(),
          seller: i.seller,
          owner: i.owner,
          tokenUri
        };
        return item;
      })
    );
    console.log("items: ", items);
  });
});
