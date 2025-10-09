/*
Perfect Square
Given an integer, determine if it is a perfect square.
A number is a perfect square if you can multiply an integer by itself to achieve the number. For example, 9 is a perfect square because you can multiply 3 by itself to get it.
*/

/**
 * Determine whether a given integer is a perfect square.
 *
 * @param {number} num - The integer to check.
 * @returns {boolean} Returns true if num is a perfect square, false otherwise.
 **/

function isPerfectSquare(num) {
  if (num < 0) return false; // Negative numbers can't be perfect squares
  const root = Math.sqrt(num);
  return Number.isInteger(root);
}