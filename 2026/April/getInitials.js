/*
PSEUDOCODE:
- Take input string (full name)
- Split string by spaces into array of words
- Initialize empty result string
- Loop through each word:
  - Take first character
  - Convert to uppercase
  - Add to result with a dot
- Return result
*/

/**
 * Converts a full name into initials.
 * @param {string} fullName - The full name (e.g. "Tommy Millwood").
 * @returns {string} The initials in uppercase separated by dots (e.g. "T.M.").
 */
function getInitials(fullName) {
  return fullName
    .split(" ")
    .map(name => name[0].toUpperCase())
    .join(".") + ".";
}
