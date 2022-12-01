import { readFileSync } from "fs";

// If you did not clone the Git repo, replace the value with your AoC's input or copy and paste it from ./input.txt.
const string = readFileSync("./input.txt");

const splitArr = input.split("\n\n");

const allSum = splitArr.map((str) => {
    const numbers = str.split("\n");
    return parseInt(numbers.reduce((oldNum, newNum) => `${parseInt(oldNum) + parseInt(newNum)}`));
});

const sorted = allSum.sort();

console.log(sorted[sorted.length - 1] + sorted[sorted.length - 2] + sorted[sorted.length - 3]);
