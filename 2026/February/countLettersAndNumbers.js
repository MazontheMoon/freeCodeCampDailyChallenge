/*
1. Initialize letterCount = 0
2. Initialize numberCount = 0

3. Loop through each character in the string:
     - If character is a letter (A-Z or a-z):
           increment letterCount
     - Else if character is a number (0-9):
           increment numberCount

4. Determine correct word forms:
     - If letterCount == 1 → "letter" else "letters"
     - If numberCount == 1 → "number" else "numbers"

5. Return formatted string:
   "The string has X letters and Y numbers."
*/

/**
 * Counts how many letters (A-Z, a-z) and numbers (0-9)
 * are present in a string.
 *
 * All other characters are ignored.
 *
 * Returns a formatted sentence describing the counts.
 * Uses singular grammar when count is 1.
 *
 * @param {string} str - The input string to analyze.
 * @returns {string} A formatted message describing the counts.
 */
 
 function countLettersAndNumbers(str) {
  let letterCount = 0;
  let numberCount = 0;

  for (const char of str) {
    if (/[a-zA-Z]/.test(char)) {
      letterCount++;
    } else if (/[0-9]/.test(char)) {
      numberCount++;
    }
  }

  const letterWord = letterCount === 1 ? "letter" : "letters";
  const numberWord = numberCount === 1 ? "number" : "numbers";

  return `The string has ${letterCount} ${letterWord} and ${numberCount} ${numberWord}.`;
}