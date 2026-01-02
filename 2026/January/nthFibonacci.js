/*
PSEUDOCODE:
- If n is 0, return 0
- If n is 1, return 1
- Start with:
    previous = 0
    current = 1
- Loop from 2 up to n:
    - next = previous + current
    - Move previous to current
    - Move current to next
- Return current
*/

/**
 * Returns the nth number in the Fibonacci sequence.
 *
 * The Fibonacci sequence starts with:
 * 0, 1, 1, 2, 3, 5, ...
 *
 * @param {number} n - A non-negative integer
 * @returns {number} The nth Fibonacci number
 */

function nthFibonacci(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  let previous = 0;
  let current = 1;

  for (let i = 3; i <= n; i++) {
    const next = previous + current;
    previous = current;
    current = next;
  }

  return current;
}
