/*
FUNCTION zipStrings(str1, str2):

    SET result = empty string

    SET maxLength = maximum length of str1 and str2

    FOR i from 0 to maxLength - 1:
        IF i < length of str1:
            APPEND str1[i] to result

        IF i < length of str2:
            APPEND str2[i] to result

    RETURN result
*/
/**
 * Interleaves two strings character by character, starting with the first string.
 * If one string is longer, the remaining characters are appended at the end.
 *
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {string} The interleaved result string.
 */

function zipStrings(str1, str2) {
    let result = "";
    const maxLength = Math.max(str1.length, str2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < str1.length) result += str1[i];
        if (i < str2.length) result += str2[i];
    }

    return result;
}
