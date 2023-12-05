import { getInput } from "../../../src/get-input.ts";

const input = getInput(2023, 4);

let sum = 0;

const queue = new Map<number, number>();
const cardMap = new Map<number, number>();

function processCopies(cardNum: number, count: number) {
  const matchesLength = cardMap.get(cardNum)!;

  for (let i = 0; i < count; i++) {
    let nextCard = cardNum + 1;
    for (let i = 0; i < matchesLength; i++) {
      queue.set(nextCard, (queue.get(nextCard) ?? 0) + 1);
      nextCard++;
    }
    sum++;
  }
}

for (let [index, line] of input.split("\n").entries()) {
  line = line.split(": ")[1];
  sum++;

  const [originalNums, winningNums] = line.split(" | ").map((set) => set.split(" ").filter(Boolean));

  const matches = [...new Set(originalNums.filter((n) => winningNums.includes(n)))];
  cardMap.set(index + 1, matches.length);

  let nextCard = index + 2;
  for (let i = 0; i < matches.length; i++) {
    queue.set(nextCard, (queue.get(nextCard) ?? 0) + 1);
    nextCard++;
  }

  if (queue.has(index + 1)) {
    processCopies(index + 1, queue.get(index + 1)!);
  }
}

console.log(sum);
