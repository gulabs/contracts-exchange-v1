import { ethers } from "hardhat";
import env from "./load-env";

export default async function deployOrderValidatorV1(looksRareExchange: string): Promise<void> {
  let orderValidatorV1 =
    env.ORDER_VALIDATOR_ADDRESS === false ? ethers.constants.AddressZero : env.ORDER_VALIDATOR_ADDRESS;
  if (!orderValidatorV1) {
    console.log("\nDeploy OrderValidatorV1 with following parameters:");
    console.log(`
      looksRareExchange: ${looksRareExchange}
    `);
    const OrderValidatorV1 = await ethers.getContractFactory("OrderValidatorV1");
    const orderValidatorV1_ = await OrderValidatorV1.deploy(looksRareExchange);
    await orderValidatorV1_.deployed();

    orderValidatorV1 = orderValidatorV1_.address;
    console.log("OrderValidatorV1 deployed to:", orderValidatorV1);
  } else {
    console.log("Using exist OrderValidatorV1:", orderValidatorV1);
  }

  let orderValidatorV1B =
    env.ORDER_VALIDATOR_V1B_ADDRESS === false ? ethers.constants.AddressZero : env.ORDER_VALIDATOR_V1B_ADDRESS;
  if (!orderValidatorV1B) {
    console.log("\nDeploy OrderValidatorV1B with following parameters:");
    console.log(`
    looksRareExchange: ${looksRareExchange}
  `);
    const OrderValidatorV1B = await ethers.getContractFactory("OrderValidatorV1");
    const orderValidatorV1B_ = await OrderValidatorV1B.deploy(looksRareExchange);
    await orderValidatorV1B_.deployed();

    orderValidatorV1B = orderValidatorV1B_.address;
    console.log("OrderValidatorV1B deployed to:", orderValidatorV1B);
  } else {
    console.log("Using exist OrderValidatorV1B:", orderValidatorV1B);
  }
}
