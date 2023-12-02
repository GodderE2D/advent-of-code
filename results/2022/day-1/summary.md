# Day 1 Summary

> [!WARNING]  
> Spoilers ahead! You have been warned.

## Links

- [AoC Page ↗︎](https://adventofcode.com/2022/day/1)
- [Part 1 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-1/part-1.ts) (TypeScript)
- [Part 2 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-1/part-2.ts) (TypeScript)
- [Puzzle Input](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-1/input.txt)

## Description

A way to start off Day 1! Calorie counting. Overall, if you know how logic works in programming regardless of which
programming language you're using, it should be pretty easy to solve. If you're unsure, remember that Google is your
friend! I personally think that Googling problems isn't cheating as long as you're not searching for the Advent of Code
solution itself.

You start off by getting a lonnngggg input string of numbers seperated by newlines. A new elf is a double newline, and
you have to parse it, get the sum seperated by double newlines, and sort it. In most programming languages, this is
fairly simple. I used TypeScript personally. If you're stuck on the sum part because you don't have access to `sum()` in
Python and you're using a big-boy language (JavaScript, jk), then you can use `.reduce()`.
