/**
 * Returns the least common multiple (LCM) of two integers.
 * The LCM is the smallest positive integer that is a multiple of both numbers.
 *
 * @param {number} a - The first integer.
 * @param {number} b - The second integer.
 * @returns {number} The least common multiple of a and b. Returns 0 if either number is 0.
 */
function lcm(a, b) {
  // Helper function: compute greatest common divisor (Euclid's algorithm)
  function gcd(x, y) {
    while (y !== 0) {
      const temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  }

  if (a === 0 || b === 0) return 0;

  return Math.abs(a * b) / gcd(a, b);
}
