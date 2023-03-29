import { ethers } from "hardhat";
import env from "./load-env";

async function isContract(address: string) {
  const code = await ethers.provider.getCode(address);
  return code !== "0x" && code !== "0x0";
}

export default async function preDeploy(): Promise<void> {
  if (env.WETH_ADDRESS) {
    if (!(await isContract(env.WETH_ADDRESS))) {
      throw new Error(`WETH_ADDRESS should be a contract address`);
    }
  }

  if (env.EXECUTION_MANAGER_ADDRESS) {
    if (!(await isContract(env.EXECUTION_MANAGER_ADDRESS))) {
      throw new Error(`EXECUTION_MANAGER_ADDRESS should be a contract address`);
    }
  }

  if (env.CURRENCY_MANAGER_ADDRESS) {
    if (!(await isContract(env.CURRENCY_MANAGER_ADDRESS))) {
      throw new Error(`CURRENCY_MANAGER_ADDRESS should be a contract address`);
    }
  }

  if (env.STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_ADDRESS) {
    if (!(await isContract(env.STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_ADDRESS))) {
      throw new Error(`STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_ADDRESS should be a contract address`);
    }
  }

  if (env.STRATEGY_ANY_ITEM_IN_A_SET_FOR_FIXED_PRICE_ADDRESS) {
    if (!(await isContract(env.STRATEGY_ANY_ITEM_IN_A_SET_FOR_FIXED_PRICE_ADDRESS))) {
      throw new Error(`STRATEGY_ANY_ITEM_IN_A_SET_FOR_FIXED_PRICE_ADDRESS should be a contract address`);
    }
  }

  if (env.STRATEGY_DUTCH_AUCTION_ADDRESS) {
    if (!(await isContract(env.STRATEGY_DUTCH_AUCTION_ADDRESS))) {
      throw new Error(`STRATEGY_DUTCH_AUCTION_ADDRESS should be a contract address`);
    }
  }

  if (env.STRATEGY_PRIVATE_SALE_ADDRESS) {
    if (!(await isContract(env.STRATEGY_PRIVATE_SALE_ADDRESS))) {
      throw new Error(`STRATEGY_PRIVATE_SALE_ADDRESS should be a contract address`);
    }
  }

  if (env.STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_ADDRESS) {
    if (!(await isContract(env.STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_ADDRESS))) {
      throw new Error(`STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_ADDRESS should be a contract address`);
    }
  }

  if (env.ROYALTY_FEE_REGISTRY_ADDRESS) {
    if (!(await isContract(env.ROYALTY_FEE_REGISTRY_ADDRESS))) {
      throw new Error(`ROYALTY_FEE_REGISTRY_ADDRESS should be a contract address`);
    }
  }

  if (env.ROYALTY_FEE_SETTER_ADDRESS) {
    if (!(await isContract(env.ROYALTY_FEE_SETTER_ADDRESS))) {
      throw new Error(`ROYALTY_FEE_SETTER_ADDRESS should be a contract address`);
    }
  }

  if (env.ROYALTY_FEE_MANAGER_ADDRESS) {
    if (!(await isContract(env.ROYALTY_FEE_MANAGER_ADDRESS))) {
      throw new Error(`ROYALTY_FEE_MANAGER_ADDRESS should be a contract address`);
    }
  }

  if (env.TRANSFER_MANAGER_ERC721_ADDRESS) {
    if (!(await isContract(env.TRANSFER_MANAGER_ERC721_ADDRESS))) {
      throw new Error(`TRANSFER_MANAGER_ERC721_ADDRESS should be a contract address`);
    }
  }

  if (env.TRANSFER_MANAGER_ERC1155_ADDRESS) {
    if (!(await isContract(env.TRANSFER_MANAGER_ERC1155_ADDRESS))) {
      throw new Error(`TRANSFER_MANAGER_ERC1155_ADDRESS should be a contract address`);
    }
  }

  if (env.TRANSFER_MANAGER_NON_COMPLIANT_ERC721_ADDRESS) {
    if (!(await isContract(env.TRANSFER_MANAGER_NON_COMPLIANT_ERC721_ADDRESS))) {
      throw new Error(`TRANSFER_MANAGER_NON_COMPLIANT_ERC721_ADDRESS should be a contract address`);
    }
  }

  if (env.TRANSFER_SELECTOR_NFT_ADDRESS) {
    if (!(await isContract(env.TRANSFER_SELECTOR_NFT_ADDRESS))) {
      throw new Error(`TRANSFER_SELECTOR_NFT_ADDRESS should be a contract address`);
    }
  }

  if (env.ORDER_VALIDATOR_ADDRESS) {
    if (!(await isContract(env.ORDER_VALIDATOR_ADDRESS))) {
      throw new Error(`ORDER_VALIDATOR_ADDRESS should be a contract address`);
    }
  }

  if (env.STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_V1B_ADDRESS) {
    if (!(await isContract(env.STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_V1B_ADDRESS))) {
      throw new Error(`STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_V1B_ADDRESS should be a contract address`);
    }
  }

  if (env.STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_V1B_ADDRESS) {
    if (!(await isContract(env.STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_V1B_ADDRESS))) {
      throw new Error(`STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_V1B_ADDRESS should be a contract address`);
    }
  }
}
