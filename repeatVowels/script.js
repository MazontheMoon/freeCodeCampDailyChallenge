/*
Challenge - Vowel Repeater
Given a string, return a new version of the string where each vowel is duplicated one more time than the previous vowel you encountered. For instance, the first vowel in the sentence should remain unchanged. The second vowel should appear twice in a row. The third vowel should appear three times in a row, and so on.
- The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
- The original vowel should keeps its case.
- Repeated vowels should be lowercase.
- All non-vowel characters should keep their original case.
*/

/**
 * Returns a string where each vowel is duplicated one more time than the previous vowel you encountered.
 *
 * @param {string} str - a sentence
 * @return {string} returns a sentence with duplicated vowels.
 */

function repeatVowels(str) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let result = "";

  for (const char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
      // original vowel + (vowelCount - 1) repetitions in lowercase
      result += char + char.toLowerCase().repeat(vowelCount - 1);
    } else {
      result += char;
    }
  }

  return result;
}