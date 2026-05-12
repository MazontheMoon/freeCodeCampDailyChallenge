/*
PSEUDOCODE:

function getFrequency(str):
    map = empty object

    for each char in str:
        if char not in map:
            map[char] = 0

        map[char] += 1

    return map
*/

/**
 * Returns a frequency map of characters in a string.
 *
 * @param {string} str
 * @returns {Object}
 */
function getFrequency(str) {
    const freq = {};

    for (const char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    return freq;
}
