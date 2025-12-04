/*
PSEUDOCODE
1. Receive the input string `str`.
2. Count how many times each character appears.
3. Compute n = total length of the string.
4. Compute n! (factorial).
5. For each character's count k, compute k!.
6. Divide n! by the product of all k! values.
7. Return the result.
*/

/**
 * Count the number of **distinct** permutations of the characters in a string.
 *
 * A permutation is any reordering of characters, but repeated characters
 * reduce the total count because duplicate arrangements should be counted once.
 *
 * Formula:
 *   total = n! / (freq(c1)! * freq(c2)! * ...)
 *
 * @param {string} str - A string of letters (A–Z, a–z).
 * @returns {number} The number of unique permutations.
 */
function countPermutations(str) {
  // Factorial helper (iterative to avoid recursion limits)
  function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  const n = str.length;
  if (n === 0) return 1; // By convention: the empty string has 1 permutation

  // Count frequency of each character
  const freq = {};
  for (const ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // Numerator: n!
  let numerator = factorial(n);

  // Denominator: product of each frequency factorial
  let denominator = 1;
  for (const char in freq) {
    denominator *= factorial(freq[char]);
  }

  return numerator / denominator;
}
