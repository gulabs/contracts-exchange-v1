import path from "path";
import dotenv from "dotenv";
import * as envalid from "envalid";
import { BigNumber, utils } from "ethers";

dotenv.config({
  path: path.join(__dirname, "..", ".env"),
});

const bigNumValidator = envalid.makeValidator((x) => BigNumber.from(x));
const validateAddress = (address: string) => {
  if (utils.isAddress(address)) {
    return address;
  }

  throw new Error(`Invalid address: ${address}`);
};
const validateOptionalAddress = (address: string) => (address && address !== "0x" ? validateAddress(address) : "");
const validateOptionalAddressOrFalse = (address: string) =>
  address === "false" ? false : validateOptionalAddress(address);
const addressValidator = envalid.makeValidator(validateAddress);
const optionalAddressValidator = envalid.makeValidator(validateOptionalAddress);
const optionalAddressOrFalseValidator = envalid.makeValidator(validateOptionalAddressOrFalse);

// Types validations
const validations = {
  DEPLOYMENT_ACCOUNT_PRIVATE_KEY: envalid.str(),
  WETH_ADDRESS: optionalAddressValidator(),
  CURRENCY_MANAGER_ADDRESS: optionalAddressValidator(),
  CURRENCY_MANAGER_OWNER_ADDRESS: addressValidator(),
  SHOULD_ADD_WETH_CURRENCY: envalid.bool(),

  EXECUTION_MANAGER_ADDRESS: optionalAddressValidator(),
  EXECUTION_MANAGER_OWNER_ADDRESS: addressValidator(),

  STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_ADDRESS: optionalAddressOrFalseValidator(),
  STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_PROTOCOL_FEE: bigNumValidator(),

  STRATEGY_ANY_ITEM_IN_A_SET_FOR_FIXED_PRICE_ADDRESS: optionalAddressOrFalseValidator(),
  STRATEGY_ANY_ITEM_IN_A_SET_FOR_FIXED_PRICE_ADDRESS_PROTOCOL_FEE: bigNumValidator(),

  STRATEGY_DUTCH_AUCTION_ADDRESS: optionalAddressOrFalseValidator(),
  STRATEGY_DUTCH_AUCTION_OWNER_ADDRESS: addressValidator(),
  STRATEGY_DUTCH_AUCTION_PROTOCOL_FEE: bigNumValidator(),
  STRATEGY_DUTCH_AUCTION_MINIMUM_LENGTH_IN_SECONDS: bigNumValidator(),

  STRATEGY_PRIVATE_SALE_ADDRESS: optionalAddressOrFalseValidator(),
  STRATEGY_PRIVATE_SALE_PROTOCOL_FEE: bigNumValidator(),

  STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_ADDRESS: optionalAddressOrFalseValidator(),
  STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_PROTOCOL_FEE: bigNumValidator(),

  ROYALTY_FEE_REGISTRY_ADDRESS: optionalAddressValidator(),
  ROYALTY_FEE_LIMIT: bigNumValidator(),

  ROYALTY_FEE_SETTER_ADDRESS: optionalAddressValidator(),
  ROYALTY_FEE_SETTER_OWNER_ADDRESS: addressValidator(),

  ROYALTY_FEE_MANAGER_ADDRESS: optionalAddressValidator(),
  ROYALTY_FEE_MANAGER_OWNER_ADDRESS: addressValidator(),

  FEE_RECEIPT_ADDRESS: addressValidator(),

  LOOKS_RARE_EXCHANGE_OWNER_ADDRESS: addressValidator(),

  TRANSFER_MANAGER_ERC721_ADDRESS: optionalAddressValidator(),
  TRANSFER_MANAGER_ERC1155_ADDRESS: optionalAddressValidator(),
  TRANSFER_MANAGER_NON_COMPLIANT_ERC721_ADDRESS: optionalAddressOrFalseValidator(),
  TRANSFER_SELECTOR_NFT_ADDRESS: optionalAddressValidator(),
  TRANSFER_SELECTOR_NFT_OWNER_ADDRESS: addressValidator(),
  ORDER_VALIDATOR_ADDRESS: optionalAddressOrFalseValidator(),
  ORDER_VALIDATOR_V1B_ADDRESS: optionalAddressOrFalseValidator(),

  STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_V1B_ADDRESS: optionalAddressOrFalseValidator(),
  STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_V1B_OWNER_ADDRESS: addressValidator(),

  STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_V1B_ADDRESS: optionalAddressOrFalseValidator(),
  STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_V1B_OWNER_ADDRESS: addressValidator(),
};

const env = envalid.cleanEnv(process.env, validations);

export default env;
