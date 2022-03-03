async function main() {
  const TestContract = await ethers.getContractFactory("TestContract");

  // Start deployment, returning a promise that resolves to a contract object
  const hello_world = await TestContract.deploy("Hello World!");
  console.log("Contract deployed to address:", hello_world.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });