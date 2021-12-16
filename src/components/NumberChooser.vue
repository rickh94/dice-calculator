<template>
  <div>
    <div>
      <h2 class="text-base font-medium text-gray-900 text-2xl">
        <component v-if="cannotChangeDice">You have to roll two dice for this calculation</component>
        <component v-else>
          How Many Dice Are You Rolling?
        </component>
      </h2>
    </div>
    <div class="flex items-center justify-center w-full mt-4 ">
      <div class="border-gray-300 bg-white border rounded-lg shadow-sm flex h-50">
        <input type="number"
               name="num_of_dice"
               class="rounded-l-lg appearance-none py-2 px-0.5 text-center text-8xl w-40 focus:outline-none row-span-2 col-span-1 disabled:bg-gray-200 disabled:text-gray-400"
               v-model="diceCount"
               :disabled="cannotChangeDice"
        >
        <div class="grid grid-rows-2 grid-cols-1 gap-0 w-20">
          <button class="rounded-tr-lg bg-transparent border-l border-b border-gray-300 disabled:bg-gray-200 disabled:text-gray-400 focus:bg-emerald-100 active:bg-emerald-200"
                  type="button"
                  title="More Dice"
                  @click="increaseDiceCount"
                  :disabled="cannotChangeDice"
          >
            <ChevronUpIcon></ChevronUpIcon>
          </button>
          <button class="rounded-br-lg bg-transparent border-l border-gray-300 disabled:bg-gray-200 disabled:text-gray-400 focus:bg-emerald-100 active:bg-emerald-200"
                  type="button"
                  title="Fewer Dice"
                  @click="decreaseDiceCount"
                  :disabled="diceCount < 2 || cannotChangeDice"
          >
            <ChevronDownIcon></ChevronDownIcon>
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {ChevronUpIcon, ChevronDownIcon} from "@heroicons/vue/solid";
import useDice from "@/store/dice.ts";
import useCalculations from "@/store/calculations.ts";
import {defineComponent} from "vue";

export default defineComponent({
  name: "NumberChooser",
  components: {
    ChevronDownIcon, ChevronUpIcon,
  },
  setup() {
    const {resetDiceCount, diceCount, increaseDiceCount, decreaseDiceCount} = useDice();
    const {cannotChangeDice} = useCalculations();
    if (cannotChangeDice) {
      resetDiceCount();
    }
    return {diceCount, increaseDiceCount, decreaseDiceCount, cannotChangeDice};
  },
});
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

</style>
