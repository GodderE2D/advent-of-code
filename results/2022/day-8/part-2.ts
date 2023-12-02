// Inspired from tymscar's result:
// https://github.com/tymscar/Advent-Of-Code/blob/master/2022/typescript/day08/part2.ts

import { getInput } from "../../../src/get-input.ts";

const input = getInput(2022, 8);

const getTree = (x: number, y: number) => trees.at(y)!.at(x)!;

const scoreOfDirection = (treesInDirection: number[], currentTree: number) => {
  if (Math.max(...treesInDirection) < currentTree) return treesInDirection.length;
  return treesInDirection.findIndex((tree) => tree >= currentTree) + 1;
};

// To check the scenic score of each tree, loop through each tree
const treeScenicScore = (x: number, y: number): number => {
  const tree = getTree(x, y);

  const left = trees.at(y)!.slice(0, x).reverse(); // from start to x, then reverse
  const right = trees.at(y)!.slice(x + 1); // from x + 1 to end
  const top = trees
    .slice(0, y)
    .map((l) => l.at(x)!)
    .reverse(); // from top to y, then get every x in that y, then reverse
  const bottom = trees.slice(y + 1).map((l) => l.at(x)!); // from y + 1 to bottom, then get every x in that y

  const [a, b, c, d] = [left, right, top, bottom].map((trees) => scoreOfDirection(trees, tree));

  return a * b * c * d;
};

// Parse trees into an array of arrays
const trees = input.split("\n").map((line) => line.split("").map(Number));

// Get the scenic score of each tree
const scenicScoreOfTrees = trees.map((line, index) => line.map((_, i) => treeScenicScore(i, index)));

// Get the highest scenic score
const highestScenicScore = Math.max(...scenicScoreOfTrees.flat());

console.log(highestScenicScore);
