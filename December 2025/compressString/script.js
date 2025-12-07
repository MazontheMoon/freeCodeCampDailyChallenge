/*
PSEUDOCODE:
1. Split the input sentence into an array of words.
2. Initialize an empty result array.
3. Track the current word and its repetition count.
4. Loop through each word in the array:
      - If the word matches the current word, increment the count.
      - Otherwise:
            • Push the previously tracked word into the result array:
                  - If the count > 1, append "(count)".
                  - Otherwise, push the word as-is.
            • Reset the tracker to the new word with count = 1.
5. After the loop, push the final tracked word (with or without count).
6. Join the result array with spaces and return it.
*/

/**
 * Compresses a sentence by replacing consecutive duplicate words
 * with a single instance followed by the repetition count in parentheses.
 *
 * Only consecutively repeated words are compressed. Words are assumed
 * to be separated by single spaces.
 *
 * @param {string} sentence - The sentence to be compressed.
 * @returns {string} A new sentence where consecutive duplicate words
 *                   are compressed into the format word(count).
 *
 * @example
 * // returns "yes(3) please"
 * compressString("yes yes yes please");
 */

function compressString(sentence) {
  const words = sentence.split(" ");
  const result = [];

  let current = words[0];
  let count = 1;

  for (let i = 1; i < words.length; i++) {
    if (words[i] === current) {
      count++;
    } else {
      // Push completed entry
      result.push(count > 1 ? `${current}(${count})` : current);
      current = words[i];
      count = 1;
    }
  }

  // Push final tracked word
  result.push(count > 1 ? `${current}(${count})` : current);

  return result.join(" ");
}
