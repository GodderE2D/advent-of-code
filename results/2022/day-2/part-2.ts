import { readFileSync } from "fs";

// If you did not clone the Git repo, replace the value with your AoC's input or copy and paste it from ./input.txt.
const input = readFileSync("./input.txt", "utf-8");

const scoreMap = {
  X: 1,
  Y: 2,
  Z: 3,
};

const rounds = input.split("\n").map((r) => r.split(" "));
let score = 0;

for (const round of rounds) {
  let result: 6 | 0 | 3;
  let roundResult: "X" | "Y" | "Z";

  if (round[1] === "X") {
    result = 0;
  } else if (round[1] === "Y") {
    result = 3;
  } else if (round[1] === "Z") {
    result = 6;
  } else {
    throw new Error("Invalid result.");
  }

  if (round[0] === "A" && round[1] === "X") {
    result = 0;
    roundResult = "Z";
  } else if (round[0] === "A" && round[1] === "Y") {
    result = 3;
    roundResult = "X";
  } else if (round[0] === "A" && round[1] === "Z") {
    result = 6;
    roundResult = "Y";
  } else if (round[0] === "B" && round[1] === "X") {
    result = 0;
    roundResult = "X";
  } else if (round[0] === "B" && round[1] === "Y") {
    result = 3;
    roundResult = "Y";
  } else if (round[0] === "B" && round[1] === "Z") {
    result = 6;
    roundResult = "Z";
  } else if (round[0] === "C" && round[1] === "X") {
    result = 0;
    roundResult = "Y";
  } else if (round[0] === "C" && round[1] === "Y") {
    result = 3;
    roundResult = "Z";
  } else if (round[0] === "C" && round[1] === "Z") {
    result = 6;
    roundResult = "X";
  } else {
    throw new Error("Invalid result.");
  }

  score += scoreMap[roundResult] + result;
}

console.log(score);
