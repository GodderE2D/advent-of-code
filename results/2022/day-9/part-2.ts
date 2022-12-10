// By LucasDower on GitHub. Slightly modified.
// https://github.com/LucasDower/AOC-2022/blob/main/day-09/part-2/solution.ts

import { readFileSync } from "fs";

// If you did not clone the Git repo, replace the value with your AoC's input or copy and paste it from ./input.txt.
const input = readFileSync("./input.txt", "utf-8");
const lines = input.split("\n");

const _head = { x: 0, y: 0 };
const _tail = { x: 0, y: 0 };

const rope = [
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
];

const visited = new Set<string>();
visited.add(`${_tail.x},${_tail.y}`);

for (const line of lines) {
  const parts = line.split(" ");
  const dir = parts.at(0) as "L" | "R" | "U" | "D";
  const steps = parseInt(parts[1]);

  for (let i = 0; i < steps; i++) {
    switch (dir) {
      case "L":
        _head.x--;
        break;
      case "R":
        _head.x++;
        break;
      case "U":
        _head.y++;
        break;
      case "D":
        _head.y--;
        break;
    }

    for (let j = 0; j < 9; j++) {
      const pairTail = rope[j + 1];
      const pairHead = rope[j];

      const xDist = Math.abs(pairHead.x - pairTail.x);
      const yDist = Math.abs(pairHead.y - pairTail.y);
      const manDist = xDist + yDist;

      const moveX = xDist >= 2 || manDist >= 3;
      const moveY = yDist >= 2 || manDist >= 3;

      if (moveX) {
        pairTail.x += pairHead.x > pairTail.x ? 1 : -1;
      }
      if (moveY) {
        pairTail.y += pairHead.y > pairTail.y ? 1 : -1;
      }
    }

    visited.add(`${_tail.x},${_tail.y}`);
  }
}

console.log(visited.size);
