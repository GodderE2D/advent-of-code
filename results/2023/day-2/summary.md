# Day 2 Summary

> [!WARNING]  
> Spoilers ahead! You have been warned.

## Links

- [AoC Page ↗︎](https://adventofcode.com/2023/day/2)
- [Part 1 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2023/day-2/part-1.ts) (TypeScript)
- [Part 2 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2023/day-2/part-2.ts) (TypeScript)
- [Puzzle Input](https://github.com/GodderE2D/advent-of-code/blob/main/results/2023/day-2/input.txt)

## Description

When I first seen the puzzle input at 12 a.m., I was thinking why parsing is such a hassle. Anyways, I'm hopefully not
going to complain as much this year. Let's do some parsing first, create a variable to store our sum, and then have a
constant for the maximum values:

```ts
const input = "...";

const MAX = { red: 12, green: 13, blue: 14 };
let sum = 0;

for (const [index, line] of input.split("\n").entries()) {
  const sets = line.split(": ")[1].split("; ");

  for (const set of sets) {
    const cubes = set.split(", ").map((s) => s.split(" "));
    for (const [num, colour] of cubes) {
      // ...
    }
  }
}
```

Now we have something to deal with. The puzzle asks us to ensure that none of the cubes exceed the maximum values at
once. So, we can simply check against our `MAX` constant for each set of cubes and add the game ID to our sum if it's
valid:

```ts
for (const [index, line] of input.split("\n").entries()) {
  const sets = line.split(": ")[1].split("; ");
  let validGame = true;

  for (const set of sets) {
    const cubes = set.split(", ").map((s) => s.split(" "));
    for (const [num, colour] of cubes) {
      if (parseInt(num) > MAX[colour]) {
        validGame = false;
        break;
      }
    }
  }

  if (validGame) sum += index + 1;
}

console.log(sum);
```

Cool, that's part one. Part two asks us to find the largest number of cubes for each colour in a set, regardless if it's
a "valid" game or not. Then, we have to multiply the three numbers together, and add it to our sum.

```ts
let sum = 0;

for (const line of input.split("\n")) {
  const sets = line.split(": ")[1].split("; ");
  const highest = { red: 0, green: 0, blue: 0 };

  for (const set of sets) {
    const cubes = set.split(", ").map((s) => s.split(" "));
    for (const [num, colour] of cubes) {
      if (parseInt(num) > highest[colour]) {
        highest[colour] = parseInt(num);
      }
    }
  }

  sum += highest.red * highest.green * highest.blue;
}

console.log(sum);
```

And that's it for day 2. I'm not sure if I'm going to do a walkthrough everyday because of school, but I'll try to do as
much as I can.
