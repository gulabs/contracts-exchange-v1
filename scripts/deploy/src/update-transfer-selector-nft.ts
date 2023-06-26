import { ethers } from "hardhat";

export default async function updateTransferSelectorNFT(exchange: string, transferSelectorNFT: string): Promise<void> {
  const Exchange = await ethers.getContractFactory("GUNftMarketplaceExchange");
  const exchange_ = Exchange.attach(exchange);

  await exchange_.updateTransferSelectorNFT(transferSelectorNFT);
}
