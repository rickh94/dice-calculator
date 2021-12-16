import {DiceOutput} from "./diceOutput";

export default function diceSum(n: number, s: number): DiceOutput {
  let dp = new Array(n + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(2);
  }
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < s * n + 1; j++) {
      dp[i][j] = 0;
    }
  }
  for (let i = 1; i <= s; i++) {
    dp[1][i] = 1.0 / s;
  }
  for (let i = 2; i <= n; i++) {
    for (let j = i - 1; j <= s * (i - 1); j++) {
      for (let k = 1; k <= s; k++) {
        dp[i][j + k] += (dp[i - 1][j] * dp[1][k]);
      }
    }
  }
  let output: DiceOutput = [];
  for (let i = n; i <= s * n; i++) {
    output.push({roll: i, probability: Math.round(dp[n][i] * 1000.0) / 1000.0})
  }
  return output;
}
