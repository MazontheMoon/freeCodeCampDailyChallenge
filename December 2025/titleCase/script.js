/*
PSEUDOCODE

FUNCTION titleCase(title)
    SPLIT the string into words using space as separator
    FOR each word
        CAPITALIZE the first character
        MAKE the rest of the characters lowercase
    JOIN the words back together with spaces
    RETURN the result
END FUNCTION
*/

/**
 * Converts a string into title case.
 *
 * Rules:
 * - Capitalize the first letter of each word
 * - Make all other letters in each word lowercase
 * - Words are separated by a single space
 *
 * @param {string} title - The input string
 * @returns {string} The title-cased string
 *
 * @example
 * titleCase("hello world");
 * // returns "Hello World"
 *
 * @example
 * titleCase("jAVaScrIPt is FUN");
 * // returns "Javascript Is Fun"
 */
function titleCase(title) {
  return title
    .split(" ")
    .map(word => {
      const firstLetter = word[0].toUpperCase();
      const restOfWord = word.slice(1).toLowerCase();
      return firstLetter + restOfWord;
    })
    .join(" ");
}
