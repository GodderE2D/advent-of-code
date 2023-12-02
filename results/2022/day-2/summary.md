# Day 2 Summary

> [!WARNING]
> Spoilers ahead! You have been warned.

## Links

- [AoC Page ↗︎](https://adventofcode.com/2022/day/2)
- [Part 1 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-2/part-1.ts) (TypeScript)  
- [Part 2 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-2/part-2.ts) (TypeScript)
- [Puzzle Input](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-2/input.txt)

## Description

It's scissors, papers, and rocks, by the way. Either way, you can either do a smart way or the way I did it: a lot of if-else statements (the yanderedev method). Well, at least it works and you're not going to be looking for performance in TypeScript anyways.

You start off by getting some ABC's and XYZ's. Split them by newlines, then split them by spaces. Do a biiigggg loop and add to a total score. I honestly don't know the "smart" way, but if you're not the brightest like me then use if statements for every possible combination. It should be pretty same for Part 2, but instead you assign the round answers manually depending if you win or not.
