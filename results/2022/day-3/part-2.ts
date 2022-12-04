import { readFileSync } from "fs";

// If you did not clone the Git repo, replace the value with your AoC's input or copy and paste it from ./input.txt.
const input = readFileSync("./input.txt", "utf-8");

const rucksacks = input.split("\n");
const groups: string[][] = [];

for (const rucksack of rucksacks) {
  const i = rucksacks.indexOf(rucksack) + 1;
  // console.log(i);
  if (i % 3 === 0) {
    const group = rucksacks.slice(i - 3, i);
    // console.log(group);
    groups.push(group);
  }
}

let sum = 0;

for (const group of groups) {
  const [rucksack1, rucksack2, rucksack3] = group;
  const duplicates = [
    ...new Set(
      rucksack1
        .split("")
        .filter(
          (letter) => rucksack2.includes(letter) && rucksack3.includes(letter)
        )
    ),
  ];

  if (duplicates.includes("\r")) duplicates.pop();
  if (duplicates.length > 1) {
    throw new Error("More than 1 duplicate letter.");
  }

  const duplicate = duplicates[0];

  const priorityStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const priority = priorityStr.split("").indexOf(duplicate) + 1;
  sum += priority;
}

console.log(sum);
