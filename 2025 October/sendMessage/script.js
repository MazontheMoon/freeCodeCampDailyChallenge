/**
 * Calculates how long (in seconds) it takes for a message to travel 
 * through a communication route consisting of satellites and the home planet.
 *
 * Rules:
 * - Each number in `route` represents a distance segment in kilometers.
 * - The first value = distance from you to the first satellite.
 * - The last value = distance from the last satellite to your home planet.
 * - The message travels at the speed of light: 300,000 km/s.
 * - Each satellite adds a 0.5-second delay.
 * 
 * The total time = (sum of all distances / 300,000) + (number of satellites × 0.5)
 * where the number of satellites is `route.length - 1`.
 *
 * The result is rounded to 4 decimal places, with trailing zeros removed.
 *
 * @param {number[]} route - An array of distances in kilometers between each point in the route.
 * @returns {number} The total travel time in seconds (rounded to 4 decimal places, no trailing zeros).
 *
 * @throws {TypeError} If the input is not a valid non-empty array of numbers.
 * @throws {RangeError} If any distance is negative.
 *
 * @example
 * sendMessage([100000, 200000, 150000]);
 * // Distances sum = 450000 km → 450000 / 300000 = 1.5 s travel
 * // Satellites = 2 → delay = 1.0 s
 * // Total = 2.5 → returns 2.5
 *
 * @example
 * sendMessage([300000]);
 * // One direct link, no satellites → 300000 / 300000 = 1 → returns 1
 *
 * @example
 * sendMessage([100000, 100000, 100000, 100000]);
 * // Sum = 400000 / 300000 = 1.3333 + delay (3 × 0.5 = 1.5) → 2.8333 → returns 2.8333
 */
function sendMessage(route) {
  if (!Array.isArray(route) || route.length === 0 || !route.every(n => typeof n === 'number')) {
    throw new TypeError('Input must be a non-empty array of numbers.');
  }

  if (route.some(n => n < 0)) {
    throw new RangeError('Distances cannot be negative.');
  }

  const SPEED_OF_LIGHT = 300000; // km/s
  const SATELLITE_DELAY = 0.5;   // seconds per satellite

  const totalDistance = route.reduce((sum, d) => sum + d, 0);
  const travelTime = totalDistance / SPEED_OF_LIGHT;

  // Number of satellites = all nodes except the start and end points
  const satelliteCount = route.length - 1;
  const totalTime = travelTime + (satelliteCount * SATELLITE_DELAY);

  // Round to 4 decimal places, remove trailing zeros
  return parseFloat(totalTime.toFixed(4));
}