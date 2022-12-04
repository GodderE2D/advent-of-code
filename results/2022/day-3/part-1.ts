import { readFileSync } from "fs";

// If you did not clone the Git repo, replace the value with your AoC's input or copy and paste it from ./input.txt.
const input = readFileSync("./input.txt", "utf-8");

const rucksacks = input.split("\n");
let sum = 0;

for (const rucksack of rucksacks) {
  const firstHalf = rucksack.slice(0, rucksack.length / 2);
  const secondHalf = rucksack.slice(rucksack.length / 2);

  const firstHalfUniqueLetters = [...new Set(firstHalf.split(""))];
  const secondHalfUniqueLetters = [...new Set(secondHalf.split(""))];

  const duplicates = firstHalfUniqueLetters.filter((letter) =>
    secondHalfUniqueLetters.includes(letter)
  );

  if (duplicates.length > 1) {
    throw new Error("More than 1 duplicate letter.");
  }

  const duplicate = duplicates[0];

  const priorityStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const priority = priorityStr.split("").indexOf(duplicate) + 1;
  sum += priority;
}

console.log(sum);
