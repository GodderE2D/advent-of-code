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
  if (round[0] === "A" && round[1] === "X") {
    result = 3; // rock + rock = draw
  } else if (round[0] === "A" && round[1] === "Y") {
    result = 6; // rock + paper = win
  } else if (round[0] === "A" && round[1] === "Z") {
    result = 0; // rock + scissors = loss
  } else if (round[0] === "B" && round[1] === "X") {
    result = 0; // paper + rock = loss
  } else if (round[0] === "B" && round[1] === "Y") {
    result = 3; // paper + paper = draw
  } else if (round[0] === "B" && round[1] === "Z") {
    result = 6; // paper + scissors = win
  } else if (round[0] === "C" && round[1] === "X") {
    result = 6; // scissors + rock = win
  } else if (round[0] === "C" && round[1] === "Y") {
    result = 0; // scissors + paper = loss
  } else if (round[0] === "C" && round[1] === "Z") {
    result = 3; // scissors + scissors = draw
  } else {
    throw new Error("Invalid result.");
  }

  score += scoreMap[round[1]] + result;
}

console.log(score);
