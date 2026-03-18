/*
PSEUDOCODE

function largestNumber(input):

    extract all numbers from the string (including negatives and decimals)

    convert extracted values to numbers

    set max to first number

    for each number:
        if number > max:
            update max

    return max
*/

/**
 * Finds the largest number in a string containing numbers separated by punctuation.
 *
 * The string may contain integers, negative numbers, and decimals. Separators
 * include commas, exclamation marks, question marks, colons, and semicolons.
 *
 * @param {string} input - The input string containing numbers.
 * @returns {number} The largest number found.
 */
function largestNumber(input) {
  const numbers = input.match(/-?\d+(\.\d+)?/g).map(Number);

  let max = numbers[0];

  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}