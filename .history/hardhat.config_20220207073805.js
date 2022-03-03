require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const MUMBAI_PRIVATE_KEY =
  "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const DATAHUB_API_KEY = "332fd9c4bc9c19b3ac0c34503dfd6e63";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    mumbai: {
      url: `https://matic-mumbai--jsonrpc.datahub.figment.io/apikey/${DATAHUB_API_KEY}`,
      accounts: [`0x${MUMBAI_PRIVATE_KEY}`]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  abiExporter: {
    path: "./abi/",
    clear: true
  }
};