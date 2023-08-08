const { ethers, upgrades } = require("hardhat");

const proxyAddress = "0x694dDb702140069d0CB40ff1210A8388Ddec7B95";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, BoxV2);
}

main();
