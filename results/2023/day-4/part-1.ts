import { getInput } from "../../../src/get-input.ts";

const input = getInput(2023, 4);

let sum = 0;

for (let line of input.split("\n")) {
  line = line.split(": ")[1];
  const [originalNums, winningNums] = line.split(" | ").map((set) => set.split(" ").filter(Boolean));

  const matches = [...new Set(originalNums.filter((n) => winningNums.includes(n)))];

  let pts = 0;
  if (matches.length) pts++;

  if (matches.length > 1) {
    for (let i = 0; i < matches.length - 1; i++) {
      pts *= 2;
    }
  }

  sum += pts;
}

console.log(sum);
