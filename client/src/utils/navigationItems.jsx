export const NavBarItem = ({ title, classprops }) => (
	<li className={`mx-4 cursor-pointer ${classprops}`}>
		<a href={title.link} target='_blank'>
			{title.title}
		</a>
	</li>
);
export const navItems = [
	{
		title: "Market",
		link: "https://coinmarketcap.com",
	},
	{
		title: "Exchange",
		link: "https://www.investopedia.com/best-crypto-exchanges-5071855",
	},
	{
		title: "Services",
		link: "https://twitter.com/search?q=crypto+services",
	},
];

const transactionNavItem = [
	{
		title: "My Transactions",
		link: `https://etherscan.io/search?f=0&q=`,
	},
	{ title: "Ethereum Transactions", link: "https://etherscan.io" },
];

export const [connectedItem, notConnectedItem] = transactionNavItem;
