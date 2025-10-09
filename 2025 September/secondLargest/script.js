/*
2nd Largest
Given an array, return the second largest distinct number.
*/

/**
 * Return the second largest distinct number in an array.
 *
 * @param {number[]} arr - The array of numbers to evaluate.
 * @returns {number|null} Returns the second largest distinct number,
 * or null if there are fewer than two distinct numbers.
 **/


function secondLargest(arr) {
  const unique = [...new Set(arr)]; // Remove duplicates
  if (unique.length < 2) return null; // Not enough distinct numbers

  unique.sort((a, b) => b - a); // Sort descending
  return unique[1];
}