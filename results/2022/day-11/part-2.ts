import { readFileSync } from "fs";

// If you did not clone the Git repo, replace the value with your AoC's input or copy and paste it from ./input.txt.
const input = readFileSync("./input.txt", "utf-8");

type Monkey = {
  items: number[];
  operation: ["+" | "*", number | "old"];
  test: number;
  ifTrue: number;
  ifFalse: number;
  itemsInspected: number;
};

const monkeys: Monkey[] = [];

// Separate by every double newline, parsing madness
for (const lines of input.split("\n\n")) {
  const split = lines.split("\n");
  const monkey = {} as Monkey;
  monkey.items = split.at(1)!.split(": ").at(1)!.split(", ").map(Number);
  monkey.operation = [
    split.at(2)!.split("old ").at(1)!.split(" ").at(0) as "+" | "*",
    split.at(2)!.split("old ").at(1)!.split(" ").at(1)! === "old"
      ? "old"
      : parseInt(split.at(2)!.split("old ").at(1)!.split(" ").at(1)!),
  ];
  monkey.test = parseInt(split.at(3)!.split("by ").at(1)!);
  monkey.ifTrue = parseInt(split.at(4)!.split("monkey ").at(1)!);
  monkey.ifFalse = parseInt(split.at(5)!.split("monkey ").at(1)!);
  monkey.itemsInspected = 0;

  monkeys.push(monkey);
}

// Loop through 10,000 rounds
for (let round = 1; round <= 10_000; round++) {
  // Loop through each monkey
  for (const monkey of monkeys) {
    if (!monkey.items.length) continue;
    let numberOfItemsToRemove = 0;

    // Loop through each item
    for (let i = 0; i < monkey.items.length; i++) {
      monkey.itemsInspected++;

      // Perform operation
      if (monkey.operation.at(0) === "+") {
        if (monkey.operation.at(1) === "old") {
          monkey.items[i] *= 2;
        } else {
          monkey.items[i] += monkey.operation.at(1)! as number;
        }
      } else {
        if (monkey.operation.at(1) === "old") {
          monkey.items[i] **= 2;
        } else {
          monkey.items[i] *= monkey.operation.at(1)! as number;
        }
      }

      // Assign operation divided by each monkey's divisor multiplied together
      const divisor = monkeys.reduce((total, m) => total * m.test, 1);
      monkey.items[i] = monkey.items.at(i)! % divisor;

      // Perform test
      if (monkey.items.at(i)! % monkey.test === 0) {
        monkeys.at(monkey.ifTrue)!.items.push(monkey.items.at(i)!);
        numberOfItemsToRemove++;
      } else {
        monkeys.at(monkey.ifFalse)!.items.push(monkey.items.at(i)!);
        numberOfItemsToRemove++;
      }
    }
    // Remove items that were inspected from the current monkey
    monkey.items.splice(0, numberOfItemsToRemove);
  }
}

// Get the product of the two highest numbers
const product = monkeys
  .map((monkey) => monkey.itemsInspected)
  .sort((a, b) => b - a)
  .slice(0, 2)
  .reduce((a, b) => a * b, 1);

console.log(product);