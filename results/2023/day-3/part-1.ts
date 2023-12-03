import { getInput } from "../../../src/get-input.ts";

const input = getInput(2023, 3);

let sum = 0;
const rows = input.split("\n").map((line) => [...line.split(""), "."]);

for (const [rowIndex, row] of rows.entries()) {
  let current = "";
  let isPartNum = false;

  for (const [colIndex, char] of row.entries()) {
    if (/[0-9]/.test(char)) {
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

      if (adjacentChars.find((c) => /[^\w\s\d\.]+/.test(c))) {
        isPartNum = true;
      }

      current += char;
      continue;
    }

    if (!current || !isPartNum) {
      current = "";
      continue;
    }

    sum += parseInt(current);
    isPartNum = false;
    current = "";
  }
}

console.log(sum);
