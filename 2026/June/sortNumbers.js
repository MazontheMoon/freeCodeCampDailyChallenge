/*
PSEUDOCODE:
1. Split string by commas into array
2. Convert each item to number
3. Sort numerically ascending
4. Return result
*/

/**
 * Converts a comma-separated string into a sorted number array.
 *
 * @param {string} input
 * @returns {number[]}
 */
function sortNumbers(input) {
  return input
    .split(',')
    .map(Number)
    .sort((a, b) => a - b);
}