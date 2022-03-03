// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

const MUMBAI_PRIVATE_KEY =
  "c627cde4415723ce1d5e8b2d851e36cb4b7a61fdd254d2000a9351cc7e5199f8";
const DATAHUB_API_KEY = "YOUR_DATAHUB_API_KEY";

async function main() {
  const Market = await hre.ethers.getContractFactory("Market");
  const market = await Market.deploy();
  await market.deployed();
  console.log("market deployed to:", market.address);

  const NRT = await hre.ethers.getContractFactory("NRT");
  const nrt = await NRT.deploy(market.address);
  await nrt.deployed();
  console.log("nrt deployed to:", nrt.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
