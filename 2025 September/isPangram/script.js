/*
Challenge - Pangram
Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.
- Ignore non-alphabetical characters in the word or sentence.
- Ignore letter casing in the word or sentence.
*/

/**
 * Returns a boolean if a sentence is a pangram with the given letters.
 *
 * @param {string} sentence - a sentence.
 * @param {string} letters - a selection of letters.
 * @return {boolean} true if a pangram else false.
 */

function isPangram(sentence, letters) {
  // Normalize sentence: lowercase and remove non-alphabetical characters
  const normalized = sentence.toLowerCase().replace(/[^a-z]/g, "");
  
  // Create sets of letters in sentence and given letters
  const sentenceSet = new Set(normalized);
  const lettersSet = new Set(letters);

  // Check if sentence contains all letters from lettersSet
  for (const letter of lettersSet) {
    if (!sentenceSet.has(letter)) return false;
  }

  // Check if sentence contains no extra letters
  for (const letter of sentenceSet) {
    if (!lettersSet.has(letter)) return false;
  }

  return true;
}