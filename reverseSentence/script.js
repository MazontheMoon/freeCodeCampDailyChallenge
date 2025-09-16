/*
Challenge - Reverse Sentence
Given a string of words, return a new string with the words in reverse order. For example, the first word should be at the end of the returned string, and the last word should be at the beginning of the returned string.

- In the given string, words can be separated by one or more spaces.
- The returned string should only have one space between words.
*/

/**
 * Returns string with all words reversed.
 *
 * @param {string} sentence - a sentence of words
 * @return {string} string with all words reversed.
 */

function reverseSentence(sentence) {
  return sentence
    .trim()                // remove leading/trailing spaces
    .split(/\s+/)          // split on one or more spaces
    .reverse()             // reverse the array of words
    .join(" ");            // join with a single space
}