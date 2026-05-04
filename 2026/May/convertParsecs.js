/*
PSEUDOCODE:

function convertParsecs(n):
    if n is odd:
        return n * 2
    else:
        return n * 3
*/

/**
 * Converts parsecs into time or distance.
 *
 * @param {number} n
 * @returns {number}
 */
function convertParsecs(n) {
    return n % 2 === 1 ? n * 2 : n * 3;
}
