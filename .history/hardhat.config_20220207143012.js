require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("hardhat-abi-exporter");

const MUMBAI_PRIVATE_KEY1 =
  "c627cde4415723ce1d5e8b2d851e36cb4b7a61fdd254d2000a9351cc7e5199f8";
const MUMBAI_PRIVATE_KEY2 = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/CovsWXjKj5tr0B3WHGMCh__1-KtVzfp9`,
      accounts: [`0x${MUMBAI_PRIVATE_KEY1}`, MUMBAI_PRIVATE_KEY2]
    }
  },
  solidity: {
    version: "0.8.4"
  },
  abiExporter: {
    path: "./abi/",
    clear: true,
    runOnCompile: true
  }
};
