import { ethers } from "hardhat";
import env from "./load-env";

export default async function deployRoyaltySystem(): Promise<{
  royaltyFeeManager: string;
  royaltyFeeRegistry: string;
  royaltyFeeSetter: string;
}> {
  // 1.RoyaltyFeeRegistry
  let royaltyFeeRegistry = env.ROYALTY_FEE_REGISTRY_ADDRESS;
  if (!royaltyFeeRegistry) {
    const RoyaltyFeeRegistry = await ethers.getContractFactory("RoyaltyFeeRegistry");
    console.log("\nDeploy RoyaltyFeeRegistry with following parameters:");
    console.log(`
      ROYALTY_FEE_LIMIT: ${env.ROYALTY_FEE_LIMIT}
    `);
    const royaltyFeeRegistry_ = await RoyaltyFeeRegistry.deploy(env.ROYALTY_FEE_LIMIT);
    await royaltyFeeRegistry_.deployed();
    royaltyFeeRegistry = royaltyFeeRegistry_.address;
    console.log("RoyaltyFeeRegistry deployed to:", royaltyFeeRegistry);
  } else {
    console.log("Using exist RoyaltyFeeRegistry:", royaltyFeeRegistry);
  }

  // 2. RoyaltyFeeSetter
  let royaltyFeeSetter = env.ROYALTY_FEE_SETTER_ADDRESS;
  if (!royaltyFeeSetter) {
    console.log("\nDeploy RoyaltyFeeSetter with following parameters:");
    console.log(`
      royaltyFeeRegistry: ${royaltyFeeRegistry}
    `);
    const RoyaltyFeeSetter = await ethers.getContractFactory("RoyaltyFeeSetter");
    const royaltyFeeSetter_ = await RoyaltyFeeSetter.deploy(royaltyFeeRegistry);
    await royaltyFeeSetter_.deployed();
    royaltyFeeSetter = royaltyFeeSetter_.address;
    console.log("RoyaltyFeeSetter deployed to:", royaltyFeeSetter);
  } else {
    console.log("Using exist RoyaltyFeeSetter:", royaltyFeeSetter);
  }

  // 3. RoyaltyFeeSetter
  let royaltyFeeManager = env.ROYALTY_FEE_MANAGER_ADDRESS;
  if (!royaltyFeeManager) {
    console.log("\nDeploy RoyaltyFeeManager with following parameters:");
    console.log(`
      royaltyFeeRegistry: ${royaltyFeeRegistry}
    `);
    const RoyaltyFeeManager = await ethers.getContractFactory("RoyaltyFeeManager");
    const royaltyFeeManager_ = await RoyaltyFeeManager.deploy(royaltyFeeRegistry);
    await royaltyFeeManager_.deployed();
    royaltyFeeManager = royaltyFeeManager_.address;
    console.log("RoyaltyFeeManager deployed to:", royaltyFeeManager);
  } else {
    console.log("Using exist RoyaltyFeeManager:", royaltyFeeManager);
  }

  // 4. Transfer ownership of RoyaltyFeeRegistry to RoyaltyFeeSetter
  console.log("\nTransfer ownership of CurrencyManager to:");
  console.log(`royaltyFeeSetter: ${royaltyFeeSetter}`);
  const RoyaltyFeeRegistry = await ethers.getContractFactory("RoyaltyFeeRegistry");
  const royaltyFeeRegistry_ = RoyaltyFeeRegistry.attach(royaltyFeeRegistry);
  await royaltyFeeRegistry_.transferOwnership(royaltyFeeSetter);

  return { royaltyFeeManager, royaltyFeeRegistry, royaltyFeeSetter };
}
