import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";

export function getInput(year: number, day: number) {
  // If given a custom input, return that instead
  if (process.env.PUZZLE_INPUT) return process.env.PUZZLE_INPUT;

  const input = readFileSync(
    resolve(dirname(fileURLToPath(import.meta.url)), `../results/${year}/day-${day}/input.txt`),
    "utf-8",
  ).trim();
  if (input === "") throw new Error("Puzzle input is empty. Are you sure there's something in input.txt?");

  return input;
}
