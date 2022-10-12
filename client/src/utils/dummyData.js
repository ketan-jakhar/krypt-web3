const generateTimestamp = () => {
	const date = Math.floor(Math.random() * 30) + 1;
	const month = Math.floor(Math.random() * 12) + 1;
	const year = Math.floor(Math.random() * 1) + 2021;
	const hour = Math.floor(Math.random() * 24);
	const minute = Math.floor(Math.random() * 60);
	const second = Math.floor(Math.random() * 60);
	return `${date}/${month}/${year} ${hour}:${minute}:${second}`;
};

export default [
	{
		id: 1,
		url: "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284",
		message: "",
		timestamp: generateTimestamp(),
		addressFrom: "0xCF8e569A97C423952DdFf902375C7C76549A7bGT",
		amount: "0.58",
		addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1acfdbE",
	},
	{
		id: 2,
		url: "https://media4.popsugar-assets.com/files/2013/11/07/832/n/1922398/eb7a69a76543358d_28.gif",
		message: "",
		timestamp: generateTimestamp(),
		addressFrom: "0xCF8e569A97C423952DdFf902375C7C76549ADK04",
		amount: "2.5",
		addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1acfFg7",
	},
	{
		id: 3,
		url: "https://acegif.com/wp-content/uploads/gif-shaking-head-38.gif",
		message: "",
		timestamp: generateTimestamp(),
		addressFrom: "0xCF8e569A97C423952DdFf902375C7C76549A6A90",
		amount: "1",
		addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1ackHbE",
	},
	{
		id: 4,
		url: "https://i.pinimg.com/originals/68/a0/9e/68a09e774e98242871c2db0f99307420.gif",
		message: "",
		timestamp: generateTimestamp(),
		addressFrom: "0xCF8e569A97C423952DdFf902375C7C76549bC8E",
		amount: "7",
		addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1acJF4S	",
	},
	{
		id: 5,
		url: "https://i.pinimg.com/originals/73/d3/a1/73d3a14d212314ab1f7268b71d639c15.gif",
		message: "",
		timestamp: generateTimestamp(),
		addressFrom: "0xCF8e569A97C4as8fFG39VH2375C7C76549A6Nf6",
		amount: "0.01",
		addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1acCgH9",
	},
	{
		id: 6,
		url: "https://www.omnisend.com/blog/wp-content/uploads/2016/09/funny-gifs-9.gif",
		message: "",
		timestamp: generateTimestamp(),
		addressFrom: `0xCF8e569A97C423952DdFf902375C7C76549A5F09`,
		amount: "0.5",
		addressTo: "0x8aa395Ab97837576aF9cd6946C79024ef1acfCh7",
	},
];
