/*
Challenge - Word Frequency

Given a paragraph, return an array of the three most frequently occurring words.

Words in the paragraph will be separated by spaces.
- Ignore case in the given paragraph. For example, treat Hello and hello as the same word.
- Ignore punctuation in the given paragraph. Punctuation consists of commas (,), periods (.), and exclamation points (!).
- The returned array should have all lowercase words.
- The returned array should be in descending order with the most frequently occurring word first.
*/

/**
 * Returns string[] of most commonly occuring words.
 *
 * @param {string} paragraph - a paragraph of words and punctuation
 * @return {string[]} array of string values.
 */

function getWords(paragraph) {
  // Remove punctuation and convert to lowercase
  const clean = paragraph.replace(/[,.!]/g, '').toLowerCase();
  const words = clean.split(/\s+/);

  // Count frequency
  const freq = {};
  for (const word of words) {
    if (word) freq[word] = (freq[word] || 0) + 1;
  }

  // Sort by frequency and then alphabetically
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 3)
    .map(([word]) => word);
}