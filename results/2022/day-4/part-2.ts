import { getInput } from "../../../src/get-input.ts";

const input = getInput(2022, 4);

const range = ([start, end]: string[]) =>
  Array.from(Array(Math.abs(parseInt(end) - parseInt(start)) + 1), (_, i) => parseInt(start) + i);

const pairs = input.split("\n");
let sum = 0;

for (const pair of pairs) {
  const [section1Range, section2Range] = pair.split(",");
  const [section1, section2] = [range(section1Range.split("-")), range(section2Range.split("-"))];

  if (section1.filter((n) => section2.includes(n)).length || section2.filter((n) => section1.includes(n)).length) {
    sum++;
  }
}

console.log(sum);
