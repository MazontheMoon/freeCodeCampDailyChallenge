function exactChange(amount) {
  const coins = [1, 5, 10, 25];
  const ways = new Array(amount + 1).fill(0);

  ways[0] = 1;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      ways[i] += ways[i - coin];
    }
  }

  return ways[amount];
}