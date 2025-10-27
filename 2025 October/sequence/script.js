/**
 * Returns a string containing all integers from 1 up to and including `n`.
 *
 * @param {number} n - A positive integer indicating the end of the sequence.
 * @returns {string} A string of numbers from 1 to `n` concatenated together.
 *
 * @example
 * sequence(5); // "12345"
 * sequence(3); // "123"
 */
function sequence(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}
