# Day 6 Summary

> [!WARNING]  
> Spoilers ahead! You have been warned.

## Links

- [AoC Page ↗︎](https://adventofcode.com/2022/day/6)
- [Part 1 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-6/part-1.ts) (TypeScript)
- [Part 2 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-6/part-2.ts) (TypeScript)
- [Puzzle Input](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-6/input.txt)

## Description

And we got in a loop of easy-hard-easy again. I highly recommend looking at the examples in the directions, as that
helped me a ton. I'm not really a good reader. In the magical technology age of day 6, you have to find markers and find
how many letters it is after your marker. I don't know, pre-defined marker and the solution is also called your marker.
Today only took me around 15 minutes, and it's the sixth day I'm using TypeScript!

Let's start off by turning our input string to an array of each letter. Set a variable of how many characters are
processed, and it's time to loop through each letter! I used a
[for...of loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) and looped
through
[`Array.entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries) to
get both the letter's index and the letter. Increment the characters processed each time, and check if the index is less
than the pre-defined marker (part 1: 4; part 2: 14), and if it is we can go to the next iteration of the loop
([`continue`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)). In my method, I
used an array and pushed the last n letters one-by-one using a loop and
[`Array.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push). This
probably isn't the most efficient way, but it will do. Create a new
[`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set), and check if the Set's
size is equals to your pre-defined marker. If it is, you can break out of the loop and log your characters processed
**minus 1** (since we incremented the characters processed at the start of each loop).
