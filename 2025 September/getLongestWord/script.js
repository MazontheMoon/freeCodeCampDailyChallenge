/**
 * Finds and returns the longest word in a given sentence.
 *
 * The function ignores periods (`.`) when calculating word lengths.
 * If multiple words share the maximum length, the first occurrence is returned.
 *
 * @param {string} sentence - The input sentence to analyze.
 * @returns {string} The longest word in the sentence.
 *
 * @example
 * getLongestWord("The quick brown fox jumps over the lazy dog.");
 * // Returns: "jumps"
 *
 * @example
 * getLongestWord("Wait... what happened?");
 * // Returns: "happened"
 *
 * @example
 * getLongestWord("Hi there. Hello world.");
 * // Returns: "there"
 */
function getLongestWord(sentence) {
  if (typeof sentence !== 'string') {
    throw new TypeError('Input must be a string.');
  }

  // Remove periods and split by spaces
  const words = sentence.replace(/\./g, '').split(/\s+/);

  // Track the longest word found
  let longest = '';

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}
