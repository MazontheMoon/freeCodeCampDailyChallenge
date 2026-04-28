/*
PSEUDOCODE:

function getNumberWords(n):

    if n == 0:
        return "zero"

    if n < 20:
        return ones[n]

    tensPart = tens[n // 10]
    onesPart = n % 10

    if onesPart == 0:
        return tensPart
    else:
        return tensPart + "-" + ones[onesPart]
*/

/**
 * Converts a number (0–99) into its English word form.
 *
 * @param {number} n
 * @returns {string}
 */
function getNumberWords(n) {
    const ones = [
        "", "one", "two", "three", "four", "five",
        "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];

    const tens = [
        "", "", "twenty", "thirty", "forty",
        "fifty", "sixty", "seventy", "eighty", "ninety"
    ];

    if (n === 0) return "zero";
    if (n < 20) return ones[n];

    const tensPart = tens[Math.floor(n / 10)];
    const onesPart = n % 10;

    return onesPart === 0
        ? tensPart
        : `${tensPart}-${ones[onesPart]}`;
}
