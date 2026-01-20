/*
FUNCTION toConsonantCase(inputString)

  CREATE empty string result

  FOR each character in inputString
    IF character is a vowel (a, e, i, o, u, any case)
      ADD lowercase of character to result
    ELSE IF character is a hyphen (-)
      ADD underscore (_) to result
    ELSE
      ADD uppercase of character to result
    END IF
  END FOR

  RETURN result
*/
END FUNCTION

/**
 * Converts a string to consonant case.
 *
 * - Consonants are converted to uppercase
 * - Vowels (a, e, i, o, u) are converted to lowercase
 * - Hyphens (-) are converted to underscores (_)
 *
 * @param {string} inputString - The original variable name
 * @returns {string} The converted consonant-case string
 */

function toConsonantCase(inputString) {
  const vowels = "aeiouAEIOU";
  let result = "";

  for (let char of inputString) {
    if (vowels.includes(char)) {
      result += char.toLowerCase();
    } else if (char === "-") {
      result += "_";
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}
