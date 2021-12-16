<template>
  <RadioGroup v-model="selectedCalc">
    <RadioGroupLabel class="text-base font-medium text-gray-900 text-2xl">
      How Are You Rolling the Dice?
    </RadioGroupLabel>

    <div class="mt-4 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
      <RadioGroupOption as="template"
                        v-for="calc in allCalculations"
                        :key="calc.id"
                        :value="calc"
                        v-slot="{ checked, active }">
        <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'ring-2 ring-emerald-500' : '', 'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none']">
          <div class="flex-1 flex">
            <div class="flex flex-col w-full justify-center items-center">
              <RadioGroupLabel as="span" class="block text-sm font-medium text-gray-900">
                {{ calc.name }}
              </RadioGroupLabel>
              <RadioGroupDescription as="div"
                                     class="mt-1 w-full flex justify-center items-center text-sm text-gray-500">
                <component :is="`${calc.icon}`" class="h-32 text-gray-800"></component>
              </RadioGroupDescription>
              <RadioGroupDescription as="div" class="mt-2 text-sm font-medium text-gray-900">
                {{ calc.description }}
              </RadioGroupDescription>
            </div>
          </div>
          <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-emerald-600']" aria-hidden="true" />
          <div :class="[active ? 'border' : 'border-2', checked ? 'border-emerald-500' : 'border-transparent', 'absolute -inset-px rounded-lg pointer-events-none']"
               aria-hidden="true" />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script lang="ts">
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { CheckCircleIcon, ArrowCircleUpIcon, ArrowCircleDownIcon, PlusCircleIcon } from "@heroicons/vue/solid/index.js";
import useCalculations from "@/store/calculations";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CalculationChooser",
  components: {
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
    CheckCircleIcon,
    ArrowCircleUpIcon,
    ArrowCircleDownIcon,
    PlusCircleIcon,
  },
  setup() {
    const { allCalculations, selectedCalc } = useCalculations();

    return {
      allCalculations, selectedCalc
    };
  },
});
</script>
