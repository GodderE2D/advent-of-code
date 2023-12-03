import { getInput } from "../../../src/get-input.ts";

const input = getInput(2023, 3);

let sum = 0;
const rows = input.split("\n").map((line) => [...line.split(""), "."]);

const numMap = new Map<string, number>();
for (const [rowIndex, row] of rows.entries()) {
  let currentNum = "";
  let currentCoords: string[] = [];

  for (const [colIndex, char] of row.entries()) {
    if (/\d/.test(char)) {
      currentNum += char;
      currentCoords.push(`${rowIndex},${colIndex}`);
      continue;
    }

    if (!currentNum || !currentCoords) continue;

    for (const coord of currentCoords) {
      numMap.set(coord, parseInt(currentNum));
    }

    currentNum = "";
    currentCoords = [];
  }
}

for (const [rowIndex, row] of rows.entries()) {
  for (const [colIndex, char] of row.entries()) {
    if (char === "*") {
      const adjacentChars = [
        row[colIndex - 1], // Left
        row[colIndex + 1], // Right
        rows[rowIndex - 1]?.[colIndex], // Bottom
        rows[rowIndex - 1]?.[colIndex - 1], // Bottom left
        rows[rowIndex - 1]?.[colIndex + 1], // Bottom right
        rows[rowIndex + 1]?.[colIndex], // Top
        rows[rowIndex + 1]?.[colIndex - 1], // Top left
        rows[rowIndex + 1]?.[colIndex + 1], // Top right
      ].filter(Boolean);

      const adjacentCharsCoords = [
        `${rowIndex},${colIndex - 1}`, // Left
        `${rowIndex},${colIndex + 1}`, // Right
        `${rowIndex - 1},${colIndex}`, // Bottom
        `${rowIndex - 1},${colIndex - 1}`, // Bottom left
        `${rowIndex - 1},${colIndex + 1}`, // Bottom right
        `${rowIndex + 1},${colIndex}`, // Top
        `${rowIndex + 1},${colIndex - 1}`, // Top left
        `${rowIndex + 1},${colIndex + 1}`, // Top right
      ].filter((c) => numMap.has(c));

      const numbers = [
        ...new Set(adjacentChars.filter((c) => /\d/.test(c)).map((_c, i) => numMap.get(adjacentCharsCoords[i]))),
      ];

      if (numbers.length >= 2) sum += numbers[0]! * numbers[1]!;
    }
  }
}

console.log(sum);
