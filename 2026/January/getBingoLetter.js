/**
 * Returns the Bingo letter associated with a given number.
 *
 * Bingo number ranges:
 * - B: 1–15
 * - I: 16–30
 * - N: 31–45
 * - G: 46–60
 * - O: 61–75
 *
 * If the number does not fall within any Bingo range,
 * return the number as a string.
 *
 * @param {number} num - The bingo number
 * @returns {string} The corresponding Bingo letter or the number as a string
 */
function getBingoLetter(num) {
  if (num >= 1 && num <= 15) {
    return "B";
  } else if (num >= 16 && num <= 30) {
    return "I";
  } else if (num >= 31 && num <= 45) {
    return "N";
  } else if (num >= 46 && num <= 60) {
    return "G";
  } else if (num >= 61 && num <= 75) {
    return "O";
  } else {
    return String(num);
  }
}
