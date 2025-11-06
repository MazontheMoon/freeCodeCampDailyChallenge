/**
 * Calculates the number of infected computers after a given number of days.
 *
 * Rules:
 * - Day 0 starts with 1 infected computer.
 * - Each day, the number of infected computers doubles.
 * - Every 3rd day (i.e., day 3, 6, 9, ...), after doubling,
 *   a patch is applied that removes 20% of infected computers,
 *   rounding the number of patched computers up to the nearest whole number.
 *
 * @param {number} days - The number of days that have passed since the infection started.
 * @returns {number} The total number of infected computers after the given days.
 *
 * @example
 * infected(0); // returns 1
 * infected(3); // returns 6
 * infected(6); // returns 23
 */
function infected(days) {
  let infected = 1;

  for (let day = 1; day <= days; day++) {
    infected *= 2;

    if (day % 3 === 0) {
      const patched = Math.ceil(infected * 0.2);
      infected -= patched;
    }
  }

  return infected;
}
