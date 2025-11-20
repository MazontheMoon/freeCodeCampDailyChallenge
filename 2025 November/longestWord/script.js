/**
 * Returns the longest word in a sentence. Only letters count toward length.
 * Words are separated by single spaces. Punctuation is removed from the result.
 * If multiple words share the maximum length, the first occurrence is returned.
 *
 * @param {string} sentence - The sentence to search through.
 * @returns {string} The longest cleaned word.
 */
function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";
  let longestLen = 0;

  for (const word of words) {
    // Remove punctuation and non-letter characters
    const cleaned = word.replace(/[^a-zA-Z]/g, "");

    if (cleaned.length > longestLen) {
      longest = cleaned;
      longestLen = cleaned.length;
    }
  }

  return longest;
}
