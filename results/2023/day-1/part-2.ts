import { getInput } from "../../../src/get-input.ts";

const input = getInput(2023, 1);

let sum = 0;

const numMap = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

for (const line of input.split("\n")) {
  // Get all numbers (either as digits or words)
  const nums = Array.from(line.matchAll(new RegExp(`(?=(${numMap.join("|")}))|[0-9]`, "g")), (m) => m[1] ?? m[0]);

  let first: string | number = numMap.indexOf(nums[0]);
  if (first === -1) first = nums[0];

  let second: string | number = numMap.indexOf(nums[nums.length - 1]);
  if (second === -1) second = nums[nums.length - 1];

  sum += parseInt(`${first}${second}`);
}

console.log(sum);
