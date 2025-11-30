/*
PSEUDOCODE:
1. Count dashes ('-') in the text.
2. Count occurrences of '(' and ')' pairs. A pair is any '(' followed later by ')'.
3. Extract words: split on spaces, keep only alphabetic sequences (A–Z).
4. Count how many words have length >= 7.
5. If any of the following are true, return "AI":
      - dashCount >= 2
      - parenthesisPairCount >= 2
      - longWordCount >= 3
   Otherwise return "Human".
*/

/**
 * Determine whether text is likely AI-generated using heuristic rules:
 *  - Contains at least two dashes.
 *  - Contains at least two parenthetical groups (text between '(' and ')').
 *  - Contains at least three words with 7+ letters.
 *
 * Words consist only of A–Z and are separated by a single space.
 *
 * @param {string} text - One or more sentences to analyze.
 * @returns {"AI"|"Human"} Classification result.
 */
function detectAI(text) {
  // Count dashes
  const dashCount = (text.match(/-/g) || []).length;

  // Count parenthesis pairs
  let parenthesisPairCount = 0;
  let i = 0;
  while (i < text.length) {
    if (text[i] === '(') {
      const closeIndex = text.indexOf(')', i + 1);
      if (closeIndex !== -1) {
        parenthesisPairCount++;
        i = closeIndex + 1;
        continue;
      }
    }
    i++;
  }

  // Extract alphabetic words only
  const rawWords = text.split(' ');
  const words = rawWords
    .map(w => w.replace(/[^A-Za-z]/g, ''))
    .filter(w => w.length > 0);

  // Count long words
  const longWordCount = words.filter(w => w.length >= 7).length;

  // Apply rules
  if (dashCount >= 2 || parenthesisPairCount >= 2 || longWordCount >= 3) {
    return "AI";
  }
  return "Human";
}
