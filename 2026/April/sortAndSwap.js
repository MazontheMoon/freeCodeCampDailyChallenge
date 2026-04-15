/*
PSEUDOCODE:
- Sort the array in ascending order
- Loop through array starting from index 1 to end:
  - If index is a multiple of 3:
    - Swap element at current index with previous index
- Return modified array
*/

/**
 * Sorts an array in ascending order, then swaps elements at indices
 * that are multiples of 3 with their previous element.
 *
 * @param {number[]} arr - The input array of integers.
 * @returns {number[]} A new array with the described transformation.
 */
function sortAndSwap(arr) {
  const result = [...arr].sort((a, b) => a - b);

  for (let i = 1; i < result.length; i++) {
    if (i % 3 === 0) {
      [result[i], result[i - 1]] = [result[i - 1], result[i]];
    }
  }

  return result;
}
