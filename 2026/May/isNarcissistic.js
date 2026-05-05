/*
PSEUDOCODE:

function isNarcissistic(n):
    digits = convert number to string
    length = number of digits
    sum = 0

    for each digit:
        sum += digit ^ length

    return sum == n
*/

/**
 * Determines if a number is narcissistic.
 *
 * @param {number} n
 * @returns {boolean}
 */
function isNarcissistic(n) {
    const digits = String(n);
    const len = digits.length;

    let sum = 0;

    for (const d of digits) {
        sum += Math.pow(Number(d), len);
    }

    return sum === n;
}
