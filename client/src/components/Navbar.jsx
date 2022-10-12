import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { TransactionContext } from "../context/TransactionContext";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
	<li className={`mx-4 cursor-pointer ${classprops}`}>
		<a href={title.link} target='_blank'>
			{title.title}
		</a>
	</li>
);
const navItems = [
	{ title: "Market", link: "https://coinmarketcap.com" },
	{
		title: "Exchange",
		link: "https://www.investopedia.com/best-crypto-exchanges-5071855",
	},
	{ title: "Services", link: "https://twitter.com/search?q=crypto+services" },
	// { title: "Ethereum Transactions", link: "https://etherscan.io" },
];
const transactionNavItem = [
	{
		title: "Your Transactions",
		link: `https://etherscan.io/search?f=0&q=`,
	},
	{ title: "Ethereum Transactions", link: "https://etherscan.io" },
];
const [connectedItem, notConnectedItem] = transactionNavItem;

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = React.useState(false);
	const { connectWallet, currentAccount } = useContext(TransactionContext);

	return (
		<nav className='w-full flex md:justify-center justify-between items-center p-4'>
			<div className='md:flex-[0.5] flex-initial justify-center items-center'>
				<img src={logo} alt='logo' className='w-32 cursor-pointer' />
			</div>
			<ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
				{navItems.map((item, index) => (
					<NavBarItem key={item.title + index} title={item} />
				))}
				{!currentAccount ? (
					<li className={"mx-4 cursor-pointer Transactions" + navItems.length}>
						<a href={notConnectedItem.link} target='_blank'>
							{notConnectedItem.title}
						</a>
					</li>
				) : (
					<li className={"mx-4 cursor-pointer Transactions" + navItems.length}>
						<a href={connectedItem.link + currentAccount} target='_blank'>
							{connectedItem.title}
						</a>
					</li>
				)}

				{!currentAccount ? (
					<li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
						<button
							type='button'
							onClick={connectWallet}
							className='flex flex-row justify-center items-center bg-[#2952e3]rounded-full cursor-pointer hover:bg-[#2546bd]'
						>
							<BiLogIn className='text-white mr-2' />
							<p className='text-white text-base'>Connect Wallet</p>
						</button>
					</li>
				) : (
					""
				)}
			</ul>

			<div className='flex relative'>
				{!toggleMenu && (
					<HiMenuAlt4
						fontSize={28}
						className='text-white md:hidden cursor-pointer'
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<AiOutlineClose
						fontSize={28}
						className='text-white md:hidden cursor-pointer'
						onClick={() => setToggleMenu(false)}
					/>
				)}
				{toggleMenu && (
					<ul
						className='z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'
					>
						<li className='text-xl w-full my-2'>
							<AiOutlineClose onClick={() => setToggleMenu(false)} />
						</li>
						{["Market", "Exchange", "Tutorials", "Wallets"].map(
							(item, index) => (
								<NavBarItem
									key={item + index}
									title={item}
									classprops='my-2 text-lg'
								/>
							)
						)}
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
