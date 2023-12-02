# Day 4 Summary

> [!WARNING]  
> Spoilers ahead! You have been warned.

## Links

- [AoC Page ↗︎](https://adventofcode.com/2022/day/4)
- [Part 1 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-4/part-1.ts) (TypeScript)
- [Part 2 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-4/part-2.ts) (TypeScript)
- [Puzzle Input](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-4/input.txt)

## Description

This one was easier than expected! Could've been good for a Sunday, but I haven't slept yet while writing this so it
doesn't count as Sunday for me. In day 4, for part 1, you have to find out if all the duplicate values overlap in two
ranges, and in part 2 you have to check if they overlap at all.

Yes, I done today's Advent of Code in TypeScript again. Maybe another day, well, that's what they all say. For part 1,
you have to first split the input to pairs, then make a loop to split those to a single range (e.g. `1-4,5-8` to `1-4`
and `5-8`). Now, you have to parse the ranges to get all the numbers of that range into an array. There's a lodash
method for this, but I'm still striving for dependency-less code so I just copy and pasted a range() function from Stack
Overflow (in my defense I did understand how the code works so it's fine). Check if all first values overlap with the
second values, and if they do add 1 to a sum. If you're stuck, remember yesterday (day 3)? You have to use a similar
`.filter()` function to compare the two, except this time you have to compare them one way and the other way too.

Part 2 was pretty simple this time, basically don't check if everything overlaps, just check if anything overlaps at
all. For me, that just means deleting `=== sectionN.length`. All in around 10-15 minutes of work!
