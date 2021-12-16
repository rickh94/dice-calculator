<template>
  <main class="max-w-4xl mx-auto mt-8 px-4 flex-col gap-2" v-if="isFormStage">
    <div class="flex flex-col gap-2">
      <steps></steps>
      <form-elements @calculate="calculate"></form-elements>
      <app-footer class="mt-32 print:hidden"></app-footer>
    </div>
  </main>
  <main class="max-w-4xl mx-auto px-4 mt-8 flex-col gap-2" v-else-if="isCalcStage">
    <div class="bg-white overflow-hidden shadow border border-gray-300 rounded-md my-4 h-100">
      <div class="px-4 py-5 sm:p-6 flex flex-col justify-center items-center w-full">
        <calculator-icon icon-class="m-8 animate-bounce h-40"></calculator-icon>
        <div class="font-bold text-4xl mb-4">Calculating...</div>
      </div>
    </div>
  </main>
  <main class="max-w-4xl mx-auto px-4 mt-8 flex-col gap-2" v-else-if="isDisplayStage">
    <div class="bg-white overflow-hidden shadow border border-gray-300 rounded-md my-4 h-100 print:shadow-none print:border-none">
      <div class="px-4 py-5 sm:p-6 ">
        <probability-chart :data="diceData"></probability-chart>
      </div>
    </div>
    <app-footer class="mt-44 print:hidden"></app-footer>
  </main>
  <main class="max-w-4xl mx-auto px-4 my-8 flex-col gap-2" v-else>
    <div class="bg-white overflow-hidden shadow border border-gray-300 rounded-md my-4 h-100">
      Something has gone wrong...
    </div>
  </main>
</template>

<script lang="ts">
import Steps from "@/components/Steps.vue";
import FormElements from "@/components/FormElements.vue";
import useSteps from "@/store/steps";
import CalculatorIcon from "@/components/CalculatorIcon.vue";
import doCalculation from "@/calculations/doCalculation";
import ProbabilityChart from '@/components/ProbabilityChart.vue';
import {defineComponent} from "vue";
import AppFooter from "@/components/AppFooter.vue";

export default defineComponent({
  name: "AppMain",
  components: {
    AppFooter,
    Steps,
    FormElements,
    CalculatorIcon,
    ProbabilityChart
  },
  setup() {
    const { isFormStage, isCalcStage, isDisplayStage, startCalculation, finishCalculation } = useSteps();
    return { isFormStage, isCalcStage, isDisplayStage, startCalculation, finishCalculation };
  },
  data() {
    return {
      diceData: {},
    };
  },
  methods: {
    calculate() {
      this.startCalculation();
      this.diceData = doCalculation();
      this.finishCalculation();
    },
  },
});
</script>

<style scoped>

</style>
