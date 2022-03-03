// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
import { ethers } from "ethers";

const MUMBAI_PRIVATE_KEY =
  "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const DATAHUB_API_KEY = "332fd9c4bc9c19b3ac0c34503dfd6e63";

async function main() {
  const [deployer] = await ethers.getSigners();

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
