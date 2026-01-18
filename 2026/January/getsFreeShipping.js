/*
FUNCTION getsFreeShipping(cartItems, minimumAmount)

  Define a list of item prices

  Set totalCost to 0

  FOR each item in cartItems
    Look up the price of the item
    Add the price to totalCost
  END FOR

  IF totalCost is greater than or equal to minimumAmount
    RETURN true
  ELSE
    RETURN false
  END IF

END FUNCTION
*/

/**
 * Determines whether a shopping cart qualifies for free shipping.
 *
 * @param {string[]} cartItems - An array of item names in the shopping cart.
 * @param {number} minimumAmount - The minimum order total required for free shipping.
 * @returns {boolean} True if the cart total meets or exceeds the minimum amount, otherwise false.
 */

function getsFreeShipping(cartItems, minimumAmount) {
  const prices = {
    shirt: 34.25,
    jeans: 48.50,
    shoes: 75.00,
    hat: 19.95,
    socks: 15.00,
    jacket: 109.95
  };

  let totalCost = 0;

  for (let item of cartItems) {
    totalCost += prices[item];
  }

  return totalCost >= minimumAmount;
}
