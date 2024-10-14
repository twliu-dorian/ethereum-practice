# Blockchain Interaction Practice

## Smart Contract Info

- contract address: `0xe363CBc196c0a9BB461b96F345F0d17219EC5472`
- contract owner: `0x27DE3fd75B0540DB22E41038ac692116e0dfea0B`
- contract creation: `https://sepolia.etherscan.io/tx/0xa2cddcb67f8e93f7942b77bf89374629bd43f401aeaa8b2845b0be3965639c5d`
- first safemint transaction: `https://sepolia.etherscan.io/tx/0xd925c960353185c0c102ac8c4beffb5072e12cae8c1204b95041a307f386a78e`

## Introdcution

This guide will walk you through the process of interacting with an ERC721 (Non-Fungible Token) smart contract on the Ethereum blockchain using different programming languages. ERC721 is a standard for representing ownership of unique tokens, such as collectibles or artwork.

## Prerequisites

- Basic understanding of JavaScript and Solidity.
- Node.js and npm installed on your computer.
- Basic knowledge of the command line.
- Some Ether in your wallet for gas fees we use Sepolia testnet. Use Chainlink faucet: https://faucets.chain.link/

## Setups to Interact with an ERC721 Contract

1. Connect to the Ethereum Network
   First, you'll need to connect to an Ethereum node. You can use public nodes like Infura or run your own node. You can use rpc providers like Infura or Alchemy to connect to the Ethereum network. You can use Infura fro rpc provider: https://www.infura.io/

2. Find the Contract Address and ABI (provided in the smart contract info section)

- Locate the address of the ERC721 contract you want to interact with.
- Find the contract's ABI (Application Binary Interface). This is usually available in the contract's documentation or on Etherscan.

3. Interact with the Contract

- JavaScript (using ethers.js)
- Python (using web3.py)
- C# (using Nethereum)

### Frontend Approach: Using MetaMask

Step 1: Set Up Your Development Environment

- Create a new web project using your preferred framework (e.g., React, Vue, or plain HTML/JS).
- Install the Web3.js or ethers.js library in your project.

Step 2: Connect to MetaMask

- Create a function to detect if MetaMask is installed in the browser.
- If MetaMask is detected, request account access using the ethereum.request method
- Handle the case where MetaMask is not detected or the user denies access.

Step 3: Set Up Contract Interaction

- Define the contract address and ABI (Application Binary Interface) for your ERC721 contract.
- Create a new Web3 instance using the ethereum provider from MetaMask.
- Create a contract instance using the Web3 eth.Contract method with your ABI and address.

Step 4: Implement Contract Functions

- Create functions for common ERC721 operations:
- safeMint: Call the safeMint method on your contract instance.

Step 5: Create User Interface

- Design a simple UI with buttons or forms for each contract interaction.
- Connect your UI elements to the corresponding contract interaction functions.
- Implement a way to display results or errors to the user.

Step 6: Transaction Verification

- Use your UI to trigger a transaction
- Capture the transaction hash returned by MetaMask after the user confirms the transaction.
- Implement a mechanism to wait for the transaction to be mined. This could be a simple timeout or a more sophisticated polling mechanism.
- Open your web browser and go to https://sepolia.etherscan.io/
- Check that the transaction status is "Success".
- Verify that the "From" address matches your wallet address.
- Confirm that the "To" address matches your ERC721 contract address.
- Review the transaction data to ensure it matches the operation you intended (e.g., safeMint).

### Backend Approach: Using CLI or RESTful API

Step 1: Set Up Your Development Environment

- Create a new project select whatever language you like.
- Install the Ethereum client library for Ethereum interaction.

Step 2: Configure Ethereum Connection

- Set up a connection to an Ethereum node (e.g., using Infura).
- Create a wallet instance using a private key (ensure this is stored securely).

Step 3: Set Up Contract Interaction

- Define the contract address and ABI for your ERC721 contract.
- Create a contract instance using Ethereum client library Contract class.

Step 4: Implement CLI Commands

- Use a library to parse command-line arguments.
- Create functions for common ERC721 operations:
- safeMint: Call the safeMint method on your contract instance

Step 5: Verify Transaction on Sepolia Scan

- Use your CLI command or API endpoint to initiate a transaction.
- Retrieve the transaction hash from the response of your Ethereum client library
- Implement a mechanism to wait for the transaction to be mined. This could be a simple timeout or a more sophisticated polling mechanism.
- Open your web browser and go to https://sepolia.etherscan.io/
- Check that the transaction status is "Success".
- Verify that the "From" address matches your wallet address.
- Confirm that the "To" address matches your ERC721 contract address.
- Review the transaction data to ensure it matches the operation you intended (e.g., safeMint).
