// const { expect } = require("chai");
// const { ethers } = require("hardhat");
const { ethers } = require("hardhat")
const { expect } = require("chai")
// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });

describe("SimpleStorage", () => {
    let SimpleStorage, simpleStorage
    beforeEach(async () => {
        SimpleStorage = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await SimpleStorage.deploy()
    })

    it("Should start with a favorite number of 0", async () => {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = 0
        expect(expectedValue).to.equal(currentValue)
    })

    it("Should update favorite number when we call store", async () => {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)

        const currentValue = await simpleStorage.retrieve()
        expect(currentValue).to.equal(expectedValue)
    })
})
