/**
 * Determines the stellar classification of a star based on its surface temperature in Kelvin (K).
 *
 * Stellar classifications correspond to temperature ranges as follows:
 * - "O": 30,000 K or higher
 * - "B": 10,000 K – 29,999 K
 * - "A": 7,500 K – 9,999 K
 * - "F": 6,000 K – 7,499 K
 * - "G": 5,200 K – 5,999 K
 * - "K": 3,700 K – 5,199 K
 * - "M": 0 K – 3,699 K
 *
 * @param {number} temp - The surface temperature of the star in Kelvin (must be non-negative).
 * @returns {"O" | "B" | "A" | "F" | "G" | "K" | "M"} The stellar classification.
 *
 * @throws {TypeError} If the input is not a number.
 * @throws {RangeError} If the temperature is negative.
 *
 * @example
 * classification(35000);
 * // Returns: "O"
 *
 * @example
 * classification(5800);
 * // Returns: "G"
 *
 * @example
 * classification(3200);
 * // Returns: "M"
 */
function classification(temp) {
  if (typeof temp !== 'number' || isNaN(temp)) {
    throw new TypeError('Temperature must be a valid number.');
  }

  if (temp < 0) {
    throw new RangeError('Temperature cannot be negative.');
  }

  if (temp >= 30000) return 'O';
  if (temp >= 10000) return 'B';
  if (temp >= 7500) return 'A';
  if (temp >= 6000) return 'F';
  if (temp >= 5200) return 'G';
  if (temp >= 3700) return 'K';
  return 'M';
}