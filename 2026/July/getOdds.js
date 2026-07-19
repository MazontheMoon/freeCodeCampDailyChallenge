function getOdds(dice, target) {
  // dp[sum] = number of ways to get this sum
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let d = 0; d < dice; d++) {
    let next = new Array(target + 1).fill(0);

    for (let sum = 0; sum <= target; sum++) {
      if (dp[sum] === 0) continue;

      for (let face = 1; face <= 6; face++) {
        if (sum + face <= target) {
          next[sum + face] += dp[sum];
        }
      }
    }

    dp = next;
  }

  const ways = dp[target];
  const totalOutcomes = Math.pow(6, dice);
  const odds = Math.round(totalOutcomes / ways);

  return `1 in ${odds}`;
}