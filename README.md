# GodderE2D's Advent of Code

My personal Advent of Code accomplishments. [Learn more about Advent of Code.](https://adventofcode.com/about)

I'm known as GodderE2D on Advent of Code which is linked to my GitHub account. I'm also on [the unofficial discord.js leaderboard](https://adventofcode.com/2022/leaderboard/private/view/419899). I sometimes discuss mine and other's results in the [discord.js Discord server](https://discord.gg/djs).

# Result Findings

> **Warning**: Spoilers ahead! I recommend only revealing result findings after you've done both parts of the Advent of Code for that day.

## 2022

### Day 1

<details>
<summary>Day 1 Findings</summary>

[[ `🔗` Part 1 Code ]](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-1/part-1.ts)  
[[ `🔗` Part 2 Code ]](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-1/part-2.ts)

A way to start off Day 1! Calorie counting. Overall, if you know how logic works in programming regardless of which programming language you're using, it should be pretty easy to solve. If you're unsure, remember that Google is your friend! I personally think that Googling problems isn't cheating as long as you're not searching for the Advent of Code solution itself.

You start off by getting a lonnngggg input string of numbers seperated by newlines. A new elf is a double newline, and you have to parse it, get the sum seperated by double newlines, and sort it. In most programming languages, this is fairly simple. I used TypeScript personally. If you're stuck on the sum part because you don't have access to `sum()` in Python and you're using a big-boy language (JavaScript, jk), then you can use `.reduce()`.
</details>


### Day 2

<details>
<summary>Day 2 Findings</summary>

[[ `🔗` Part 1 Code ]](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-2/part-1.ts)  
[[ `🔗` Part 2 Code ]](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-2/part-2.ts)

It's scissors, papers, and rocks, by the way. Either way, you can either do a smart way or the way I did it: a lot of if-else statements (the yanderedev method). Well, at least it works and you're not going to be looking for performance in TypeScript anyways.

You start off by getting some ABC's and XYZ's. Split them by newlines, then split them by spaces. Do a biiigggg loop and add to a total score. I honestly don't know the "smart" way, but if you're not the brightest like me then use if statements for every possible combination. It should be pretty same for Part 2, but instead you assign the round answers manually depending if you win or not.
</details>
