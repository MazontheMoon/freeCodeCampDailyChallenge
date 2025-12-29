// PSEUDOCODE:
// 1. Replace underscores (_) and hyphens (-) with spaces
// 2. Insert a space before any uppercase letter that starts a new word
// 3. Split the resulting string into words
// 4. Convert all words to uppercase
// 5. Join the words using underscores (_)
// 6. Return the final string

/**
 * Converts a variable name from camelCase, PascalCase, snake_case,
 * or kebab-case into SCREAMING_SNAKE_CASE.
 *
 * @param {string} variableName - The variable name to convert
 * @returns {string} The variable name in SCREAMING_SNAKE_CASE
 */

function toScreamingSnakeCase(variableName) {
  // Replace underscores and hyphens with spaces
  let result = variableName.replace(/[_-]/g, " ");

  // Add a space before uppercase letters (for camelCase and PascalCase)
  result = result.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Split into words, convert to uppercase, and join with underscores
  return result
    .split(" ")
    .map(word => word.toUpperCase())
    .join("_");
}
