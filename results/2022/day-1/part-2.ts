import { getInput } from "../../../src/get-input.ts";

const input = getInput(2022, 1);

const splitArr = input.split("\n\n");

const allSum = splitArr.map((str) => {
  const numbers = str.split("\n");
  return parseInt(numbers.reduce((oldNum, newNum) => `${parseInt(oldNum) + parseInt(newNum)}`));
});

const sorted = allSum.sort();

console.log(sorted[sorted.length - 1] + sorted[sorted.length - 2] + sorted[sorted.length - 3]);
