<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav aria-label="Progress">
    <ol role="list" class="shadow-sm border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0">
      <li v-for="(step, stepIdx) in allSteps" :key="step.name" class="relative md:flex-1 md:flex">
        <button v-if="step.completed" class="group flex items-center w-full" @click="goToStep(step)">
          <span class="px-6 py-4 flex items-center text-sm font-medium">
            <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-emerald-600 rounded-full group-hover:bg-emerald-800">
              <CheckIcon class="w-6 h-6 text-white" aria-hidden="true" />
            </span>
            <span class="ml-4 text-sm font-medium text-gray-900">{{ step.name }}</span>
          </span>
        </button>
        <div v-else-if="step.id === currentStep.id"
             class="px-6 py-4 flex items-center text-sm font-medium"
             aria-current="step">
          <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-emerald-600 rounded-full">
            <span class="text-emerald-600">{{ step.id }}</span>
          </span>
          <span class="ml-4 text-sm font-medium text-emerald-600">{{ step.name }}</span>
        </div>
        <div v-else class="group flex items-center">
          <span class="px-6 py-4 flex items-center text-sm font-medium">
            <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full">
              <span class="text-gray-500">{{ step.id }}</span>
            </span>
            <span class="ml-4 text-sm font-medium text-gray-500">{{ step.name }}</span>
          </span>
        </div>
        <template v-if="(stepIdx !== allSteps.length - 1)">
          <!-- Arrow separator for lg screens and up -->
          <div class="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
            <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
              <path d="M0 -2L20 40L0 82"
                    vector-effect="non-scaling-stroke"
                    stroke="currentcolor"
                    stroke-linejoin="round" />
            </svg>
          </div>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import useSteps from "../store/steps.ts";
import {CheckIcon} from "@heroicons/vue/solid/index.js";
import {defineComponent} from "vue";


export default defineComponent({
  components: {
    CheckIcon,
  },
  setup() {
    const {allSteps, currentStep, nextStep, goToStep} = useSteps();
    return {
      allSteps, currentStep, nextStep, goToStep
    };
  },
});
</script>
