/**
 * Returns the nth prime number.
 *
 * A prime number is a positive integer greater than 1 that is divisible only by 1 and itself.
 * For example, the first five prime numbers are 2, 3, 5, 7, and 11.
 *
 * @param {number} n - The position of the prime number to find (must be a positive integer).
 * @returns {number} The nth prime number.
 * @throws {Error} If n is not a positive integer.
 *
 * @example
 * nthPrime(1); // 2
 * nthPrime(5); // 11
 */


function nthPrime(n) {
  if (!Number.isInteger(n) || n < 1) {
    throw new Error("Input must be a positive integer.");
  }

  let count = 0;
  let num = 1;

  // Helper function to check primality
  function isPrime(x) {
    if (x < 2) return false;
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) return false;
    }
    return true;
  }

  while (count < n) {
    num++;
    if (isPrime(num)) {
      count++;
    }
  }

  return num;
}
