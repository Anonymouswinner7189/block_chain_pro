require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/slYjPTeTAXRQ6N2AXzBI-9cC0F4yC5AG",
      accounts: [""],
    },
  },
};
