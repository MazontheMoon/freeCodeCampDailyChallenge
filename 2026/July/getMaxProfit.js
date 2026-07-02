function getMaxProfit(prices, budget) {
  let maxProfit = 0;

  for (let buy = 0; buy < prices.length - 1; buy++) {
    const shares = Math.floor(budget / prices[buy]);

    if (shares === 0) continue;

    for (let sell = buy + 1; sell < prices.length; sell++) {
      const profit = shares * (prices[sell] - prices[buy]);

      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  // Round DOWN to the nearest cent
  maxProfit = Math.floor(maxProfit * 100) / 100;

  return maxProfit.toFixed(2);
}