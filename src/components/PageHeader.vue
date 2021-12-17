<template>
  <div class="p-8 shadow print:shadow-none">
    <div class="flex flex-col items-center justify-center sm:flex sm:flex-row sm:items-center sm:justify-between">
      <div class="md:flex-1 min-w-0 flex items-center gap-2">
        <main-icon class="h-10"></main-icon>
        <h2 class="text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          RPG Dice Calculator
        </h2>
      </div>
      <div class="mt-4 flex md:mt-0 md:ml-4">
        <button type="button"
                class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 print:hidden"
                @click="restart"
        >
          Restart
        </button>
        <button type="button"
                class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 print:hidden"
                @click="printOpen = true"
                v-if="isDisplayStage"
        >
          Print
        </button>
      </div>
    </div>
    <print-dialog :open="printOpen" @close="printOpen = false" @print="printChart"></print-dialog>
  </div>
</template>

<script lang="ts">
import MainIcon from '@/components/dice-icons/MainIcon.vue'
import {defineComponent, ref} from "vue";
import useDice from "@/store/dice";
import useCalculations from "@/store/calculations";
import useSteps from "@/store/steps";
import PrintDialog from "@/components/PrintDialog.vue";

export default defineComponent({
  name: "PageHeader",
  components: {
    PrintDialog,
    MainIcon
  },
  data() {
    return {
      printOpen: false,
    }
  },
  setup() {
    const {resetDice} = useDice();
    const {resetCalc} = useCalculations();
    const {resetStage, isDisplayStage} = useSteps();
    const restart = () => {
      resetDice();
      resetCalc();
      resetStage();
    }
    return {restart, isDisplayStage};
  },
  methods: {
    printChart() {
      this.printOpen = false;
      setTimeout(() => window.print(), 500);
    }
  },
});
</script>

<style scoped>

</style>
