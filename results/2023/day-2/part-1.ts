import { getInput } from "../../../src/get-input.ts";

const input = getInput(2023, 2);

const MAX = { red: 12, green: 13, blue: 14 };
let sum = 0;

for (const [index, line] of input.split("\n").entries()) {
  const sets = line.split(": ")[1].split("; ");
  let validGame = true;

  for (const set of sets) {
    const cubes = set.split(", ").map((s) => s.split(" "));
    for (const [num, colour] of cubes) {
      if (parseInt(num) > MAX[colour]) {
        validGame = false;
        break;
      }
    }
  }

  if (validGame) sum += index + 1;
}

console.log(sum);
