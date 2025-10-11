/**
 * Converts a non-negative integer into its binary (base-2) representation as a string.
 *
 * The conversion repeatedly divides the number by 2 and records the remainder.
 * The binary string is formed by reading the remainders in reverse order (last remainder first).
 *
 * @param {number} decimal - A non-negative integer to convert to binary.
 * @returns {string} The binary representation of the given decimal number.
 *
 * @throws {TypeError} If the input is not a non-negative integer.
 *
 * @example
 * toBinary(5);
 * // Returns: "101"
 *
 * @example
 * toBinary(13);
 * // Returns: "1101"
 *
 * @example
 * toBinary(0);
 * // Returns: "0"
 */
function toBinary(decimal) {
  if (typeof decimal !== 'number' || decimal < 0 || !Number.isInteger(decimal)) {
    throw new TypeError('Input must be a non-negative integer.');
  }

  // Special case for zero
  if (decimal === 0) return '0';

  let binary = '';

  // Repeatedly divide by 2 and record the remainders
  while (decimal > 0) {
    const remainder = decimal % 2;
    binary = remainder + binary; // prepend remainder
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}