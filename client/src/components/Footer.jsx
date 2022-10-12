import React, { useContext } from "react";
import {
	navItems,
	connectedItem,
	notConnectedItem,
} from "../utils/navigationItems";
import { TransactionContext } from "../context/TransactionContext";
import logo from "../../images/logo.png";

const Footer = () => {
	const { currentAccount } = useContext(TransactionContext);
	return (
		<div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
			<div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
				<div className='flex flex-[0.5] justify-center items-center'>
					<img src={logo} alt='logo' className='w-32' />
				</div>
				<div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
					{navItems.map((item, index) => (
						<a
							href={item.link}
							className='text-white text-base text-center mx-2 cursor-pointer'
						>
							{item.title}
						</a>
					))}

					{!currentAccount ? (
						<a
							href={notConnectedItem.link}
							className='text-white text-base text-center mx-2 cursor-pointer'
							target='_blank'
						>
							{notConnectedItem.title}
						</a>
					) : (
						<a
							className='text-white text-base text-center mx-2 cursor-pointer'
							href={connectedItem.link + currentAccount}
							target='_blank'
						>
							{connectedItem.title}
						</a>
					)}
				</div>
			</div>

			<div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 ' />

			<div className='sm:w-[90%] w-full flex justify-center items-center mt-3 py-2'>
				<p className='text-white text-center text-xs'>
					Updated with ❤ by <span className='author'>&nbsp;Ketan Jakhar</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
