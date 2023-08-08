const { ethers, upgrades } = require("hardhat");

async function main() {
  const BoxV1 = await ethers.getContractFactory("BoxV1");
  const boxV1 = await upgrades.deployProxy(BoxV1, [42]);
  await boxV1.waitForDeployment();
  console.log("BoxV1 deployed to:", await boxV1.getAddress());
}

main();