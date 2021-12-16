<template>
  <div class="bg-white overflow-hidden shadow border border-gray-300 rounded-md my-4"
  >
    <div class="px-4 py-5 sm:p-6">
      <component :is="currentStep.component"></component>
      <button-row @calculate="$emit('calculate')"></button-row>
    </div>
  </div>
</template>

<script lang="ts">
import useSteps from "@/store/steps";
import ButtonRow from "@/components/ButtonRow.vue";
import DiceChooser from "@/components/DiceChooser.vue";
import CalculationChooser from "@/components/CalculationChooser.vue";
import NumberChooser from "@/components/NumberChooser.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "FormElements",
  components: {
    ButtonRow, DiceChooser, CalculationChooser, NumberChooser
  },
  emits: ["calculate"],
  setup() {
    const {currentStep} = useSteps();
    return {currentStep};
  },
});
</script>

<style scoped>

</style>
