/*
PSEUDOCODE:
- Take a string as input
- Create an empty result string
- Loop through each character in the string:
    - If the character is a letter:
        - If it is a vowel (a, e, i, o, u):
            - Convert it to uppercase and add to result
        - Otherwise:
            - Convert it to lowercase and add to result
    - If the character is not a letter:
        - Add it to the result unchanged
- Return the result string
*/

/**
 * Converts all vowels in a string to uppercase and all other
 * alphabetical characters to lowercase.
 *
 * Vowels are: a, e, i, o, u (case-insensitive).
 * Non-alphabetical characters remain unchanged.
 *
 * @param {string} str - The input string
 * @returns {string} The transformed string
 */

function vowelCase(str) {
  let result = "";
  const vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const lowerChar = char.toLowerCase();

    // Check if the character is a letter
    if (lowerChar >= "a" && lowerChar <= "z") {
      // Check if the letter is a vowel
      if (vowels.includes(lowerChar)) {
        result += char.toUpperCase();
      } else {
        result += char.toLowerCase();
      }
    } else {
      // Non-alphabetical characters stay the same
      result += char;
    }
  }

  return result;
}
