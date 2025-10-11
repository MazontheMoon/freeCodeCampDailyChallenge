/**
 * Determines whether a set of luminosity readings indicates the presence of an exoplanet
 * using the transit method.
 *
 * Each character in the string represents a luminosity level:
 * - '0'–'9' → values 0–9
 * - 'A'–'Z' → values 10–35
 *
 * A star is considered to have an exoplanet if **any single reading**
 * is less than or equal to **80% of the average luminosity** of all readings.
 *
 * @param {string} readings - A non-empty string of luminosity readings (characters 0–9, A–Z).
 * @returns {boolean} `true` if an exoplanet is detected, otherwise `false`.
 *
 * @throws {TypeError} If the input is not a valid string of alphanumeric characters.
 * @throws {Error} If the string is empty.
 *
 * @example
 * hasExoplanet("89AB");
 * // Average = (8 + 9 + 10 + 11) / 4 = 9.5 → 80% = 7.6 → none ≤ 7.6 → false
 *
 * @example
 * hasExoplanet("9990");
 * // Average = (9 + 9 + 9 + 0) / 4 = 6.75 → 80% = 5.4 → 0 ≤ 5.4 → true
 *
 * @example
 * hasExoplanet("AAB8");
 * // Average = (10 + 10 + 11 + 8) / 4 = 9.75 → 80% = 7.8 → 8 > 7.8 → false
 */
function hasExoplanet(readings) {
  if (typeof readings !== 'string' || !/^[0-9A-Z]+$/.test(readings)) {
    throw new TypeError('Input must be a string containing only characters 0-9 and A-Z.');
  }

  if (readings.length === 0) {
    throw new Error('Input string cannot be empty.');
  }

  // Convert each character to its luminosity value (0–35)
  const values = [...readings].map(char => {
    if (/[0-9]/.test(char)) {
      return Number(char);
    } else {
      return char.charCodeAt(0) - 55; // 'A' → 65, so 65 - 55 = 10
    }
  });

  // Compute average luminosity
  const average = values.reduce((sum, val) => sum + val, 0) / values.length;
  const threshold = average * 0.8;

  // Determine if any reading dips below or equals 80% of the average
  return values.some(val => val <= threshold);
}