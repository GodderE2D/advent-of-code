import { getInput } from "../../../src/get-input.ts";

const input = getInput(2023, 1);

let sum = 0;

for (const line of input.split("\n")) {
  // Get all numbers
  const nums = line.match(/[0-9]/g);
  if (!nums) continue;

  sum += parseInt(`${nums[0]}${nums[nums.length - 1]}`);
}

console.log(sum);
