/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');

const { API_URL, PRIVATE_KEY, INFURA_ID } = process.env;
module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
       url: "https://rinkeby.infura.io/v3/" + INFURA_ID,
       chainId: 4,
       gasPrice: 20000000000,
       accounts: [`${PRIVATE_KEY}`]
    }
 },
 etherscan: {
    apiKey: "6Y4G5TH7JC76YCBA22RM4T1N877T2X8T8K"
 },
  solidity: {
    version:"0.8.9",
    settings: {
      optimizer: {
         enabled: true
      }
   }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};
