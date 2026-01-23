/*
FUNCTION isValidHex(color)
    IF color does not start with "#"
        RETURN false

    REMOVE the "#" from the start of the string
    STORE remaining characters in hexPart

    IF length of hexPart is not 3 AND not 6
        RETURN false

    FOR each character in hexPart
        IF character is not a hexadecimal character (0-9, a-f, A-F)
            RETURN false

    RETURN true
END FUNCTION
*/

/**
 * Determines whether a string is a valid CSS hex color.
 *
 * A valid hex color:
 * - Starts with "#"
 * - Is followed by either 3 or 6 hexadecimal characters
 * - Hexadecimal characters are 0-9 and A-F (case-insensitive)
 *
 * @param {string} color - The string to validate as a hex color
 * @returns {boolean} True if the string is a valid CSS hex color, otherwise false
 */
function isValidHex(color) {
  // Regular expression explanation:
  // ^#        → must start with "#"
  // ([0-9a-f]{3}|[0-9a-f]{6}) → exactly 3 OR exactly 6 hex characters
  // $         → nothing allowed after
  const hexRegex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

  return hexRegex.test(color);
}
