/**
 * Evaluates the strength of a given password and classifies it as "weak", "medium", or "strong".
 *
 * The password is checked against four rules:
 * 1. It is at least 8 characters long.
 * 2. It contains both uppercase and lowercase letters.
 * 3. It contains at least one number.
 * 4. It contains at least one special character from the set: !, @, #, $, %, ^, &, *.
 *
 * Scoring:
 * - "weak"  → fewer than 2 rules met
 * - "medium" → 2 or 3 rules met
 * - "strong" → all 4 rules met
 *
 * @param {string} password - The password string to evaluate.
 * @returns {"weak" | "medium" | "strong"} The evaluated password strength.
 *
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * checkStrength("abc");
 * // Returns: "weak"
 *
 * @example
 * checkStrength("Abcdef12");
 * // Returns: "medium"
 *
 * @example
 * checkStrength("Abcdef12@");
 * // Returns: "strong"
 */
function checkStrength(password) {
  if (typeof password !== 'string') {
    throw new TypeError('Input must be a string.');
  }

  let score = 0;

  // Rule 1: At least 8 characters long
  if (password.length >= 8) score++;

  // Rule 2: Contains both uppercase and lowercase
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;

  // Rule 3: Contains at least one number
  if (/\d/.test(password)) score++;

  // Rule 4: Contains at least one special character from the set
  if (/[!@#$%^&*]/.test(password)) score++;

  if (score < 2) return 'weak';
  if (score < 4) return 'medium';
  return 'strong';
}