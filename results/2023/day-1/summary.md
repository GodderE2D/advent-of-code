# Day 1 Summary

> [!WARNING]
> Spoilers ahead! You have been warned.

## Links

- [AoC Page ↗︎](https://adventofcode.com/2023/day/1)
- [Part 1 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2023/day-1/part-1.ts) (TypeScript)  
- [Part 2 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2023/day-1/part-2.ts) (TypeScript)
- [Puzzle Input](https://github.com/GodderE2D/advent-of-code/blob/main/results/2023/day-1/input.txt)

## Description

New year, (somewhat) simple first day. Anyways, it's been a while since I coded in TypeScript. I endeavour to describe the puzzle more than just solving it step-by-step, but here we go:

I hope parsing is this easy everyday, just splitting by newline. Anyways, let's also create a sum variable to count all of our numbers.

```ts
const input = "...";
let sum = 0;

for (const line of input.split("\n")) {}
```

Now, there's two options: I can simply using regex, or use arithmetic and logical operations for more performance. Fortunately, it was eight in the morning and I didn't feel like using my non-existent energy.

```ts
for (const line of input.split("\n")) {
  const nums = line.match(/[0-9]/g);
  if (!nums) continue;

  sum += parseInt(`${nums[0]}${nums[nums.length - 1]}`);
}
```

And part one was that simple. Part two on the other hand, had a bit of regex madness. You have to map the word variants of numbers (i.e. one, two, three), and match that in the regex. I found [this article](https://mtsknn.fi/blog/how-to-do-overlapping-matches-with-regular-expressions/) particularly helpful after discovering that numbers could overlap.

```ts
const numMap = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

for (const line of input.split("\n")) {
    const nums = Array.from(line.matchAll(new RegExp(`(?=(${numMap.join("|")}))|[0-9]`, "g")), (m) => m[1] ?? m[0]);
    // Regex evaluates to: /?=(zero|one|two|three|four|five|six|seven|eight|nine))|[0-9]/g
}
```

Confused on that one-liner? Don't worry, I am too. The regex checks for both variants, but for the word variant it has a positive lookahead (and capturing group) to account for overlaps. Don't ask me how that works, it just does. The `(m) => m[1] ?? m[0]` basically gets the actual number from the [`RegExpMatchArray`](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_es5_d_.regexpmatcharray.html), whether it's a word or a digit.

Now, it gets simpler. Get the index of the match, which will either be the actual number or `-1`. If it's `-1`, then it's in digit form and can be directly assigned to the variable. Then, repeat for the last match.

```ts
let first: string | number = numMap.indexOf(nums[0]);
if (first === -1) first = nums[0];

let second: string | number = numMap.indexOf(nums[nums.length - 1]);
if (second === -1) second = nums[nums.length - 1];

sum += parseInt(`${first}${second}`);
```

This puzzle wasn't that challenging for me, however, some people in the discord.js did respond with "wtf??" as usual. Schönen ersten Dezember! (thanks Duolingo)

P.S. Please don't expect this type of quality every day.
