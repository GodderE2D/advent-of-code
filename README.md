# GodderE2D's Advent of Code

My personal Advent of Code accomplishments. [Learn more about Advent of Code.](https://adventofcode.com/about)

I'm known as GodderE2D on Advent of Code which is linked to my GitHub account. I'm also on [the unofficial discord.js leaderboard](https://adventofcode.com/2022/leaderboard/private/view/419899). I sometimes discuss mine and other's results in the [discord.js Discord server](https://discord.gg/djs).

# Result Findings

> **Warning**: Spoilers ahead! I recommend only revealing result findings after you've done both parts of the Advent of Code for that day.

## 2022

### Day 1

<details>
<summary>Day 1 Findings</summary>

[[`🔗` Part 1 Code]](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-1/part-1.ts) (TypeScript)  
[[`🔗` Part 2 Code]](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-1/part-2.ts) (TypeScript)

A way to start off Day 1! Calorie counting. Overall, if you know how logic works in programming regardless of which programming language you're using, it should be pretty easy to solve. If you're unsure, remember that Google is your friend! I personally think that Googling problems isn't cheating as long as you're not searching for the Advent of Code solution itself.

You start off by getting a lonnngggg input string of numbers seperated by newlines. A new elf is a double newline, and you have to parse it, get the sum seperated by double newlines, and sort it. In most programming languages, this is fairly simple. I used TypeScript personally. If you're stuck on the sum part because you don't have access to `sum()` in Python and you're using a big-boy language (JavaScript, jk), then you can use `.reduce()`.

</details>

### Day 2

<details>
<summary>Day 2 Findings</summary>

[[`🔗` Part 1 Code]](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-2/part-1.ts) (TypeScript)  
[[`🔗` Part 2 Code]](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-2/part-2.ts) (TypeScript)

It's scissors, papers, and rocks, by the way. Either way, you can either do a smart way or the way I did it: a lot of if-else statements (the yanderedev method). Well, at least it works and you're not going to be looking for performance in TypeScript anyways.

You start off by getting some ABC's and XYZ's. Split them by newlines, then split them by spaces. Do a biiigggg loop and add to a total score. I honestly don't know the "smart" way, but if you're not the brightest like me then use if statements for every possible combination. It should be pretty same for Part 2, but instead you assign the round answers manually depending if you win or not.

</details>

### Day 3

<details>
<summary>Day 3 Findings</summary>

[[`🔗` Part 1 Code]](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-3/part-1.ts) (TypeScript)  
[[`🔗` Part 2 Code]](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-3/part-2.ts) (TypeScript)

Lots and lots and lots of rucksacks. In Day 3, you have to find compartments in rucksacks, and rucksacks in a group of 3. Find the duplicate values, find their priority according alphabetically (although usually uppercase letters are higher priority than lowercase letters, this is not the case in Advent of Code). Finally, get their sum like every other day we had so far. This one by far took me the longest time to figure out, but it's getting harder each day so I'm not surprised.

For both parts, let's start splitting rucksacks by newlines. Oh, and by the way I'm still using TypeScript. My comfort zone, and type-safe. For Part 1, there's two compartments inside of each rucksack. The first compartment is the first half, the second is the second half. Then, you have to compare the first compartment with the second one: find a letter that's in both compartments. I used a JavaScript [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) to give me unique values in each compartment so I don't have to worry about this later on. Then, you can compare each letter (if you don't know how to get each letter in an array, hint `.split("")`) using `Array.filter()` and if the letter is included in the second compartment. Find the letter's index (using `.split("").indexOf()`) with the lower & uppercase alphabet in its priority order and sum them up!

The Part 2, first you have to group rucksacks in threes by their order. For me, I looped over each rucksack and checked if it's a multiple of 3 (you can use `index % 3 === 0` in JS). If it is, then we'll grab the last 3 rucksacks (including the current one) and push them into another array. Now, we have our groups. Do basically the same thing as Part 1, but now instead of checking two compartments we check with three rucksacks.

</details>
