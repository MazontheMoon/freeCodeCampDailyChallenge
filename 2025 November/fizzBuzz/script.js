/**
 * Generates an array of values from 1 to n, replacing:
 * - Multiples of 3 with "Fizz"
 * - Multiples of 5 with "Buzz"
 * - Multiples of both 3 and 5 with "FizzBuzz"
 *
 * @param {number} n - The upper bound of the sequence (inclusive).
 * @returns {(number|string)[]} An array containing numbers and Fizz/Buzz substitutions.
 */

function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}
