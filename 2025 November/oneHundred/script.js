/**
 * Repeat the characters in the input string until the result is
 * exactly 100 characters long. If repeating goes past 100, trim it.
 *
 * @param {string} chars - The string whose characters will repeat.
 * @returns {string} A string exactly 100 characters long.
 */
function oneHundred(chars) {
  if (!chars) return ""; // handle empty strings safely

  let result = "";

  while (result.length < 100) {
    result += chars;
  }

  return result.slice(0, 100);
}
