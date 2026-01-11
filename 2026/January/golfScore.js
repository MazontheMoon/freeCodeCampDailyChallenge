/*
PSEUDOCODE:
- If strokes is exactly 1:
    - Return "Hole in one!"
- Calculate the difference between strokes and par
- If the difference is:
    - -2 → return "Eagle"
    - -1 → return "Birdie"
    -  0 → return "Par"
    -  1 → return "Bogey"
    -  2 → return "Double bogey"
*/


/**
 * Determines the golf score term based on par and strokes taken.
 *
 * @param {number} par - The par value of the hole
 * @param {number} strokes - The number of strokes taken
 * @returns {string} The golf score description
 */


function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole in one!";
  }

  const difference = strokes - par;

  if (difference === -2) {
    return "Eagle";
  }

  if (difference === -1) {
    return "Birdie";
  }

  if (difference === 0) {
    return "Par";
  }

  if (difference === 1) {
    return "Bogey";
  }

  if (difference === 2) {
    return "Double bogey";
  }
}
