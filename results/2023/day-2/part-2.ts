import { getInput } from "../../../src/get-input.ts";

const input = getInput(2023, 2);

let sum = 0;

for (const line of input.split("\n")) {
  const sets = line.split(": ")[1].split("; ");
  const highest = { red: 0, green: 0, blue: 0 };

  for (const set of sets) {
    const cubes = set.split(", ").map((s) => s.split(" "));
    for (const [num, colour] of cubes) {
      if (parseInt(num) > highest[colour]) {
        highest[colour] = parseInt(num);
      }
    }
  }

  sum += highest.red * highest.green * highest.blue;
}

console.log(sum);
