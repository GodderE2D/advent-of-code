// Heavily inspired from neon-inkblast's result:
// https://github.com/neon-inkblast/advent-of-code-2022-TS/blob/main/src/2022/day/10/part_2.ts

import { getInput } from "../../../src/get-input.ts";

const input = getInput(2022, 10);

let cycleCounter = 1;
let spritePos = [0, 1, 2];
const cursorPos = [0, 0];

const display: string[][] = new Array(6).fill(0).map(() => new Array(40).fill(0).map(() => "."));

const flattened = input.split("\n").flatMap((line) => line.split(" "));

for (const line of flattened) {
  cycleCounter++;
  if (spritePos.includes(cursorPos.at(1)!)) {
    display[cursorPos.at(0)!][cursorPos.at(1)!] = "#";
  }
  cursorPos[1] = cursorPos.at(1)! + 1;

  if ((cycleCounter - 1) % 40 === 0) {
    cursorPos[0] = cursorPos.at(0)! + 1;
    cursorPos[1] = 0;
  }

  if (!isNaN(parseInt(line))) {
    spritePos = spritePos.map((x) => x + parseInt(line));
  }
}

console.log(display.map((row) => row.join("")).join("\n"));
