/*
PSEUDOCODE:

function getWordScore(word):
    total = 0

    for each char in word:
        convert to lowercase
        value = charCode - 'a' + 1
        add to total

    return total
*/

/**
 * Calculates the score of a word based on A=1 ... Z=26.
 *
 * @param {string} word
 * @returns {number}
 */
function getWordScore(word) {
    let total = 0;

    for (const char of word.toLowerCase()) {
        const value = char.charCodeAt(0) - 96;
        total += value;
    }

    return total;
}
