require("dotenv").config;
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
module.exports = {
	solidity: "0.8.0",
	networks: {
		goerli: {
			url: "https://eth-goerli.g.alchemy.com/v2/9h0jHXKC1fizIeFP1svGiQ3lpxo5xFD4",
			accounts: [`0x${import.meta.env.VITE_PK}`],
		},
	},
};
