/**
 * Determines whether a message is valid based on a validator string.
 *
 * A message is considered valid if:
 * - Each word in the message begins with the corresponding character
 *   in the validator string (case-insensitive).
 * - The number of words matches the length of the validator string.
 *
 * @param {string} message - The message containing words separated by single spaces.
 * @param {string} validator - The string of characters used for validation.
 * @returns {boolean} True if the message is valid, otherwise false.
 */
function isValidMessage(message, validator) {
  const words = message.split(" ");

  if (words.length !== validator.length) {
    return false;
  }

  for (let i = 0; i < words.length; i++) {
    const wordFirst = words[i][0].toLowerCase();
    const valChar = validator[i].toLowerCase();

    if (wordFirst !== valChar) {
      return false;
    }
  }

  return true;
}
