# Day 11 Summary

> [!WARNING]  
> Spoilers ahead! You have been warned.

## Links

- [AoC Page ↗︎](https://adventofcode.com/2022/day/11)
- [Part 1 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-11/part-1.ts) (TypeScript)
- [Part 2 Code](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-11/part-2.ts) (TypeScript)
- [Puzzle Input](https://github.com/GodderE2D/advent-of-code/blob/main/results/2022/day-11/input.txt)

## Description

Wow, today involved a lot of maths. Not my favourite, I had to read some hints but I got through it at the end. Better
than some previous days. In the epic day 11 and continuing on the bridge journey, you have to figure out which two
monkeys assessed your items the most, and multiply them together. When assessing, you perform an arithmetic operation
and divide them by 3 for part 1 (see part 2 explanation below).

First, let's create an array of monkeys. Here comes the inevitable, parsing. No one likes it, it's pretty tedious. How I
did it was split the input by double newlines, then split each line. Get the items by getting the part after `: ` on the
second line. Get the operation by getting the part after `old ` and getting the part after the space on the third line,
and also before the space and checking if it's "old", otherwise the number after the space is the value. Get the test by
getting the number after `by ` on the fourth line, and get the number after `monkey ` on the below two lines. Also, for
our code, let's set items inspected to `0`. Be sure to convert strings to numbers and push the values (as an object)
into the array!

Now, we can loop through 20 rounds (for part 1). In that loop, we'll loop through each monkey, and in that loop we'll
loop through each item after
[`continue`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)ing if there are no
items, and also setting a numbers of items to remove variable to `0`. In the items loop, increment the
`monkey.itemsInspected` by 1. Then, we can perform the operation: if it's `+`, check if the value after `=` is `old`, if
it is add the item by itself, otherwise add the items to the value (that's not `old`). Do the same if it's `*` but
instead of adding, multiply. Now, we can set the item to the operation result, divided by 3 (only for part 1), rounded
down. We can perform the test now, if: the item's mod the monkey's test divisor equals 0 (in JS:
`item % monkey.test === 0`), if it is add the item to the end of the array where we're supposed to add if it's
divisible. If it's not divisible (the if statement is false), add the item to the end of the not-divisible array. Either
way, increment the number of items to remove variable by 1. Outside of that items loop,
[`.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) it starting
from index 0, and removing the number of items to remove variable. Outside of any loop, get the product (your result) of
the two highest numbers by getting the items inspected for each monkey, sorting it from largest to smallest, and
multiplying the first two numbers together.

For part 2, it's pretty similar but instead of looping through 20 rounds we're looping through 10,000 rounds and you
have to remove the divided by 3 and round down part. If you do that, you'll find that that JS will give you a huge
number, that's because it's too big for JS or for most languages to handle. We have to do a trick here in the `/ 3`
part, by instead setting the item to the item mod every monkey's test divisor multiplied by each other. In JS, it'll
look something like this: `item % monkeys.reduce((total, monkey) => total * monkey.test), 1` where `m.test` is the
monkey's test divisor. If everything goes well, you should get your correct result!
