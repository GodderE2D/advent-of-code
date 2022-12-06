import { readFileSync } from "fs";

// If you did not clone the Git repo, replace the value with your AoC's input or copy and paste it from ./input.txt.
const input = readFileSync("./input.txt", "utf-8");

const marker = 4;
const letters = input.split("");

let charactersProcessed = 0;

for (const [i, letter] of letters.entries()) {
    charactersProcessed++;
    if (i < marker) continue;
    const lastFourLetters: string[] = [];

    for (let lastLetterCount = 1; lastLetterCount <= marker; lastLetterCount++) {
        lastFourLetters.push(letters[i - lastLetterCount]);
    }

    if (new Set(lastFourLetters).size === marker) break;
}

console.log(charactersProcessed - 1);
