/**
 * Counts how many times a pattern string appears in a text string.
 * Overlapping occurrences are included.
 *
 * For example:
 *   count("aaa", "aa") → 2
 *   count("abababa", "aba") → 3
 *
 * @param {string} text - The string to search within.
 * @param {string} pattern - The substring to count occurrences of.
 * @returns {number} The number of times the pattern appears in the text (including overlaps).
 */
function count(text, pattern) {
  if (!pattern.length) return 0;
  
  let count = 0;
  for (let i = 0; i <= text.length - pattern.length; i++) {
    if (text.slice(i, i + pattern.length) === pattern) {
      count++;
    }
  }
  return count;
}