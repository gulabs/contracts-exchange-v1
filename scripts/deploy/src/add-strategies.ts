import { ethers } from "hardhat";

export default async function addStrategies({
  executionManager: executionManagerAddress,
  strategyAnyItemFromCollectionForFixedPrice,
  strategyAnyItemInASetForFixedPrice,
  strategyDutchAuction,
  strategyPrivateSale,
  strategyStandardSaleForFixedPrice,
  strategyAnyItemFromCollectionForFixedPriceV1B,
  strategyStandardSaleForFixedPriceV1B,
}: {
  executionManager: string;
  strategyAnyItemFromCollectionForFixedPrice: string;
  strategyAnyItemInASetForFixedPrice: string;
  strategyDutchAuction: string;
  strategyPrivateSale: string;
  strategyStandardSaleForFixedPrice: string;
  strategyAnyItemFromCollectionForFixedPriceV1B: string;
  strategyStandardSaleForFixedPriceV1B: string;
}): Promise<void> {
  const ExecutionManager = await ethers.getContractFactory("ExecutionManager");
  const executionManager = ExecutionManager.attach(executionManagerAddress);

  if (strategyAnyItemFromCollectionForFixedPrice !== ethers.constants.AddressZero) {
    console.log("\nAdd strategyAnyItemFromCollectionForFixedPrice to ExecutionManager with following parameters:");
    console.log(`
      strategyAnyItemFromCollectionForFixedPrice: ${strategyAnyItemFromCollectionForFixedPrice}
    `);
    await executionManager.addStrategy(strategyAnyItemFromCollectionForFixedPrice);
  }

  if (strategyAnyItemInASetForFixedPrice !== ethers.constants.AddressZero) {
    console.log("\nAdd strategyAnyItemInASetForFixedPrice to ExecutionManager with following parameters:");
    console.log(`
      strategyAnyItemInASetForFixedPrice: ${strategyAnyItemInASetForFixedPrice}
    `);
    await executionManager.addStrategy(strategyAnyItemInASetForFixedPrice);
  }

  if (strategyDutchAuction !== ethers.constants.AddressZero) {
    console.log("\nAdd strategyDutchAuction to ExecutionManager with following parameters:");
    console.log(`
      strategyDutchAuction: ${strategyDutchAuction}
    `);
    await executionManager.addStrategy(strategyDutchAuction);
  }

  if (strategyPrivateSale !== ethers.constants.AddressZero) {
    console.log("\nAdd strategyPrivateSale to ExecutionManager with following parameters:");
    console.log(`
      strategyPrivateSale: ${strategyPrivateSale}
    `);
    await executionManager.addStrategy(strategyPrivateSale);
  }

  if (strategyStandardSaleForFixedPrice !== ethers.constants.AddressZero) {
    console.log("\nAdd strategyStandardSaleForFixedPrice to ExecutionManager with following parameters:");
    console.log(`
      strategyStandardSaleForFixedPrice: ${strategyStandardSaleForFixedPrice}
    `);
    await executionManager.addStrategy(strategyStandardSaleForFixedPrice);
  }

  if (strategyAnyItemFromCollectionForFixedPriceV1B !== ethers.constants.AddressZero) {
    console.log("\nAdd strategyAnyItemFromCollectionForFixedPriceV1B to ExecutionManager with following parameters:");
    console.log(`
      strategyAnyItemFromCollectionForFixedPriceV1B: ${strategyAnyItemFromCollectionForFixedPriceV1B}
    `);
    await executionManager.addStrategy(strategyAnyItemFromCollectionForFixedPriceV1B);
  }

  if (strategyStandardSaleForFixedPriceV1B !== ethers.constants.AddressZero) {
    console.log("\nAdd strategyStandardSaleForFixedPriceV1B to ExecutionManager with following parameters:");
    console.log(`
      strategyStandardSaleForFixedPriceV1B: ${strategyStandardSaleForFixedPriceV1B}
    `);
    await executionManager.addStrategy(strategyStandardSaleForFixedPriceV1B);
  }
}
