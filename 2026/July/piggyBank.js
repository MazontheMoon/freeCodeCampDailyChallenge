function piggyBank(coins) {
  const totalCents =
    (coins.pennies || 0) +
    (coins.nickels || 0) * 5 +
    (coins.dimes || 0) * 10 +
    (coins.quarters || 0) * 25;

  return `$${(totalCents / 100).toFixed(2)}`;
}
