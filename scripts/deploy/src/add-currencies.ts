import { ethers } from "hardhat";
import env from "./load-env";

export default async function addCurrencies(currencyManager: string, { weth }: { weth: string }): Promise<void> {
  const CurrencyManager = await ethers.getContractFactory("CurrencyManager");
  const currencyManager_ = CurrencyManager.attach(currencyManager);

  if (env.SHOULD_ADD_WETH_CURRENCY) {
    console.log("\nAdd WETH currency to CurrencyManager with following parameters:");
    console.log(`
      weth: ${weth}
    `);
    await currencyManager_.addCurrency(weth);
  }

  if (env.SHOULD_ADD_WETH_CURRENCY) {
    console.log("\nAdd WETH currency to CurrencyManager with following parameters:");
    console.log(`
      weth: ${weth}
    `);
    await currencyManager_.addCurrency(weth);
  }
}
