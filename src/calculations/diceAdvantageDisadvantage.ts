import {DiceOutput} from "./diceOutput";

export function calculateAdvantage(sides: number): DiceOutput {
  let output: DiceOutput = [];
  for (let i = 1; i <= sides; i++) {
    output.push({roll: i, probability: (2 * i - 1) / (sides * sides)})
  }
  return output;
}

export function calculateDisadvantage(sides: number): DiceOutput {
  let output: DiceOutput = [];
  for (let i = 1; i <= sides; i++) {
    output.push({roll: i, probability: (2 * (sides - i) + 1) / (sides * sides)})
  }
  return output;
}
