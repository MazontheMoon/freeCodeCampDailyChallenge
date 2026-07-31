function getLoanSchedule(amount, annualRate, monthlyPayment) {
  const schedule = [amount];

  let balance = amount;
  const monthlyRate = annualRate / 100 / 12;

  while (balance > 0) {
    // Add one month's interest
    balance += balance * monthlyRate;

    // Make the payment
    balance -= monthlyPayment;

    // Don't allow negative balances
    if (balance < 0) {
      balance = 0;
    }

    // Store the rounded balance
    schedule.push(Math.round(balance));
  }

  return schedule;
}
