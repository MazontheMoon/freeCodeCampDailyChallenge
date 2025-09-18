/*
Challenge - Array Diff
Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

- The returned array should be sorted in alphabetical order.
*/

/**
 * Returns array of unique values from the provided arrays.
 *
 * @param {string[]} arr1 - an array of strings.
 * @param {string[]} arr2 - an array of strings.
 * @return {string[]} string array with unique values from arr1 and arr2.
 */

function arrayDiff(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const unique = [
    ...[...set1].filter(x => !set2.has(x)), // in arr1 but not arr2
    ...[...set2].filter(x => !set1.has(x))  // in arr2 but not arr1
  ];

  return unique.sort(); // alphabetical sort
}