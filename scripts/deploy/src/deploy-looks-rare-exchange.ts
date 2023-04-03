import { ethers } from "hardhat";
import env from "./load-env";

export default async function deployLooksRareExchange({
  currencyManager,
  executionManager,
  royaltyFeeManager,
  weth,
}: {
  currencyManager: string;
  executionManager: string;
  royaltyFeeManager: string;
  weth: string;
}): Promise<string> {
  console.log("\nDeploy LooksRareExchange with following parameters:");
  console.log(`
    currencyManager: ${currencyManager},
    executionManager: ${executionManager},
    royaltyFeeManager: ${royaltyFeeManager},
    weth: ${weth},
    FEE_RECEIPT_ADDRESS: ${env.FEE_RECEIPT_ADDRESS}
  `);
  const LooksRareExchange = await ethers.getContractFactory("LooksRareExchange");
  const looksRareExchange = await LooksRareExchange.deploy(
    currencyManager,
    executionManager,
    royaltyFeeManager,
    weth,
    env.FEE_RECEIPT_ADDRESS
  );
  await looksRareExchange.deployed();
  console.log("LooksRareExchange deployed to:", looksRareExchange.address);
  return looksRareExchange.address;
}
