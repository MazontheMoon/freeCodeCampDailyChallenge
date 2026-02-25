/*
1. Create an empty result array.
2. Loop through the array from index 0 to length - 1:
     - If not last element:
           difference = arr[i + 1] - arr[i]
           push difference
     - If last element:
           push 0
3. Return result array.
*/

/**
 * Returns an array of differences between each number
 * and the next number in the array.
 *
 * The last element is always 0 since there is no next number.
 *
 * @param {number[]} arr - An array of numbers.
 * @returns {number[]} A new array of differences.
 */
 
 function findDifferences(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      result.push(0);
    } else {
      result.push(arr[i + 1] - arr[i]);
    }
  }

  return result;
}