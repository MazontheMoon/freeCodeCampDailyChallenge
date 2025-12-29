// PSEUDOCODE:
// 1. Create a variable to store the total sum of indices
// 2. Loop through the array using the first index (i)
// 3. For each element, loop through the rest of the array using a second index (j)
//    - Start j at i + 1 to avoid using the same element twice
// 4. Check if arr[i] + arr[j] equals the target
// 5. If it does, add i and j to the total sum
// 6. Return the total sum of indices

/**
 * Finds all pairs of numbers in an array that add up to a target value
 * and returns the sum of their indices.
 *
 * @param {number[]} arr - An array of integers
 * @param {number} target - The target sum to find
 * @returns {number} The total sum of indices of all valid pairs
 */

function pairwise(arr, target) {
  let indexSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        indexSum += i + j;
      }
    }
  }

  return indexSum;
}
