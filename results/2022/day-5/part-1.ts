import { readFileSync } from "fs";

// If you did not clone the Git repo, replace the value with your AoC's input or copy and paste it from ./input.txt.
const input = readFileSync("./input.txt", "utf-8");

const transpose = (arr: (string | null)[][]) =>
  arr[0].map((_, colIndex) => arr.map((row) => row[colIndex]));

const [createStr, instructionsStr] = input.split(
  "\n 1   2   3   4   5   6   7   8   9 \n\n"
);

let crates: (string | null)[][] = [];

const cratePerLine = createStr.split("\n");
for (const crate of cratePerLine) {
  const crateArr = crate.match(/(...[ \n])|(...$)/g);
  if (!crateArr) throw new Error("Did not match any letters in crates.");

  const letters = crateArr.map((c) =>
    c.startsWith(" ") ? null : c.slice(1, 2)
  );
  crates.push([]);

  for (const letter of letters) {
    crates[crates.length - 1].push(letter);
  }
}

crates = transpose(crates).map((arr) => arr.reverse().filter(Boolean));

const instructionsArr = instructionsStr.split("\n");
let instructions: {
  moveAmount: number,
  from: number,
  to: number,
}[] = [];

for (const insLine of instructionsArr) {
  const insMatchArr = insLine.match(/\d+/g);
  if (!insMatchArr) throw new Error("Did not mach any instruction numbers.");

  const map = {
    moveAmount: parseInt(insMatchArr[0]),
    from: parseInt(insMatchArr[1]),
    to: parseInt(insMatchArr[2]),
  };

  instructions.push(map);
}

for (const { moveAmount, from, to } of instructions) {
  const movingLetters = crates[from - 1].slice(-moveAmount).reverse();
  crates[from - 1] = crates[from - 1].slice(0, -moveAmount);
  crates[to - 1] = [...crates[to - 1], ...movingLetters];
}

console.log(
  crates
    .map(
      (letter) => letter.filter((l) => l)[letter.filter((l) => l).length - 1]
    )
    .join("")
);
