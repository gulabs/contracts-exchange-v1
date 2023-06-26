import { ethers } from "hardhat";
import env from "./load-env";

export default async function deployTransferSelectorNFT(exchange: string): Promise<string> {
  // 1. TransferManagerERC721
  let transferManagerERC721 = env.TRANSFER_MANAGER_ERC721_ADDRESS;

  if (!transferManagerERC721) {
    console.log("\nDeploy TransferManagerERC721 with following parameters:");
    console.log(`Exchange: ${exchange}`);
    const TransferManagerERC721 = await ethers.getContractFactory("TransferManagerERC721");
    const transferManagerERC721_ = await TransferManagerERC721.deploy(exchange);
    await transferManagerERC721_.deployed();

    transferManagerERC721 = transferManagerERC721_.address;
    console.log("TransferManagerERC721 deployed to:", transferManagerERC721);
  } else {
    console.log("Using exist TransferManagerERC721:", transferManagerERC721);
  }

  // 2. TransferManagerERC1155
  let transferManagerERC1155 = env.TRANSFER_MANAGER_ERC1155_ADDRESS;

  if (!transferManagerERC1155) {
    console.log("\nDeploy TransferManagerERC1155 with following parameters:");
    console.log(`
      Exchange: ${exchange}
    `);
    const TransferManagerERC1155 = await ethers.getContractFactory("TransferManagerERC1155");
    const transferManagerERC1155_ = await TransferManagerERC1155.deploy(exchange);
    await transferManagerERC1155_.deployed();

    transferManagerERC1155 = transferManagerERC1155_.address;
    console.log("TransferManagerERC1155 deployed to:", transferManagerERC1155);
  } else {
    console.log("Using exist TransferManagerERC1155:", transferManagerERC1155);
  }

  // 3. TransferManagerNonCompliantERC721
  let transferManagerNonCompliantERC721 =
    env.TRANSFER_MANAGER_NON_COMPLIANT_ERC721_ADDRESS === false
      ? ethers.constants.AddressZero
      : env.TRANSFER_MANAGER_NON_COMPLIANT_ERC721_ADDRESS;

  if (!transferManagerNonCompliantERC721) {
    console.log("\nDeploy TransferManagerNonCompliantERC721 with following parameters:");
    console.log(`
      Exchange: ${exchange}
    `);
    const TransferManagerNonCompliantERC721 = await ethers.getContractFactory("TransferManagerNonCompliantERC721");
    const transferManagerNonCompliantERC721_ = await TransferManagerNonCompliantERC721.deploy(exchange);
    await transferManagerNonCompliantERC721_.deployed();

    transferManagerNonCompliantERC721 = transferManagerNonCompliantERC721_.address;
    console.log("TransferManagerNonCompliantERC721 deployed to:", transferManagerNonCompliantERC721);
  } else {
    console.log("Using exist TransferManagerNonCompliantERC721:", transferManagerNonCompliantERC721);
  }

  // 4. TransferManagerNonCompliantERC721
  let transferSelectorNFT = env.TRANSFER_SELECTOR_NFT_ADDRESS;

  if (!transferSelectorNFT) {
    console.log("\nDeploy TransferSelectorNFT with following parameters:");
    console.log(`
      transferManagerERC721: ${transferManagerERC721},
      transferManagerERC1155: ${transferManagerERC1155}
      `);
    const TransferSelectorNFT = await ethers.getContractFactory("TransferSelectorNFT");
    const transferSelectorNFT_ = await TransferSelectorNFT.deploy(transferManagerERC721, transferManagerERC1155);
    await transferSelectorNFT_.deployed();

    transferSelectorNFT = transferSelectorNFT_.address;
    console.log("TransferSelectorNFT deployed to:", transferSelectorNFT);
  } else {
    console.log("Using exist TransferSelectorNFT:", transferSelectorNFT);
  }

  return transferSelectorNFT;
}
