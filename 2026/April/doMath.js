/*
PSEUDOCODE:
- Initialize result = null
- Initialize previous number = null
- Initialize gap counter = 0

- Loop through string:
  - If digit:
    - Build full number
    - If previous number is null:
      - Set result = number
    - Else:
      - If gap is even → add
      - If gap is odd → subtract
    - Reset gap counter
    - Set previous number
  - Else:
    - If we've already seen a number:
      - Increment gap counter

- Return result (or 0 if none)
*/

/**
 * Evaluates a string of numbers using gap-based math rules.
 * Even gap → addition, Odd gap → subtraction.
 *
 * @param {string} str
 * @returns {number}
 */
function doMath(str) {
  let result = null;
  let prevNumSeen = false;
  let gap = 0;

  let i = 0;

  while (i < str.length) {
    if (/\d/.test(str[i])) {
      // Build full number
      let numStr = "";
      while (i < str.length && /\d/.test(str[i])) {
        numStr += str[i];
        i++;
      }

      const num = Number(numStr);

      if (!prevNumSeen) {
        result = num;
        prevNumSeen = true;
      } else {
        if (gap % 2 === 0) {
          result += num;
        } else {
          result -= num;
        }
      }

      gap = 0; // reset after using
    } else {
      if (prevNumSeen) {
        gap++;
      }
      i++;
    }
  }

  return result ?? 0;
}
