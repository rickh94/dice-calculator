<template>
  <div>
    <canvas id="probability-chart"></canvas>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Chart from 'chart.js/dist/Chart.min.js'
import {DiceResult} from '@/calculations/diceOutput';
import useDice from '@/store/dice';
import useCalculations, {Calculations} from '@/store/calculations';

export default defineComponent({
  name: "ProbabilityChart",
  props: {
    data: {
      type: Array,
      required: true,
    }
  },
  setup() {
    const {diceCount, selectedDie} = useDice();
    const {selectedCalc} = useCalculations();
    let title = '';
    switch (selectedCalc.value.value) {
      case Calculations.Adv:
        title = `Probabilities when Rolling ${diceCount.value} ${selectedDie.value.name} Dice with Advantage`;
        break;
      case Calculations.Dis:
        title = `Probabilities when Rolling ${diceCount.value} ${selectedDie.value.name} Dice with Disadvantage`;
        break;
      case Calculations.Sum:
        title = `Probabilities when Rolling the Sum of ${diceCount.value} ${selectedDie.value.name} Dice`;
        break;
      default:
        title = "Something went wrong";
    }
    return {title};
  },
  mounted() {
    const third = this.data.length / 3;
    // let colors = Array(Math.floor(third)).fill('rgb(225 29 72)');
    const colors = [
      ...Array(Math.ceil(third)).fill('rgb(225 29 72)'),
      ...Array(Math.ceil(third)).fill('rgb(2 132 199)'),
      ...Array(Math.floor(third)).fill('rgb(13 148 136)'),
    ]
    // colors.push.apply(Array(Math.ceil(third)).fill('rgb(2 132 199)'));
    // colors.push.apply(Array(Math.floor(third)).fill('rgb(13 148 136)'));
    const chartConfig = {
      type: 'bar',
      data: {
        labels: this.data.map((item: DiceResult) => `${item.roll}`),
        datasets: [
          {
            label: 'Roll Probability',
            data: this.data.map((item: DiceResult) => (item.probability * 100).toFixed(2)),
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: colors,
          }
        ]
      },
      options: {
        scales: {
          display: true,
          x: {
            title: {
              display: true,
              text: "Roll Total",
            }
          },
          y: {
            title: {
              display: true,
              text: "Probability (%)",
            },
            ticks: {
              callback: function(value, index, values) {
                return `${value.toFixed(2)} %`;
              }
            }
          }
        },
        responsive: true,
        lineTension: 1,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: this.title,
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: ${context.parsed.y}%`;
              },
            }
          }
        }
      }
    }
    const ctx = document.getElementById('probability-chart') as HTMLCanvasElement;
    new Chart(ctx, chartConfig);
  }
});
</script>

<style scoped>

</style>
