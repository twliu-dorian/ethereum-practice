const hre = require("hardhat");
const dotenv = require("dotenv");
dotenv.config();
const ownerAddress = process.env.OWNER_ADDRESS;

async function main() {
    const ERC721 = await hre.ethers.getContractFactory("JHU_ETH_Hackathon");
    const erc721 = await ERC721.deploy(ownerAddress);
    await erc721.waitForDeployment();
    console.log("erc721 nft address:", await erc721.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});