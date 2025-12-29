// PSEUDOCODE:
// 1. Split the input string into an array of lines using the newline character
// 2. Create an empty array to store the mirrored lines
// 3. Loop through each line:
//    - Reverse the characters of the line (including spaces)
//    - Append the reversed line to the end of the original line
//    - Store the combined result
// 4. Join all processed lines back together using newline characters
// 5. Return the final string

/**
 * Mirrors each line of a multi-line string horizontally and appends
 * the mirrored version to the end of the original line.
 * Whitespace and line order are preserved exactly.
 *
 * @param {string} crystals - A multi-line string separated by '\n'
 * @returns {string} A new string with each line mirrored
 */

function generateSnowflake(crystals) {
  const lines = crystals.split("\n");
  const result = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Reverse the line character by character
    const reversedLine = line.split("").reverse().join("");

    // Append mirrored line to original line
    result.push(line + reversedLine);
  }

  // Join lines back together with newline characters
  return result.join("\n");
}
