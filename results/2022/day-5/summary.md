# Day 5 Summary

> [!WARNING]  
> Spoilers ahead! You have been warned.

## Links

- [AoC Page ↗︎](https://adventofcode.com/2022/day/5)
- [Part 1 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-5/part-1.ts) (TypeScript)
- [Part 2 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-5/part-2.ts) (TypeScript)
- [Puzzle Input](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-5/input.txt)

## Description

Wow, what a day. This took me around 2 hours to complete. I really question my programming skills sometimes. In day 5,
you have to ship cargo! Rust reference?! Parse an annoying string, and move cargo from one stack to another stack.
Again, I did it in TypeScript.

You have to first parse a long string first with two sections: the actual stacks information and instructions. This took
me way longer than it should, and regex makes stuff 10x more simple. For part 1, you have to loop over each instruction
and remove the last n elements (JS hint: `.splice()`/`.slice()`) from your old stack. Then, reverse the array and add
the moving crates (JS hint: `.push()` and spread operator, or, `[...old, ...new]`, make sure `new` is reversed!) to your
new stack. Part 2 so far was the most relatively simplest to their preceding part. You basically don't reverse the
moving crates when adding it to the new stack. In JS, that's as simple as removing wherever your `.reverse()` is.
