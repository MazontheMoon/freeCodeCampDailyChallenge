/*
Challenge - Fill The Tank
Given the size of a fuel tank, the current fuel level, and the price per gallon, return the cost to fill the tank all the way.
- tankSize is the total capacity of the tank in gallons.
- fuelLevel is the current amount of fuel in the tank in gallons.
- pricePerGallon is the cost of one gallon of fuel.
The returned value should be rounded to two decimal places in the format: "$d.dd".
*/

/**
 * Returns string of slug generated from url.
 *
 * @param {number} tankSize - a positive integer showing tank capacity
 * @param {number} fuelLevel - a positive integer showing current capacity used.
 * @param {pricePerGallon} tankSize - a double for price.
 * @return {string} cost of filling up the tank with currency symbol.
 */

function costToFill(tankSize, fuelLevel, pricePerGallon) {
  // Ensure numeric inputs
  const t = Number(tankSize);
  const f = Number(fuelLevel);
  const p = Number(pricePerGallon);

  if (!isFinite(t) || !isFinite(f) || !isFinite(p)) {
    throw new TypeError('All arguments must be finite numbers.');
  }

  // If tank is full or overfull, no cost.
  const needed = Math.max(0, t - f);

  const cost = needed * p;

  // Format to two decimal places with leading dollar sign
  return `$${cost.toFixed(2)}`;
}