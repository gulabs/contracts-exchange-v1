import { ethers } from "hardhat";
import env from "./load-env";

export default async function deployExchange({
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
  console.log("\nDeploy Exchange with following parameters:");
  console.log(`
    currencyManager: ${currencyManager},
    executionManager: ${executionManager},
    royaltyFeeManager: ${royaltyFeeManager},
    weth: ${weth},
    FEE_RECEIPT_ADDRESS: ${env.FEE_RECEIPT_ADDRESS}
  `);
  const Exchange = await ethers.getContractFactory("GUNftMarketplaceExchange");
  const exchange = await Exchange.deploy(
    currencyManager,
    executionManager,
    royaltyFeeManager,
    weth,
    env.FEE_RECEIPT_ADDRESS
  );
  await exchange.deployed();
  console.log("Exchange deployed to:", exchange.address);
  return exchange.address;
}
