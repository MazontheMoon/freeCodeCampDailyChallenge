

/*
PSEUDOCODE

function hasNoRepeats(string):

    for i from 1 to string length - 1:
        if current character equals previous character:
            return false

    return true
*/

/**
 * Checks if a string has no consecutive repeating characters.
 *
 * A string is valid if no character appears twice in a row.
 *
 * @param {string} str - The input string.
 * @returns {boolean} True if no consecutive repeats exist, otherwise false.
 */
function hasNoRepeats(str) {
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }
  return true;
}