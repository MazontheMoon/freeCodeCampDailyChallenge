/*
PSEUDOCODE:

function isValidIsbn13(str):
    if contains invalid characters:
        return false

    digits = remove hyphens

    if length != 13:
        return false

    sum = 0

    for i from 0 to 12:
        digit = digits[i]
        if i is even:
            sum += digit * 1
        else:
            sum += digit * 3

    return sum % 10 == 0
*/

/**
 * Validates an ISBN-13 string.
 *
 * @param {string} str
 * @returns {boolean}
 */
function isValidIsbn13(str) {
    // Only digits and hyphens allowed
    if (!/^[\d-]+$/.test(str)) return false;

    const digits = str.replace(/-/g, "");

    if (digits.length !== 13) return false;

    let sum = 0;

    for (let i = 0; i < 13; i++) {
        const digit = Number(digits[i]);
        sum += digit * (i % 2 === 0 ? 1 : 3);
    }

    return sum % 10 === 0;
}
