import { readFileSync } from "fs";

// If you did not clone the Git repo, replace the value with your AoC's input or copy and paste it from ./input.txt.
const input = readFileSync("./input.txt", "utf-8");

const priorityMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["d", 4],
  ["e", 5],
  ["f", 6],
  ["g", 7],
  ["h", 8],
  ["i", 9],
  ["j", 10],
  ["k", 11],
  ["l", 12],
  ["m", 13],
  ["n", 14],
  ["o", 15],
  ["p", 16],
  ["q", 17],
  ["r", 18],
  ["s", 19],
  ["t", 20],
  ["u", 21],
  ["v", 22],
  ["w", 23],
  ["x", 24],
  ["y", 25],
  ["z", 26],
  ["A", 27],
  ["B", 28],
  ["C", 29],
  ["D", 30],
  ["E", 31],
  ["F", 32],
  ["G", 33],
  ["H", 34],
  ["I", 35],
  ["J", 36],
  ["K", 37],
  ["L", 38],
  ["M", 39],
  ["N", 40],
  ["O", 41],
  ["P", 42],
  ["Q", 43],
  ["R", 44],
  ["S", 45],
  ["T", 46],
  ["U", 47],
  ["V", 48],
  ["W", 49],
  ["X", 50],
  ["Y", 51],
  ["Z", 52],
]);

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
  const priority = priorityMap.get(duplicate);
  if (!priority) {
    throw new Error("Priority not found.");
  }
  sum += priority;
}

console.log(sum);
