import {reactive, toRefs} from 'vue';

const allDice = [
  {sides: 20, name: "Twenty-sided", icon: "D20Icon", id: 'D20'},
  {sides: 12, name: "Twelve-sided", icon: "D12Icon", id: 'D12'},
  {sides: 10, name: "Ten-sided", icon: "D10Icon", id: 'D10'},
  {sides: 8, name: "Eight-sided", icon: "D8Icon", id: 'D8'},
  {sides: 6, name: "Six-sided", icon: "D6Icon", id: 'D6'},
  {sides: 4, name: "Four-sided", icon: "D4Icon", id: 'D4'},
];

const state = reactive({
  selectedDie: allDice[0],
  diceCount: 2,
})

const increaseDiceCount = () => {
  state.diceCount += 1;
}

const decreaseDiceCount = () => {
  if (state.diceCount > 1) {
    state.diceCount -= 1;
  }
}

const resetDiceCount = () => {
  state.diceCount = 2;
}

const resetDice = () => {
  resetDiceCount();
  state.selectedDie = allDice[0];
}

export default function useDice() {
  return {
    ...toRefs(state),
    increaseDiceCount,
    decreaseDiceCount,
    resetDiceCount,
    allDice,
    resetDice,
  }
}
