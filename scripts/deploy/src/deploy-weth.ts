import { ethers } from "hardhat";
import env from "./load-env";

export default async function deployWETH(): Promise<string> {
  let weth = env.WETH_ADDRESS;
  if (!weth) {
    const WETH = await ethers.getContractFactory("WETH");
    const weth_ = await WETH.deploy();
    await weth_.deployed();
    weth = weth_.address;
    console.log("WETH deployed to:", weth);
  } else {
    console.log("Using exist WETH:", weth);
  }

  return weth;
}
