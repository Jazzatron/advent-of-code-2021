const { rateOfIncrease } = require("./output.js");
const assert = require("assert");
const fs = require("fs");

const testDepths = fs
  .readFileSync(`${__dirname}/input-test.txt`)
  .toString()
  .split("\n");

describe("running with test file", () => {
  it("returns 13", () => {
    assert.equal(rateOfIncrease(testDepths), 13);
  });
});
