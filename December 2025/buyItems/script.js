// PSEUDOCODE:
// 1. Create an object that stores exchange rates to USD
// 2. Convert the available funds into USD
// 3. Create a variable to track how much money is left
// 4. Create a counter for how many items can be bought
// 5. Loop through the items array in order
//    - Convert the item price to USD
//    - If there is enough money left to buy the item:
//        - Subtract the price from remaining funds
//        - Increase the counter
//    - Otherwise, stop checking further items
// 6. If all items were purchased, return "Buy them all!"
// 7. Otherwise, return "Buy the first X items."

/**
 * Determines how many items can be afforded based on available funds.
 * Prices are converted to USD using fixed exchange rates and items
 * are purchased in the given order.
 *
 * @param {Array} funds - An array containing amount and currency code
 * @param {Array[]} items - An array of items, each with amount and currency code
 * @returns {string} A message indicating how many items can be bought
 */

function buyItems(funds, items) {
  const exchangeRates = {
    USD: 1.00,
    EUR: 1.10,
    GBP: 1.25,
    JPY: 0.0070,
    CAD: 0.75
  };

  // Convert available funds to USD
  let remainingFunds =
    parseFloat(funds[0]) * exchangeRates[funds[1]];

  let itemsBought = 0;

  // Try to buy items in order
  for (let i = 0; i < items.length; i++) {
    const price =
      parseFloat(items[i][0]) * exchangeRates[items[i][1]];

    if (remainingFunds >= price) {
      remainingFunds -= price;
      itemsBought++;
    } else {
      break;
    }
  }

  // Return result message
  if (itemsBought === items.length) {
    return "Buy them all!";
  } else {
    return `Buy the first ${itemsBought} items.`;
  }
}
