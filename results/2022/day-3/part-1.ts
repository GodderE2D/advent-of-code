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
  const priority = priorityMap.get(duplicate);
  if (!priority) {
    throw new Error("Invalid priority.");
  }
  sum += priority;
}

console.log(sum);
