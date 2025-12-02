// PSEUDOCODE:
// - Create an empty result string.
// - Iterate through each character in the input:
//     - If the character is uppercase:
//         - Append an underscore to the result.
//         - Append the lowercase version of the character.
//     - Otherwise, append the character as-is.
// - Return the final result.

/**
 * Convert a camelCase string to snake_case.
 *
 * Rules:
 * - Input contains only letters and begins with lowercase.
 * - Uppercase letters mark the start of new words.
 * - All letters become lowercase.
 * - Words are separated by underscores.
 *
 * @param {string} camel - The camelCase string to convert.
 * @returns {string} The snake_case version of the input.
 */
function toSnake(camel) {
  let result = "";

  for (let i = 0; i < camel.length; i++) {
    const ch = camel[i];

    if (ch >= "A" && ch <= "Z") {
      result += "_" + ch.toLowerCase();
    } else {
      result += ch;
    }
  }

  return result;
}
