import abi from "./Transactions.json";

export const contractABI = abi.abi;
export const contractAddress = `0x${process.env.REACT_APP_CONTRACT_ADDRESS}`;
