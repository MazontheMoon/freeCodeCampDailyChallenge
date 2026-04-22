/*
PSEUDOCODE:

function getOddWords(str):
    words = split str by space
    result = empty list

    for each word in words:
        if length of word is odd:
            add word to result

    return join result with spaces
*/

/**
 * Returns words with an odd number of characters.
 *
 * @param {string} str
 * @returns {string}
 */
function getOddWords(str) {
    return str
        .split(" ")
        .filter(word => word.length % 2 !== 0)
        .join(" ");
}
