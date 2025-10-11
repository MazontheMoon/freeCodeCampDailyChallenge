/**
 * Converts a binary string into its decimal (base-10) equivalent.
 *
 * The binary string must contain only the digits `0` and `1`.
 * The conversion multiplies each bit by a power of 2, starting from the rightmost bit (2^0).
 *
 * @param {string} binary - A string representing a binary number (e.g. "1011").
 * @returns {number} The decimal equivalent of the binary input.
 *
 * @throws {TypeError} If the input is not a string of only '0' and '1'.
 *
 * @example
 * toDecimal("101");
 * // Returns: 5
 *
 * @example
 * toDecimal("1101");
 * // Returns: 13
 *
 * @example
 * toDecimal("0");
 * // Returns: 0
 */
function toDecimal(binary) {
  if (typeof binary !== 'string' || !/^[01]+$/.test(binary)) {
    throw new TypeError('Input must be a string containing only 0s and 1s.');
  }

  let decimal = 0;
  const length = binary.length;

  for (let i = 0; i < length; i++) {
    const bit = Number(binary[length - 1 - i]); // right to left
    decimal += bit * Math.pow(2, i);
  }

  return decimal;
}
