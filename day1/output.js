const fs = require("fs");

const depths = fs.readFileSync(`${__dirname}/input.txt`).toString().split("\n");

console.log(depths.slice(-10, -1));

const rateOfIncrease = (depths) => {
  console.log("depths: ", depths);
  const areLarger = depths
    .map((x) => parseInt(x))
    .map((currentDepth, index) => depths[index - 1] < currentDepth);
  console.log("areLarger", areLarger);

  const count = areLarger.reduce((acc, curr) => {
    if (curr) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return count;
};

const rateOfIncreaseWindow = (depths) => {
  console.log("depths: ", depths);
  const window = 3;
  const reducer = (acc, curr) => acc + curr;

  const depthsWindowed = depths
    .map((x) => parseInt(x))
    .map((depth, index, depthsInts) => {
      return depthsInts.slice(index, index + window).reduce(reducer, 0);
    });

  console.log("depthsWindowed: ", depthsWindowed);

  return rateOfIncrease(depthsWindowed);
};

console.log("The answer is: ", rateOfIncreaseWindow(depths));

module.exports = { rateOfIncrease, rateOfIncreaseWindow };
