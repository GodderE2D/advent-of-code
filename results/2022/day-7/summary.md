# Day 7 Summary

> [!WARNING]
> Spoilers ahead! You have been warned.

## Links

- [AoC Page ↗︎](https://adventofcode.com/2022/day/7)
- [Part 1 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-7/part-1.ts) (TypeScript)  
- [Part 2 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-7/part-2.ts) (TypeScript)
- [Puzzle Input](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-7/input.txt)

## Description

> [!NOTE]
> Today's code was heavily inspired from [JBPM135's code](https://github.com/JPBM135/advent-of-coding-2022/blob/main/day-07/index.ts).

Well, today was not the most fun. I spent a lot of time thinking about this, and at the end of the day (literally) I ended up taking heavy inspiration from another internet earthling. Thanks, JBPM, if you somehow discover this. I found their solution the most effective for me as it was in TypeScript, easy to understand, and is basically my original logic but bug-free. I cleaned up some things here and there, but mostly it was the same.

Ok, here we go. Create a JavaScript [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) or whatever equivalent your language offers, then create a current directory path array. Got it? Now split the input to each line, and first check if it's a `$ cd` command. If it is, remove the end item of the path array if it's a `..` argument, otherwise add the directory name argument to the end of your path array. If it's **the output** of the `$ ls` command (not the `$ ls` command itself!) then do a number-incrementing loop and create a file path string that looks something like this: `/${currentDir.slice(0, count).join("/")}` in a string concatenation. Get the file size, and this is important, **if you get the file path variable from your map and it's undefined, don't add anything**, just [`continue`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) and move on. If there is a size, set the file size from the current line to your map, with the file path being the key. You still with me? For part 1, you have to make a total sum variable, and in JS, an array of the map entries (`[...map.entries()]`). Loop over it, add the size to the total unless the size is over 100,000. For part 2, keep the map entries array (see part 1) and the size needed is `30_000_000-(70_000_000-usedSize)` where used size is the size of your root folder (`map.get("/")`). Filter the map entries array by if the size is larger than or equals to the size needed (the formula earlier). Sort from smallest to largest, get the first value, and you're done. Phew!
