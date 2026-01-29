*/
initialize empty result string

for each character in the string:
    if not the first character:
        check previous character
        if previous is a letter and current is a number
           OR previous is a number and current is a letter:
            add "-" to result

    add current character to result

return result
*/

/**
 * Inserts a hyphen between letters and numbers whenever the type changes.
 *
 * @param {string} str - A string containing only letters and numbers
 * @returns {string} A new string with hyphens separating letters and numbers
 */
function separateLettersAndNumbers(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const previous = str[i - 1];

    // If this is not the first character,
    // check whether the type (letter/number) changes
    if (i > 0) {
      const currentIsLetter = isNaN(current);
      const previousIsLetter = isNaN(previous);

      if (currentIsLetter !== previousIsLetter) {
        result += "-";
      }
    }

    result += current;
  }

  return result;
}

