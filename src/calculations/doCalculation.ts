import {DiceOutput} from "./diceOutput";
import useCalculations, {Calculations} from "../store/calculations";
import useDice from '../store/dice';
import {calculateAdvantage, calculateDisadvantage} from "./diceAdvantageDisadvantage";
import diceSum from './diceSum';

export default function doCalculation(): DiceOutput {
  const {selectedCalc} = useCalculations();
  const {selectedDie, diceCount} = useDice();
  switch (selectedCalc.value.value) {
    case Calculations.Adv:
      return calculateAdvantage(selectedDie.value.sides)
    case Calculations.Dis:
      return calculateDisadvantage(selectedDie.value.sides)
    case Calculations.Sum:
      return diceSum(diceCount.value, selectedDie.value.sides)
    default:
      throw new Error("Invalid calculation")
  }
}
