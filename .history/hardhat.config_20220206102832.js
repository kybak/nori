require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
