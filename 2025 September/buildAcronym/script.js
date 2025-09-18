/*
Challenge - Acronym Builder
Given a string containing one or more words, return an acronym of the words using the following constraints:
- The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
- The acronym should ignore the first letter of these words unless they are the first word of the given string: a, for, an, and, by, and of.
- The acronym letters should be returned in the order they are given.
- The acronym should not contain any spaces.
*/

/**
 * Returns an acronym of a given string.
 *
 * @param {string} str - a string of words.
 * @return {string} an acronym of a given string
 */

function buildAcronym(str) {
  const ignoreWords = new Set(["a", "an", "and", "for", "by", "of"]);

  return str
    .trim()
    .split(/\s+/) // split by one or more spaces
    .filter((word, idx) => idx === 0 || !ignoreWords.has(word.toLowerCase()))
    .map(word => word[0].toUpperCase())
    .join("");
}