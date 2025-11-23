/**
 * Counts the occurrences of each alphabetic character in a sentence.
 *
 * Only letters A–Z are counted; all other characters (numbers, spaces,
 * punctuation, etc.) are ignored. Uppercase and lowercase are treated
 * the same, and all returned letters are lowercase.
 *
 * The returned array consists of strings formatted as:
 * "letter count"
 * Example: "a 3"
 *
 * @param {string} sentence - The input sentence to analyze.
 * @returns {string[]} - An array of "letter count" strings in alphabetical order.
 */

function countCharacters(sentence) {
  const counts = {};

  // Normalize to lowercase
  const lower = sentence.toLowerCase();

  // Count letters only
  for (const char of lower) {
    if (char >= 'a' && char <= 'z') {
      counts[char] = (counts[char] || 0) + 1;
    }
  }

  // Sort letters and build result strings
  return Object.keys(counts)
    .sort()
    .map(letter => `${letter} ${counts[letter]}`);
}
