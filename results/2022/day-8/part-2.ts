// Inspired from tymscar's result:
// https://github.com/tymscar/Advent-Of-Code/blob/master/2022/typescript/day08/part2.ts

import { readFileSync } from "fs";

// If you did not clone the Git repo, replace the value with your AoC's input or copy and paste it from ./input.txt.
const input = readFileSync("./input.txt", "utf-8");

// To see whether a tree is visible from the outside, loop through each tree
const isVisible = (x: number, y: number, forest: number[][]): number => {
  const current = forest.at(y)!.at(x)!;

  const left = forest.at(y)!.slice(0, x); // from start to x
  const right = forest.at(y)!.slice(x + 1); // from x + 1 to end
  const up = forest.slice(0, y).map((l) => l.at(x)!); // from top to y, then get every x in that y
  const down = forest.slice(y + 1).map((l) => l.at(x)!); // from y + 1 to bottom, then get every x in that y

  const tallTrees = [left, up, right, down].map((direction) =>
    Math.max(...direction)
  );
  const shortestOfTallTrees = Math.min(...tallTrees);

  return current > shortestOfTallTrees ? 1 : 0;
};

// Parse trees into an array of array
const trees = input.split("\n").map((l) => l.split("").map(Number));

// Get the visibility for each tree
const treeVisibilities = trees.map((line, index) =>
  line.map((_, i) => isVisible(i, index, trees))
);

// Get the total amount of visible trees
const total = treeVisibilities
  .map((arr) => arr.reduce((prev, current) => prev + current))
  .reduce((prev, current) => prev + current);

console.log(total);
