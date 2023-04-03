import { ethers } from "hardhat";
export default async function transferOwnership(contract: string, owner: string): Promise<void> {
  console.log(`
    newOwner: ${owner}
  `);
  const ownable = await ethers.getContractAt("Ownable", contract);
  await ownable.transferOwnership(owner);
}
