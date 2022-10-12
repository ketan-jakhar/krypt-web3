import abi from "./Transactions.json";

export const contractABI = abi.abi;
export const contractAddress = `0x${import.meta.env.VITE_CONTRACT_ADDRESS}`;
