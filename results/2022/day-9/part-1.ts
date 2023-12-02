import { getInput } from "../../../src/get-input.ts";

const input = getInput(2022, 9);

type direction = "R" | "L" | "U" | "D";
type pair = [number, number];

const equals = (a: pair, b: pair) => a.at(0) === b.at(0) && a.at(1) === b.at(1);
const zeroOrValue = (a: number) => a; // (a < 0 ? 0 : a);

const isTouching = () => {
  const result = [
    equals(tailCoordinate, headCoordinate), // same
    equals([zeroOrValue(tailCoordinate.at(0)! - 1), tailCoordinate.at(1)!], headCoordinate), // left
    equals([zeroOrValue(tailCoordinate.at(0)! + 1), tailCoordinate.at(1)!], headCoordinate), // right
    equals([tailCoordinate.at(0)!, zeroOrValue(tailCoordinate.at(1)! + 1)], headCoordinate), // up
    equals([tailCoordinate.at(0)!, zeroOrValue(tailCoordinate.at(1)! - 1)], headCoordinate), // down
    equals([zeroOrValue(tailCoordinate.at(0)! - 1), zeroOrValue(tailCoordinate.at(1)! + 1)], headCoordinate), // left-up
    equals([zeroOrValue(tailCoordinate.at(0)! + 1), zeroOrValue(tailCoordinate.at(1)! + 1)], headCoordinate), // right-up
    equals([zeroOrValue(tailCoordinate.at(0)! - 1), zeroOrValue(tailCoordinate.at(1)! - 1)], headCoordinate), // left-down
    equals([zeroOrValue(tailCoordinate.at(0)! + 1), zeroOrValue(tailCoordinate.at(1)! - 1)], headCoordinate), // right-down
  ].some((isEquals) => isEquals === true);
  return result;
};

let headCoordinate: pair = [0, 0];
let tailCoordinate: pair = [0, 0];
const tailVisitedCoordinates: Set<`${number},${number}`> = new Set();
const instructions: [direction, number][] = [];

for (const line of input.split("\n")) {
  const [direction, distance] = line.split(" ");
  instructions.push([direction as direction, parseInt(distance)]);
}

for (const [direction, distance] of instructions) {
  for (let index = 0; index < distance; index++) {
    switch (direction) {
      case "R":
        headCoordinate = [headCoordinate.at(0)! + 1, headCoordinate.at(1)!];
        if (!isTouching()) {
          tailCoordinate = [tailCoordinate.at(0)! + 1, headCoordinate.at(1)!];
          tailVisitedCoordinates.add(`${tailCoordinate.at(0)},${tailCoordinate.at(1)}}` as `${number},${number}`);
        }
        break;
      case "L":
        headCoordinate = [headCoordinate.at(0)! - 1, headCoordinate.at(1)!];
        if (!isTouching()) {
          tailCoordinate = [tailCoordinate.at(0)! - 1, headCoordinate.at(1)!];
          tailVisitedCoordinates.add(`${tailCoordinate.at(0)},${tailCoordinate.at(1)}}` as `${number},${number}`);
        }
        break;
      case "U":
        headCoordinate = [headCoordinate.at(0)!, headCoordinate.at(1)! + 1];
        if (!isTouching()) {
          tailCoordinate = [headCoordinate.at(0)!, tailCoordinate.at(1)! + 1];
          tailVisitedCoordinates.add(`${tailCoordinate.at(0)},${tailCoordinate.at(1)}}` as `${number},${number}`);
        }
        break;
      case "D":
        headCoordinate = [headCoordinate.at(0)!, headCoordinate.at(1)! - 1];
        if (!isTouching()) {
          tailCoordinate = [headCoordinate.at(0)!, tailCoordinate.at(1)! - 1];
          tailVisitedCoordinates.add(`${tailCoordinate.at(0)},${tailCoordinate.at(1)}}` as `${number},${number}`);
        }
        break;
    }
  }
}

console.log(tailVisitedCoordinates.size + 1);
