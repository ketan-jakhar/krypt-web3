import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();
	const transactionContract = new ethers.Contract(
		contractAddress,
		contractABI,
		signer
	);

	// console.log({
	// 	provider,
	// 	signer,
	// 	transactionContract,
	// });

	return transactionContract;
};

export const TransactionProvider = ({ children }) => {
	const [currentAccount, setCurrentAccount] = useState("");
	const [formData, setFormData] = useState({
		addressTo: "",
		amount: "",
		keyword: "",
		message: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [transactionCount, setTransactionCount] = useState(
		localStorage.getItem("transactionCount")
	);

	const handleChange = (e, name) => [
		setFormData((prevState) => ({ ...prevState, [name]: e.target.value })),
	];

	const checkIfWalletIsConnected = async () => {
		try {
			if (!ethereum) {
				return alert("Make sure you have metamask!");
			} else {
				console.log("We have the ethereum object", ethereum);
			}

			const accounts = await ethereum.request({ method: "eth_accounts" });

			console.log("Accounts: ", accounts);

			if (accounts.length) {
				setCurrentAccount(accounts[0]);
				console.log("Found an authorized account:", accounts[0]);
				//getAllTransactions();
			} else {
				console.log("No authorized account found");
			}
		} catch (error) {
			console.error(error);
			throw new Error("No ethereum object found");
		}
	};

	const connectWallet = async () => {
		try {
			if (!ethereum) return alert("Please install metamask");
			const accounts = await ethereum.request({
				method: "eth_requestAccounts",
			});

			setCurrentAccount(accounts[0]);
		} catch (error) {
			console.error(error);
			throw new Error("No ethereum object found");
		}
	};

	const sendTransaction = async () => {
		try {
			if (!ethereum) return alert("Please install metamask");
			const { addressTo, amount, keyword, message } = formData;
			//get data from the form
			const transactionContract = getEthereumContract();
			const parsedAmount = ethers.utils.parseEther(amount);
			await ethereum.request({
				method: "eth_sendTransaction",
				params: [
					{
						from: currentAccount,
						to: addressTo,
						gas: "0x5208", // 21000 GWEI
						value: parsedAmount._hex,
					},
				],
			});

			const transactionHash = await transactionContract.addToBlockchain(
				addressTo,
				parsedAmount,
				message,
				keyword
			);

			setIsLoading(true);
			console.log(`Loading - ${transactionHash.hash}`);
			await transactionHash.wait();
			setIsLoading(false);
			console.log(`Success - ${transactionHash.hash}`);

			const transactionCount = await transactionContract.getTransactionCount();
			console.log("Transaction Count: ", transactionCount);

			setTransactionCount(transactionCount.toNumber());
		} catch (error) {
			console.error(error);
			throw new Error("No ethereum object found");
		}
	};

	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	return (
		<TransactionContext.Provider
			value={{
				connectWallet,
				currentAccount,
				formData,
				setFormData,
				handleChange,
				sendTransaction,
			}}
		>
			{children}
		</TransactionContext.Provider>
	);
};
