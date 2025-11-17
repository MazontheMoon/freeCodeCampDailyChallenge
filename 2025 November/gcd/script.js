/**
 * Returns the greatest common divisor (GCD) of two positive integers.
 *
 * The GCD is the largest integer that divides both numbers without leaving a remainder.
 * Uses the Euclidean algorithm for efficient computation.
 *
 * @param {number} x - The first positive integer.
 * @param {number} y - The second positive integer.
 * @returns {number} The greatest common divisor of x and y.
 */
function gcd(x, y) {
  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}
