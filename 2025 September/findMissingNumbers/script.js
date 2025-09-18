/*
Challenge - Missing Numbers
Given an array of integers from 1 to n, inclusive, return an array of all the missing integers between 1 and n (where n is the largest number in the given array).
*/

/**
 * Returns number array of all missing integers.
 *
 * @param {number[]} arr - an array of integers
 * @return {number[]} array of integers missing from provided array.
 */

function findMissingNumbers(arr) {
  if (!arr.length) return [];
  const n = Math.max(...arr);
  const set = new Set(arr);
  const missing = [];
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) missing.push(i);
  }
  return missing;
}