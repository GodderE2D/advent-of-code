# Day 8 Summary

> [!WARNING]
> Spoilers ahead! You have been warned.

## Links

- [AoC Page ↗︎](https://adventofcode.com/2022/day/8)
- [Part 1 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-8/part-1.ts) (TypeScript)  
- [Part 2 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-8/part-2.ts) (TypeScript)
- [Puzzle Input](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-8/input.txt)

## Description

> [!NOTE]
> Today's code was inspired from [tymscar's code](https://github.com/tymscar/Advent-Of-Code/blob/master/2022/typescript/day08/part1.ts).

I thought today was going to be a bit easy, but I guess not. I ended up having to find inspiration (mostly the logic behind it) from a smarter person. Thanks, random Reddit earthling tymscar! In day 8, you have to find the perfect place to build a tree house (or is it treehouse?) one way or another. The first part is by visibility from the outside (kind of to make it secret), and the second part is by visibility from the inside (kind of to make the best view for you).

And let's explain my below-average code again. First off, we're actually going to use some functions today. But before that for part 1, we're going to parse trees into an array (y or rows) of array (x or columns) and convert each string to numbers. Something like this:

```ts
// Input:
1221
3443
5665
7887
// Parsed output:
[
  [1, 2, 2, 1],
  [3, 4, 4, 3],
  [5, 6, 6, 5],
  [7, 8, 8, 7],
]
```

Now, create a function to check if a tree is visible, which is going to take in `x: number, y: number` with the numbers being the respective coordinate (pro-tip: it's best to use 0-index values!). We can do this by getting the left, right, up, and down values.

`1` **`2`** `2` `1`  
**`3`** _**`4`**_ **`4`** **`3`**  
`5` **`6`** `6` `5`  
`7` **`8`** `8` `7`

If we're using the _**`4`**_ at 1-index `(1, 1)` coordinates, the other bolded values should be selected in their respective direction (left, right, top, bottom). You can use JavaScript [`.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) to help you. Be careful about mixing 0-index and 1-index coordinates! After you got all of your values, get the tallest tree in each direction by using [`Math.max()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max) in JS. Then, get the smallest tree in the array we just got using `Math.max()`, which we can use [`Math.min()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min) for (hint: spread operators!) For this function, we'll return `1` if the current tree in the loop is larger than the shortest of the tall trees in each direction (obtained by `Math.min()`), otherwise `0`.

Great. Now, we'll actually get the visibility of each tree. We can [`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) the trees array of array, then `.map()` it again for the result of our function we created. To get the total amount of trees, `.map()` the tree visibility we just checked and [`.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) it so it adds the previous value (so we can get the total value). And we're done for part 1!

For part 2, we have to modify our function a little bit. In our tree visibility function (which is going to repurpose to a function to get the scenic score of a tree), we're gonna suffix [`.reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) to the end of our left and top variables **(not right and bottom!)**. Then, for each direction we're going to run the (soon-created) score of direction function, and return the 4 values times each other for our scenic score function. What's the score of direction function? Well, let's create one! It's going to take in `treesInDirection: number[], currentTree: number` with the numbers being the height. Check if that highest value in the trees in that direction is less than our current tree, if it is we can return the length of trees in our direction. If not, we'll return the index ([`.findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)) of the tree that's greater than or equals to our current tree and plus 1 outside the `.findIndex()`. Outside all of our functions, we'll get the scenic score of each tree by `.map()`ing it and `.map()`ing it again with the tree scenic score function. Finally, we can get the highest scenic score by finding the highest value in that array that's returned from the function we just ran (`Math.max()`).

Remember when I said it was kind of easy when I thought about it? So about that ... nevermind.
