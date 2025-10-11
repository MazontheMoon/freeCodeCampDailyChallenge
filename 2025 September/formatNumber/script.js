/**
 * Formats a 10-digit string as a phone number in the format: "+D (DDD) DDD-DDDD".
 *
 * The first digit is used as the country code.
 * The next three digits represent the area code, followed by the local number.
 *
 * @param {string} number - A string containing exactly 10 digits (e.g. "1234567890").
 * @returns {string} The formatted phone number (e.g. "+1 (234) 567-890").
 *
 * @throws {TypeError} If the input is not a string of exactly 10 digits.
 *
 * @example
 * formatNumber("1234567890");
 * // Returns: "+1 (234) 567-890"
 *
 * @example
 * formatNumber("9876543210");
 * // Returns: "+9 (876) 543-210"
 */
function formatNumber(number) {
  const country = number[0];
  const area = number.slice(1, 4);
  const firstPart = number.slice(4, 7);
  const secondPart = number.slice(7);

  return `+${country} (${area}) ${firstPart}-${secondPart}`;
}
