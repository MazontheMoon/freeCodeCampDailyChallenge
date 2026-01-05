/*
PSEUDOCODE:
- Take an integer called year
- If the year is divisible by 400:
    - It is a leap year
- Otherwise, if the year is divisible by 100:
    - It is NOT a leap year
- Otherwise, if the year is divisible by 4:
    - It is a leap year
- Otherwise:
    - It is NOT a leap year
- Return true or false
*/

/**
 * Determines whether a given year is a leap year.
 *
 * A leap year:
 * - Is divisible by 4
 * - Is not divisible by 100, unless it is divisible by 400
 *
 * @param {number} year - The year to evaluate
 * @returns {boolean} True if the year is a leap year, otherwise false
 */

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }

  if (year % 100 === 0) {
    return false;
  }

  if (year % 4 === 0) {
    return true;
  }

  return false;
}
