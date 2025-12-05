/**
 * Return a new array containing the symmetric difference between two arrays.
 *
 * The symmetric difference is the set of values that appear in either array
 * but not in both. Values should be returned in the order they first appear
 * in the input arrays.
 *
 * @param {Array} arr1 - The first input array.
 * @param {Array} arr2 - The second input array.
 * @returns {Array} A new array containing the symmetric difference.
 */
function difference(arr1, arr2) {
  // Create an empty array to store the result
  const result = [];

  // Loop through arr1
  // If a value is NOT in arr2, add it to result
  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];
    if (!arr2.includes(value)) {
      result.push(value);
    }
  }

  // Loop through arr2
  // If a value is NOT in arr1, add it to result
  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i];
    if (!arr1.includes(value)) {
      result.push(value);
    }
  }

  // Return the result array containing the symmetric difference
  return result;
}
