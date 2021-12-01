const { rateOfIncrease, rateOfIncreaseWindow } = require("./output.js");
const assert = require("assert");
const fs = require("fs");

const testDepths = fs
  .readFileSync(`${__dirname}/input-test.txt`)
  .toString()
  .split("\n");

const testDepths2 = fs
  .readFileSync(`${__dirname}/input-test2.txt`)
  .toString()
  .split("\n");

describe("running rateOfIncrease with test file 1", () => {
  it("returns 13", () => {
    assert.equal(rateOfIncrease(testDepths), 13);
  });
});

describe("running rateOfIncreaseWindow with test file 2", () => {
  it("returns 5", () => {
    assert.equal(rateOfIncreaseWindow(testDepths2), 5);
  });
});
