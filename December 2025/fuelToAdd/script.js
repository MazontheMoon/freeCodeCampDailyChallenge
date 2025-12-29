// PSEUDOCODE:
// 1. Convert the current gallons to liters using the conversion factor (1 gallon = 3.78541 liters)
// 2. Calculate the difference between required liters and current liters
// 3. If the difference is less than or equal to 0, return 0
// 4. Otherwise, divide the difference by 3.78541 to get gallons needed
// 5. Round up to the next whole number since you can only add whole gallons
// 6. Return the result

/**
 * Calculates the number of additional gallons needed to reach the required liters.
 *
 * @param {number} currentGallons - Current fuel in gallons
 * @param {number} requiredLiters - Required fuel in liters to reach the destination
 * @returns {number} Number of whole gallons to add (0 if enough fuel)
 */

function fuelToAdd(currentGallons, requiredLiters) {
  const litersPerGallon = 3.78541;

  // Convert current gallons to liters
  const currentLiters = currentGallons * litersPerGallon;

  // Calculate additional liters needed
  const litersNeeded = requiredLiters - currentLiters;

  if (litersNeeded <= 0) {
    return 0;
  }

  // Convert to gallons and round up to next whole number
  return Math.ceil(litersNeeded / litersPerGallon);
}

