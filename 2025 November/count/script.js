/**
 * Counts the number of vowels and consonants in a given string.
 * Vowels are a, e, i, o, u (case-insensitive).
 * Consonants are all other English letters (case-insensitive).
 * Non-letter characters are ignored.
 *
 * @param {string} str - The input string to analyze.
 * @returns {[number, number]} An array containing [vowelCount, consonantCount].
 *
 * @example
 * count("Hello World"); // returns [3, 7]
 */


function count(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  let consonantCount = 0;

  for (const char of str.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }

  return [vowelCount, consonantCount];
}
