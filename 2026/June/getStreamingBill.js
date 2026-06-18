/*
PSEUDOCODE:
1. Create price table: format → type → price
2. Create discount table
3. Initialize total = 0
4. Loop through cart:
   a. Add price based on format and type
5. Apply discount to total
6. Round to 2 decimal places
7. Format as "$D.CC"
8. Return result
*/

/**
 * Calculates total streaming bill with subscription discount.
 *
 * @param {{format: string, type: string}[]} cart
 * @param {string} tier
 * @returns {string}
 */
function getStreamingBill(cart, tier) {
  const prices = {
    HD: { rent: 3.99, buy: 12.99 },
    "4K": { rent: 5.99, buy: 19.99 }
  };

  const discounts = {
    none: 0,
    basic: 0.10,
    premium: 0.25
  };

  let total = 0;

  for (const item of cart) {
    total += prices[item.format][item.type];
  }

  total = total * (1 - discounts[tier]);

  // Fix floating point issues and format
  return `$${total.toFixed(2)}`;
}