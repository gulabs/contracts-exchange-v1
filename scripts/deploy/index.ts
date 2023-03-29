import preDeploy from "./src/pre-deploy";
import deployWETH from "./src/deploy-weth";
import deployCurrencyManager from "./src/deploy-currency-manager";
import addWETHCurrency from "./src/add-weth-currency";
import deployExecutionManager from "./src/deploy-execution-manager";
import deployExecutionStrategy from "./src/deploy-execution-strategy";
import addStrategies from "./src/add-strategies";
import deployRoyaltySystem from "./src/deploy-royalty-system";
import deployLooksRareExchange from "./src/deploy-looks-rare-exchange";
import deployTransferSelectorNFT from "./src/deploy-transfer-selector-nft";
import updateTransferSelectorNFT from "./src/update-transfer-selector-nft";
import transferOwnership from "./src/transfer-ownership";
import deployOrderValidatorV1 from "./src/deploy-order-validator-v1";

import env from "./src/load-env";
import { ethers } from "hardhat";

async function main() {
  await preDeploy();
  const weth = await deployWETH();
  const currencyManager = await deployCurrencyManager();
  await addWETHCurrency(currencyManager, weth);
  const executionManager = await deployExecutionManager();
  const {
    strategyAnyItemFromCollectionForFixedPrice,
    strategyAnyItemInASetForFixedPrice,
    strategyDutchAuction,
    strategyPrivateSale,
    strategyStandardSaleForFixedPrice,
    strategyAnyItemFromCollectionForFixedPriceV1B,
    strategyStandardSaleForFixedPriceV1B,
  } = await deployExecutionStrategy();

  await addStrategies({
    executionManager,
    strategyAnyItemFromCollectionForFixedPrice,
    strategyAnyItemInASetForFixedPrice,
    strategyDutchAuction,
    strategyPrivateSale,
    strategyStandardSaleForFixedPrice,
    strategyAnyItemFromCollectionForFixedPriceV1B,
    strategyStandardSaleForFixedPriceV1B,
  });

  const { royaltyFeeManager, royaltyFeeSetter } = await deployRoyaltySystem();
  const looksRareExchange = await deployLooksRareExchange({
    currencyManager,
    executionManager,
    royaltyFeeManager,
    weth,
  });
  const transferSelectorNFT = await deployTransferSelectorNFT(looksRareExchange);
  await updateTransferSelectorNFT(looksRareExchange, transferSelectorNFT);

  console.log("Transfer ownership of CurrencyManager to:");
  await transferOwnership(currencyManager, env.CURRENCY_MANAGER_OWNER_ADDRESS);
  console.log("Transfer ownership of ExecutionManager to:");
  await transferOwnership(executionManager, env.EXECUTION_MANAGER_OWNER_ADDRESS);

  if (strategyDutchAuction !== ethers.constants.AddressZero) {
    console.log("Transfer ownership of StrategyDutchAuction to:");
    await transferOwnership(strategyDutchAuction, env.STRATEGY_DUTCH_AUCTION_OWNER_ADDRESS);
  }

  if (strategyAnyItemFromCollectionForFixedPriceV1B !== ethers.constants.AddressZero) {
    console.log("Transfer ownership of StrategyAnyItemFromCollectionForFixedPriceV1B to:");
    await transferOwnership(
      strategyAnyItemFromCollectionForFixedPriceV1B,
      env.STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_V1B_OWNER_ADDRESS
    );
  }

  if (strategyStandardSaleForFixedPriceV1B !== ethers.constants.AddressZero) {
    console.log("Transfer ownership of StrategyStandardSaleForFixedPriceV1B to:");
    await transferOwnership(
      strategyStandardSaleForFixedPriceV1B,
      env.STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_V1B_OWNER_ADDRESS
    );
  }

  console.log("Transfer ownership of RoyaltyFeeSetter to:");
  await transferOwnership(royaltyFeeSetter, env.ROYALTY_FEE_SETTER_OWNER_ADDRESS);
  console.log("Transfer ownership of RoyaltyFeeManager to:");
  await transferOwnership(royaltyFeeManager, env.ROYALTY_FEE_MANAGER_OWNER_ADDRESS);
  console.log("Transfer ownership of LooksRareExchange to:");
  await transferOwnership(looksRareExchange, env.LOOKS_RARE_EXCHANGE_OWNER_ADDRESS);
  console.log("Transfer ownership of TransferSelectorNFT to:");
  await transferOwnership(transferSelectorNFT, env.TRANSFER_SELECTOR_NFT_OWNER_ADDRESS);

  await deployOrderValidatorV1(looksRareExchange);

  console.log("DONE!");

  // eslint-disable-next-line no-process-exit
  process.exit();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
