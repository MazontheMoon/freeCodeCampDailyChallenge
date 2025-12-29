// PSEUDOCODE:
// 1. Create an object to count how many times each value appears
// 2. Loop through the array and update the count for each value
// 3. Find the highest frequency value from the counts
// 4. Identify all values that have this highest frequency
// 5. Create a new array that excludes any values with the highest frequency
// 6. Return the new array

/**
 * Removes all occurrences of the most frequently occurring value(s) in an array.
 * If multiple values are tied for most frequent, all of them are removed.
 * The order of remaining elements is preserved.
 *
 * @param {Array} arr - An array of values
 * @returns {Array} A new array with the most frequent value(s) removed
 */

function purgeMostFrequent(arr) {
  const counts = {};
  let maxCount = 0;

  // Count occurrences of each value
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    counts[value] = (counts[value] || 0) + 1;

    if (counts[value] > maxCount) {
      maxCount = counts[value];
    }
  }

  // Find all values that occur maxCount times
  const mostFrequent = [];

  for (let key in counts) {
    if (counts[key] === maxCount) {
      mostFrequent.push(key);
    }
  }

  // Build a new array without the most frequent value(s)
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!mostFrequent.includes(String(arr[i]))) {
      result.push(arr[i]);
    }
  }

  return result;
}


