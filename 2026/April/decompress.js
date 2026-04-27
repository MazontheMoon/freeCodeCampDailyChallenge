/*
PSEUDOCODE:

function decompress(str):
    tokens = split string
    result = empty list

    for each token:
        if token is a number:
            index = token - 1
            add result[index]
        else:
            add token

    return joined result
*/

/**
 * Decompresses a compressed string back to original form.
 *
 * @param {string} str
 * @returns {string}
 */
function decompress(str) {
    const tokens = str.split(" ");
    const result = [];

    for (const token of tokens) {
        if (!isNaN(token)) {
            const index = Number(token) - 1;
            result.push(result[index]);
        } else {
            result.push(token);
        }
    }

    return result.join(" ");
}
