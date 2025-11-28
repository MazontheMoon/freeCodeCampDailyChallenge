* 
PSEUDOCODE
-----------
1. Initialize result array filled with "0".
2. Create an array `used` to track which letters in `word` have been matched.
3. FIRST PASS (exact matches):
   For each index i:
     If guess[i] == word[i]:
        result[i] = "2"
        mark word[i] as used
4. SECOND PASS (partial matches):
   For each index i:
     If result[i] is already "2", continue
     Otherwise look for an index j in `word` where:
         - word[j] == guess[i]
         - j is not already used
         - j ≠ i (position doesn't matter here, but exact matches are already taken)
     If such j is found:
         result[i] = "1"
         mark word[j] as used
5. Join the result array into a string and return it.
*/


/**
 * Compares a guessed word against a secret word and returns a string
 * representing match accuracy per letter:
 * - "2" → correct letter in the correct position
 * - "1" → correct letter in the wrong position
 * - "0" → letter not present (or no remaining instances available)
 *
 * Exact matches are resolved first; partial matches follow left-to-right.
 *
 * @param {string} word - The secret word (A–Z, same length as guess).
 * @param {string} guess - The guessed word (A–Z, same length as word).
 * @returns {string} A string of digits ("0", "1", "2") representing the match pattern.
 */
function compare(word, guess) {
  const n = word.length;
  const result = Array(n).fill("0");
  const used = Array(n).fill(false);

  // First pass: exact matches
  for (let i = 0; i < n; i++) {
    if (guess[i] === word[i]) {
      result[i] = "2";
      used[i] = true;
    }
  }

  // Second pass: partial matches
  for (let i = 0; i < n; i++) {
    if (result[i] === "2") continue;

    for (let j = 0; j < n; j++) {
      if (!used[j] && word[j] === guess[i]) {
        result[i] = "1";
        used[j] = true;
        break;
      }
    }
  }

  return result.join("");
}
