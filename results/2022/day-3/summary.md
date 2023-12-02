# Day 3 Summary

> [!WARNING]
> Spoilers ahead! You have been warned.

## Links

- [AoC Page ↗︎](https://adventofcode.com/2022/day/3)
- [Part 1 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-3/part-1.ts) (TypeScript)  
- [Part 2 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-3/part-2.ts) (TypeScript)
- [Puzzle Input](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-3/input.txt)

## Description

Lots and lots and lots of rucksacks. In Day 3, you have to find compartments in rucksacks, and rucksacks in a group of 3. Find the duplicate values, find their priority according alphabetically (although usually uppercase letters are higher priority than lowercase letters, this is not the case in Advent of Code). Finally, get their sum like every other day we had so far. This one by far took me the longest time to figure out, but it's getting harder each day so I'm not surprised.

For both parts, let's start splitting rucksacks by newlines. Oh, and by the way I'm still using TypeScript. My comfort zone, and type-safe. For Part 1, there's two compartments inside of each rucksack. The first compartment is the first half, the second is the second half. Then, you have to compare the first compartment with the second one: find a letter that's in both compartments. I used a JavaScript [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) to give me unique values in each compartment so I don't have to worry about this later on. Then, you can compare each letter (if you don't know how to get each letter in an array, hint `.split("")`) using `Array.filter()` and if the letter is included in the second compartment. Find the letter's index (using `.split("").indexOf()`) with the lower & uppercase alphabet in its priority order and sum them up!

The Part 2, first you have to group rucksacks in threes by their order. For me, I looped over each rucksack and checked if it's a multiple of 3 (you can use `index % 3 === 0` in JS). If it is, then we'll grab the last 3 rucksacks (including the current one) and push them into another array. Now, we have our groups. Do basically the same thing as Part 1, but now instead of checking two compartments we check with three rucksacks.
