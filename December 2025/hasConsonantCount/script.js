/*
PSEUDOCODE:
1. Create a counter to keep track of consonants
2. Loop through each character in the string
3. Convert the character to lowercase
4. Check if the character is a letter (a–z)
5. If it is a letter and NOT a vowel (a, e, i, o, u)
      - Increase the consonant counter
6. After checking all characters
      - Compare the counter to the target number
7. Return true if they are equal, otherwise return false
*/

/**
 * Checks whether a string contains exactly a target number of consonants.
 *
 * Consonants are alphabetic characters excluding vowels
 * (a, e, i, o, u), regardless of case.
 * Non-letter characters are ignored.
 *
 * @param {string} text - The string to analyze
 * @param {number} target - The number of consonants to check for
 * @returns {boolean} True if the string contains exactly the target number of consonants, otherwise false
 */

function hasConsonantCount(text, target) {
  let count = 0;
  const vowels = "aeiou";

  for (let char of text.toLowerCase()) {
    // Check if character is a letter
    if (char >= "a" && char <= "z") {
      // Check if character is NOT a vowel
      if (!vowels.includes(char)) {
        count++;
      }
    }
  }

  return count === target;
}