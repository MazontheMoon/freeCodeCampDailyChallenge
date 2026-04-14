/*
PSEUDOCODE:
- Initialize variable to store best letter (null initially)

- Loop through each character in string:
  - If character is a letter:
    - Convert to lowercase for comparison
    - If best letter is null OR current letter is greater alphabetically:
      - Update best letter (store original character)

- Return best letter
*/

/**
 * Returns the letter in a string that appears last in the alphabet.
 * Non-letter characters are ignored. If multiple letters tie,
 * the first occurrence is returned.
 *
 * @param {string} str - The input string.
 * @returns {string|null} The letter that is last alphabetically, or null if none found.
 */
function getLastLetter(str) {
  let bestChar = null;
  let bestLower = null;

  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      const lower = char.toLowerCase();

      if (bestLower === null || lower > bestLower) {
        bestLower = lower;
        bestChar = char;
      }
    }
  }

  return bestChar;
}
