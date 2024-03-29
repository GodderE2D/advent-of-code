import { getInput } from "../../../src/get-input.ts";

const input = getInput(2022, 10);

const strengths = [20, 60, 100, 140, 180, 220];

const cycles = new Map<number, number>();
let currentCycle = 1;
let varX = 1;

for (const line of input.split("\n")) {
  if (line === "noop") {
    cycles.set(currentCycle, varX);
    cycles.set(currentCycle + 1, varX);
    currentCycle++;
    continue;
  }
  const [_, increment] = line.split(" ");
  cycles.set(currentCycle, varX);
  cycles.set(currentCycle + 1, varX);
  cycles.set(currentCycle + 2, varX);
  cycles.set(currentCycle + 3, varX);
  varX += parseInt(increment);
  currentCycle += 2;
}

const sum = strengths.map((strength) => cycles.get(strength)! * strength).reduce((a, b) => a + b, 0);

console.log(sum);
