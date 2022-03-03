require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("hardhat-abi-exporter");

const MUMBAI_PRIVATE_KEY1 = "0x5AFC1B70F432cc5327A86480c44139d348Cc9fAF";
const MUMBAI_PRIVATE_KEY2 = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com`,
      accounts: []
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
