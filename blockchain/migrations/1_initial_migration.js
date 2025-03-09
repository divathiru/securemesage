// This file is used by Truffle to manage the deployment of smart contracts.
// It ensures that the initial migration is executed.

const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};