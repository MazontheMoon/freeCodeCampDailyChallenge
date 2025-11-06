/**
 * Computes the value of each character according to the encoding:
 * - 'a' to 'z' → 1 to 26
 * - 'A' to 'Z' → 27 to 52
 * - All other characters → 0
 *
 * @param {string} str - The string to compute the value of.
 * @returns {number} The total computed value.
 */
function computeSignature(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= 97 && code <= 122) {        // 'a'..'z'
      sum += code - 96;
    } else if (code >= 65 && code <= 90) {  // 'A'..'Z'
      sum += code - 38;                     // 'A'(65) → 27
    }
    // Non-letter characters add 0
  }
  return sum;
}

/**
 * Verifies whether the provided signature matches the computed one
 * derived from the given message and secret key.
 *
 * Rules:
 * - Letters have numeric values (a–z = 1–26, A–Z = 27–52)
 * - Non-letter characters are ignored
 * - signature = sum(message values) + sum(key values)
 *
 * @param {string} message - The message string.
 * @param {string} key - The secret key string.
 * @param {number} signature - The provided signature to verify.
 * @returns {boolean} True if valid, otherwise false.
 *
 * @example
 * verify("foo", "bar", 57); // true
 * verify("freeCodeCamp", "Rocks", 238); // true
 */
function verify(message, key, signature) {
  const computed = computeSignature(message) + computeSignature(key);
  return computed === signature;
}

