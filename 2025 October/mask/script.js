/**
 * Mask a credit card number string by replacing every digit except the last four with '*'.
 *
 * The input must contain four sets of four digits (0-9), where each set is separated
 * by the same single separator: either a space `" "` or a hyphen `"-"`.
 *
 * Examples:
 *   mask("4012-8888-8888-1881"); // => "****-****-****-1881"
 *   mask("1234 5678 9012 3456"); // => "**** **** **** 3456"
 *
 * @param {string} card - Credit card number string in the form "dddd-dddd-dddd-dddd"
 *                        or "dddd dddd dddd dddd" (d = digit 0-9).
 * @returns {string} The masked credit card string with all digits replaced by '*'
 *                   except the final four digits. Original separators are preserved.
 * @throws {TypeError} If `card` is not a string or does not match the required format.
 */
function mask(card) {
  // Basic type check
  if (typeof card !== 'string') {
    throw new TypeError('card must be a string');
  }

  // Validate format: 4 groups of 4 digits separated by the same single separator (space or hyphen)
  // Capture separator in group 1 and ensure it's reused (\1) between groups.
  const formatRegex = /^\d{4}([ -])\d{4}\1\d{4}\1\d{4}$/;
  if (!formatRegex.test(card)) {
    throw new TypeError(
      'card must be in the format "dddd-dddd-dddd-dddd" or "dddd dddd dddd dddd" with a consistent separator'
    );
  }

  // Replace every digit that has at least 4 digits after it with '*'.
  // This leaves the last 4 digits unchanged and does not affect separators.
  return card.replace(/\d(?=(?:.*\d){4})/g, '*');
}