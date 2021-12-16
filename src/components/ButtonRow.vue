<template>
  <div class="flex w-full justify-between gap-4 mt-4">
    <div>
      <button type="button"
              class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click="goToPreviousStep"
              v-if="hasPreviousStep"
      >
        <ArrowCircleLeftIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        Previous
      </button>
    </div>
    <div>
      <button type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click="goToNextStep"
              v-if="hasNextStep"
      >
        Next
        <ArrowCircleRightIcon class="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
      </button>
      <button type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click="$emit('calculate')"
              v-else
      >
        Calculate
        <ChartBarIcon class="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ArrowCircleRightIcon, ArrowCircleLeftIcon, ChartBarIcon } from "@heroicons/vue/solid";
import useSteps from "@/store/steps";
import {defineComponent} from "vue";

export default defineComponent({
  name: "ButtonRow",
  components: {
    ArrowCircleRightIcon,
    ArrowCircleLeftIcon,
    ChartBarIcon
  },
  emits: ["calculate"],
  setup() {
    const { hasNextStep, hasPreviousStep, goToNextStep, goToPreviousStep } = useSteps();
    return {
      hasNextStep, hasPreviousStep, goToNextStep, goToPreviousStep,
    };
  },
});
</script>

<style scoped>

</style>
