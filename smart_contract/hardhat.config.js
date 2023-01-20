require('@nomicfoundation/hardhat-toolbox');

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/vIjSIPvt-zAiryu0uB4XnEWSMFARtdD_',
      accounts: ['65b29dc6cee4e66d40e88034b7fc195dc60004b5a607ba9f91d25ffe4122465d'],
    },
  },
};