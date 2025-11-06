/**
 * Converts a given string to "spooky case".
 * 
 * Rules:
 * - Replace all underscores (_) and hyphens (-) with a tilde (~).
 * - Capitalize the first letter, and every other letter after that.
 * - Ignore the tilde (~) character when counting which letters to capitalize.
 * - All other letters should be lowercase.
 *
 * @param {string} boo - The input string to spookify.
 * @returns {string} The string transformed into spooky case.
 *
 * @example
 * spookify("hello_world"); // returns "HeLlO~wOrLd"
 * spookify("trick-or_treat"); // returns "TrIcK~oR~tReAt"
 */
function spookify(boo) {
  // Step 1: Replace underscores and hyphens with tildes
  const spookyBase = boo.replace(/[_-]/g, '~');

  let result = '';
  let capitalize = true; // Start with uppercase

  for (const char of spookyBase) {
    if (char === '~') {
      result += '~'; // Keep tilde as-is
      continue;       // Don't toggle capitalization
    }

    result += capitalize ? char.toUpperCase() : char.toLowerCase();
    capitalize = !capitalize; // Toggle for next letter
  }

  return result;
}
