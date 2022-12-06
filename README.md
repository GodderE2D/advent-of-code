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

### Day 4

<details>
<summary>Day 4 Findings</summary>

[[`🔗` Part 1 Code]](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-4/part-1.ts) (TypeScript)  
[[`🔗` Part 2 Code]](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-4/part-2.ts) (TypeScript)

This one was easier than expected! Could've been good for a Sunday, but I haven't slept yet while writing this so it doesn't count as Sunday for me. In day 4, for part 1, you have to find out if all the duplicate values overlap in two ranges, and in part 2 you have to check if they overlap at all.

Yes, I done today's Advent of Code in TypeScript again. Maybe another day, well, that's what they all say. For part 1, you have to first split the input to pairs, then make a loop to split those to a single range (e.g. `1-4,5-8` to `1-4` and `5-8`). Now, you have to parse the ranges to get all the numbers of that range into an array. There's a lodash method for this, but I'm still striving for dependency-less code so I just copy and pasted a range() function from Stack Overflow (in my defense I did understand how the code works so it's fine). Check if all first values overlap with the second values, and if they do add 1 to a sum. If you're stuck, remember yesterday (day 3)? You have to use a similar `.filter()` function to compare the two, except this time you have to compare them one way and the other way too.

Part 2 was pretty simple this time, basically don't check if everything overlaps, just check if anything overlaps at all. For me, that just means deleting `=== sectionN.length`. All in around 10-15 minutes of work!

</details>

### Day 5

<details>
<summary>Day 5 Findings</summary>

[[`🔗` Part 1 Code]](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-5/part-1.ts) (TypeScript)  
[[`🔗` Part 2 Code]](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-5/part-2.ts) (TypeScript)

Wow, what a day. This took me around 2 hours to complete. I really question my programming skills sometimes. In day 5, you have to ship cargo! Rust reference?! Parse an annoying string, and move cargo from one stack to another stack. Again, I did it in TypeScript.

You have to first parse a long string first with two sections: the actual stacks information and instructions. This took me way longer than it should, and regex makes stuff 10x more simple. For part 1, you have to loop over each instruction and remove the last n elements (JS hint: `.splice()`/`.slice()`) from your old stack. Then, reverse the array and add the moving crates (JS hint: `.push()` and spread operator, or, `[...old, ...new]`, make sure `new` is reversed!) to your new stack. Part 2 so far was the most relatively simplest to their preceding part. You basically don't reverse the moving crates when adding it to the new stack. In JS, that's as simple as removing wherever your `.reverse()` is.

</details>

### Day 6

<details>
<summary>Day 6 Findings</summary>

[[`🔗` Part 1 Code]](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-6/part-1.ts) (TypeScript)  
[[`🔗` Part 2 Code]](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-6/part-2.ts) (TypeScript)

And we got in a loop of easy-hard-easy again. I highly recommend looking at the examples in the directions, as that helped me a ton. I'm not really a good reader. In the magical technology age of day 6, you have to find markers and find how many letters it is after your marker. I don't know, pre-defined marker and the solution is also called your marker. Today only took me around 15 minutes, and it's the sixth day I'm using TypeScript!

Let's start off by turning our input string to an array of each letter. Set a variable of how many characters are processed, and it's time to loop through each letter! I used a [for...of loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) and looped through [`Array.entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries) to get both the letter's index and the letter. Increment the characters processed each time, and check if the index is less than the pre-defined marker (part 1: 4; part 2: 14), and if it is we can go to the next iteration of the loop ([`continue`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)). In my method, I used an array and pushed the last n letters one-by-one using a loop and [`Array.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push). This probably isn't the most efficient way, but it will do. Create a new [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set), and check if the Set's size is equals to your pre-defined marker. If it is, you can break out of the loop and log your characters processed **minus 1** (since we incremented the characters processed at the start of each loop).

</details>
