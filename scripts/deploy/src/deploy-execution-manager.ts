import { ethers } from "hardhat";
import env from "./load-env";

export default async function deployExecutionManager(): Promise<string> {
  let executionManager = env.EXECUTION_MANAGER_ADDRESS;
  if (!executionManager) {
    const ExecutionManager = await ethers.getContractFactory("ExecutionManager");
    const executionManager_ = await ExecutionManager.deploy();
    await executionManager_.deployed();
    executionManager = executionManager_.address;
    console.log("ExecutionManager deployed to:", executionManager);
  } else {
    console.log("Using exist ExecutionManager:", executionManager);
  }

  return executionManager;
}
