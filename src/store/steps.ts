import {computed, reactive, toRefs, watch} from "vue";

interface Step {
  id: number,
  name: string,
  completed: boolean,
  component: string,
}

enum Stage {
  Form,
  Calc,
  Display,
}

const allSteps: Step[] = [
  {id: 1, name: 'Dice Type', completed: false, component: 'dice-chooser'},
  {id: 2, name: 'Calculation', completed: false, component: 'calculation-chooser'},
  {id: 3, name: 'Number of Dice', completed: false, component: 'number-chooser'},
];

const stepState = reactive({
  currentStep: allSteps[0],
  stage: Stage.Form,
})

watch(() => stepState.currentStep, (newStep: Step) => {
  // @ts-ignore
  const nextStepIndex = allSteps.findIndex(step => step.id === newStep.id);
  allSteps.forEach((step, idx) => {
    if (idx >= nextStepIndex) {
      step.completed = false
    }
  });
})

const currentStepIndex = computed(() => {
  // @ts-ignore
  return allSteps.findIndex(step => step.id === stepState.currentStep.id);
});


const hasNextStep = computed(() => {
  return currentStepIndex.value < allSteps.length - 1;
});

const hasPreviousStep = computed(() => {
  return currentStepIndex.value > 0;
})

const goToNextStep = () => {
  if (hasNextStep.value) {
    stepState.currentStep.completed = true;
    stepState.currentStep = allSteps[currentStepIndex.value + 1]
  }
}

const goToPreviousStep = () => {
  if (hasPreviousStep.value) {
    stepState.currentStep.completed = false;
    stepState.currentStep = allSteps[currentStepIndex.value - 1]
  }
}

const goToStep = (step) => {
  // @ts-ignore
  if (allSteps.includes(step)) {
    stepState.currentStep = step;
  }
}

const resetStage = () => {
  stepState.stage = Stage.Form;
  stepState.currentStep = allSteps[0];
}

const startCalculation = () => {
  stepState.stage = Stage.Calc;
}

const finishCalculation = () => {
  stepState.stage = Stage.Display;
};

const isFormStage = computed(() =>
  stepState.stage === Stage.Form
)

const isCalcStage = computed(() =>
  stepState.stage === Stage.Calc
);

const isDisplayStage = computed(() =>
  stepState.stage === Stage.Display
);


export default function useSteps() {
  return {
    ...toRefs(stepState),
    hasNextStep,
    hasPreviousStep,
    goToNextStep,
    goToPreviousStep,
    goToStep,
    resetStage,
    startCalculation,
    finishCalculation,
    isFormStage,
    isCalcStage,
    isDisplayStage,
    allSteps
  }
}

