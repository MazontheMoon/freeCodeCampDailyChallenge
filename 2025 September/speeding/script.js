/**
 * Analyze vehicle speeds against a given speed limit.
 *
 * @param {number[]} speeds - Array of observed vehicle speeds.
 * @param {number} limit - The legal speed limit.
 * @returns {[number, number]} An array where:
 *   - The first value is the count of vehicles exceeding the limit.
 *   - The second value is the average amount (in the same units) that those vehicles exceeded the limit.
 *   Returns [0, 0] if no vehicles were speeding.
 */

function speeding(speeds, limit) {
  const overLimit = speeds.filter(speed => speed > limit);
  
  if (overLimit.length === 0) return [0, 0];

  const totalOver = overLimit.reduce((sum, speed) => sum + (speed - limit), 0);
  const avgOver = totalOver / overLimit.length;

  return [overLimit.length, avgOver];
}