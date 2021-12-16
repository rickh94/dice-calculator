<template>
  <RadioGroup v-model="selectedDie">
    <RadioGroupLabel class="text-base font-medium text-gray-900 text-2xl">
      Which type of dice are you rolling?
    </RadioGroupLabel>

    <div class="mt-4 grid grid-cols-1 xs:grid-cols-2 xs:gap-x-4 gap-y-6 sm:grid-cols-3">
      <RadioGroupOption as="template"
                        v-for="die in allDice"
                        :key="die.id"
                        :value="die"
                        v-slot="{ checked, active }">
        <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'ring-2 ring-emerald-500' : '', 'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none']">
          <div class="flex-1 flex">
            <div class="flex flex-col w-full justify-center items-center">
              <RadioGroupLabel as="span" class="block text-sm font-medium text-gray-900">
                {{ die.name }}
              </RadioGroupLabel>
              <RadioGroupDescription as="div"
                                     class="mt-1 w-full flex justify-center items-center text-sm text-gray-500">
                <component :is="`${die.icon}`"></component>
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
import { CheckCircleIcon } from "@heroicons/vue/solid/index.js";
import D4Icon from "@/components/dice-icons/D4Icon.vue";
import D6Icon from "@/components/dice-icons/D6Icon.vue";
import D8Icon from "@/components/dice-icons/D8Icon.vue";
import D10Icon from "@/components/dice-icons/D10Icon.vue";
import D12Icon from "@/components/dice-icons/D12Icon.vue";
import D20Icon from "@/components/dice-icons/D20Icon.vue";
import useDice from "@/store/dice";
import {defineComponent} from "vue";

export default defineComponent({
  name: "DiceChooser",
  components: {
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
    CheckCircleIcon,
    D4Icon,
    D6Icon,
    D8Icon,
    D10Icon,
    D12Icon,
    D20Icon,
  },
  setup() {
    const { allDice, selectedDie } = useDice();

    return {
      allDice, selectedDie,
    };
  },
});
</script>
