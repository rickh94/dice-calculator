import {computed, reactive, toRefs} from "vue";

export enum Calculations {
  Adv,
  Dis,
  Sum,
}

const allCalculations = [
  {
    id: 0,
    name: 'Total',
    description: 'Roll multiple dice and take the sum',
    icon: 'PlusCircleIcon',
    value: Calculations.Sum
  },
  {
    id: 1,
    name: 'Advantage',
    description: 'Roll two dice and take the higher roll',
    icon: 'ArrowCircleUpIcon',
    value: Calculations.Adv
  },
  {
    id: 2,
    name: 'Disadvantage',
    description: 'Roll two dice and take the lower roll',
    icon: 'ArrowCircleDownIcon',
    value: Calculations.Dis
  },
]

const state = reactive({
  selectedCalc: allCalculations[0],
})

const cannotChangeDice = computed(() => {
  return state.selectedCalc.value !== Calculations.Sum;
})

const resetCalc = () => {
  state.selectedCalc = allCalculations[0];
}

export default function useCalculations() {
  return {
    ...toRefs(state),
    cannotChangeDice,
    allCalculations,
    resetCalc,
  }
}
