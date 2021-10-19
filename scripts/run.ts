// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

const main = async () => {
	// Hardhat always runs the compile task when running scripts with its command
	// line interface.
	const menaceContract = await hre.ethers.getContractFactory("MenaceNFT");
  
	// Start deployment, returning a promise that resolves to a contract object
	const menaceNFT = await menaceContract.deploy();
	console.log("Contract deployed to address:", menaceNFT.address);
}
  
const runMain = async () => {
	try {
	  await main();
	  process.exit(0);
	} catch (error) {
	  console.log(error);
	  process.exit(1);
	}
};
runMain();