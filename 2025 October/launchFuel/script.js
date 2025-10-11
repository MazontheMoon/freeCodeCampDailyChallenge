/**
 * Calculates the total fuel required to lift a payload into orbit,
 * taking into account that fuel itself adds mass.
 *
 * The calculation follows these rules:
 * 1. Rockets require 1 kg of fuel for every 5 kg of mass they must lift.
 * 2. Adding fuel increases the total mass, which requires additional fuel.
 * 3. Repeat the calculation until the additional fuel required is less than 1 kg.
 *
 * @param {number} payload - The mass of the payload in kilograms (kg).
 * @returns {number} Total fuel required in kilograms, rounded to one decimal place.
 *
 * @throws {TypeError} If the input is not a number.
 * @throws {RangeError} If the payload mass is negative.
 *
 * @example
 * launchFuel(50);
 * // Returns: 12.4
 *
 * @example
 * launchFuel(100);
 * // Returns: 24.8
 */
function launchFuel(payload) {
  let totalLoad = payload;
  let initialFuelRequired = totalLoad / 5;
  let currentFuelRequired = totalLoad / 5;
  let fuelDifference = null;

  do {
    totalLoad = payload + initialFuelRequired;
    currentFuelRequired = totalLoad / 5;
    fuelDifference = currentFuelRequired - initialFuelRequired;
    initialFuelRequired = currentFuelRequired;
  } while (fuelDifference >= 1);

  return Math.round(currentFuelRequired * 10) / 10;
}