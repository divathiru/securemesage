# Secure Messaging App - Blockchain Documentation

This directory contains the blockchain components of the Secure Messaging App, which utilizes smart contracts to facilitate secure messaging on the blockchain.

## Directory Structure

- **contracts/**: Contains the Solidity smart contract files.
  - **Messaging.sol**: The smart contract that defines the structure and functions for sending and receiving messages securely.

- **migrations/**: Contains migration scripts for deploying smart contracts.
  - **1_initial_migration.js**: Script to manage the initial migration of the smart contracts.

- **test/**: Contains test files for the smart contracts.
  - **messaging.test.js**: Tests for the Messaging smart contract to ensure all functionalities work as expected.

- **truffle-config.js**: Configuration file for Truffle, specifying network settings and compiler options for deploying the smart contracts.

## Getting Started

To get started with the blockchain part of the Secure Messaging App, follow these steps:

1. **Install Truffle**: Make sure you have Truffle installed globally. You can install it using npm:
   ```
   npm install -g truffle
   ```

2. **Compile Contracts**: Navigate to the blockchain directory and compile the smart contracts:
   ```
   truffle compile
   ```

3. **Deploy Contracts**: Deploy the contracts to your desired network (e.g., Ganache) using:
   ```
   truffle migrate
   ```

4. **Run Tests**: Execute the tests to ensure everything is functioning correctly:
   ```
   truffle test
   ```

## Additional Information

For more detailed information about each component, refer to the respective files and their comments. This documentation will be updated as the project evolves.