import { readFileSync } from "fs";

const args = process.argv.slice(2);

const [year, day, part, ...input] = args;

try {
  process.env.PUZZLE_INPUT = readFileSync(input.join(" "), "utf-8");
} catch {
  process.env.PUZZLE_INPUT = input.join(" ");
}

// Run the puzzle code
await import(`../results/${year}/day-${parseInt(day)}/part-${part}.ts`);
