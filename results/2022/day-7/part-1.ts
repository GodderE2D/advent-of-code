import { readFileSync } from "fs";

// If you did not clone the Git repo, replace the value with your AoC's input or copy and paste it from ./input.txt.
const input = readFileSync("./input.txt", "utf-8");

const lines = input.split("\n");

const dirSizes = new Map<string, number>();
const currentDir: string[] = [];

for (const line of lines) {
    const split = line.split(" ");
    if (line.startsWith("$ cd")) {
        const dirName = split[2];
        if (dirName === "..") {
            currentDir.pop();
        } else {
            currentDir.push(dirName);
        }
        continue;
    } else {
        if (split[0] === "dir" || line.startsWith("$")) continue;
        for (let count = 0; count < currentDir.length + 1; count++) {
            const filePath = `/${currentDir.slice(0, count).join("/")}`;
            const fileSize = parseInt(line) + (dirSizes.get(filePath) ?? 0);
            dirSizes.set(filePath, fileSize);
        }
    }
}

let total = 0;
const dirArr = [...dirSizes.entries()];

for (const [_, size] of dirArr) {
    if (size >= 100_000) continue;
    total += size;
}

console.log(total);
