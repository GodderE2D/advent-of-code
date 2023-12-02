import { readFileSync } from "fs";

const args = process.argv.slice(2);

const [year, day, part, ...input] = args;

try {
  process.env.PUZZLE_INPUT = readFileSync(input.join(" "), "utf-8");
} catch {
  process.env.PUZZLE_INPUT = input.join(" ");
}

try {
  // Run the puzzle code
  await import(`../results/${year}/day-${parseInt(day)}/part-${part}.ts`);
} catch (err) {
  if (err.code !== "ERR_MODULE_NOT_FOUND") throw err;

  throw new Error(
    `File not found. Are you sure you've entered the correct year, day, and part? Refer to the README.md.\n${err}`,
  );
}
