// PSEUDOCODE:
// 1. Create a variable to store the total sum of divisors
// 2. Loop from 1 up to the given number (inclusive)
// 3. For each number in the loop:
//    - Check if it divides the given number evenly
//    - If it does, add it to the total sum
// 4. Return the total sum


/**
 * Calculates the sum of all divisors of a positive integer.
 *
 * @param {number} n - A positive integer
 * @returns {number} The sum of all divisors of n
 */

function sumDivisors(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum;
}
