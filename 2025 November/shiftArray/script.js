/**
 * Shifts the elements of an array by a given number of positions.
 * A positive `n` shifts the array to the left.
 * A negative `n` shifts the array to the right.
 * The shift wraps around the array.
 *
 * @param {Array} arr - The array to shift.
 * @param {number} n - The number of positions to shift.
 * @returns {Array} A new array that has been shifted.
 *
 * @example
 * // returns [2, 3, 1]
 * shiftArray([1, 2, 3], 1);
 *
 * @example
 * // returns [3, 1, 2]
 * shiftArray([1, 2, 3], -1);
 */
function shiftArray(arr, n) {
  if (!Array.isArray(arr) || arr.length === 0 || n === 0) {
    return arr;
  }

  const len = arr.length;
  let shift = n % len;

  if (shift < 0) {
    shift = len + shift;
  }

  return arr.slice(shift).concat(arr.slice(0, shift));
}
