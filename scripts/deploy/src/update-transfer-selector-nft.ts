import { ethers } from "hardhat";

export default async function updateTransferSelectorNFT(
  looksRareExchange: string,
  transferSelectorNFT: string
): Promise<void> {
  const LooksRareExchange = await ethers.getContractFactory("LooksRareExchange");
  const looksRareExchange_ = LooksRareExchange.attach(looksRareExchange);

  await looksRareExchange_.updateTransferSelectorNFT(transferSelectorNFT);
}
