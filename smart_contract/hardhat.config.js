require("@nomiclabs/hardhat-waffle");

module.exports = {
	solidity: "0.8.0",
	networks: {
		goerli: {
			url: "https://eth-goerli.g.alchemy.com/v2/9h0jHXKC1fizIeFP1svGiQ3lpxo5xFD4",
			accounts: [
				"0x9d227ad1caa73054e11f3585fd3d088f95343f5b05c0fc9d9d3a547c36165d59",
			],
		},
	},
};
