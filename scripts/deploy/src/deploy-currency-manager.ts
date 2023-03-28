import { ethers } from "hardhat";
import env from "./load-env";

export default async function deployCurrencyManager(): Promise<string> {
  let currencyManager = env.CURRENCY_MANAGER_ADDRESS;
  if (!currencyManager) {
    const CurrencyManager = await ethers.getContractFactory("CurrencyManager");
    const currencyManager_ = await CurrencyManager.deploy();
    await currencyManager_.deployed();

    currencyManager = currencyManager_.address;
    console.log("CurrencyManager deployed to:", currencyManager);
  } else {
    console.log("Using exist CurrencyManager:", currencyManager);
  }

  return currencyManager;
}
