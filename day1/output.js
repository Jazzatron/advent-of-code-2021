const fs = require("fs");

const depths = fs.readFileSync(`${__dirname}/input.txt`).toString().split("\n");

console.log(depths.slice(-10, -1));

const rateOfIncrease = (depths) => {
  console.log(depths);
  const areLarger = depths
    .map((x) => parseInt(x))
    .map((currentDepth, index) => depths[index - 1] < currentDepth);
  console.log(areLarger);

  const count = areLarger.reduce((acc, curr) => {
    if (curr) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return count;
};

console.log("The answer is: ", rateOfIncrease(depths));

module.exports = { rateOfIncrease };
