/*
FUNCTION fizzBuzzCount(start, end):

    SET fizz = 0
    SET buzz = 0

    FOR i from start to end:
        IF i divisible by 3:
            INCREMENT fizz

        IF i divisible by 5:
            INCREMENT buzz

    RETURN { fizz, buzz }
*/

/**
 * Counts how many numbers in a range are divisible by 3 (fizz)
 * and by 5 (buzz), inclusive.
 *
 * Numbers divisible by both count toward both totals.
 *
 * @param {number} start - Start of range (inclusive).
 * @param {number} end - End of range (inclusive).
 * @returns {{fizz: number, buzz: number}} Counts of fizz and buzz.
 */

function fizzBuzzCount(start, end) {
    let fizz = 0;
    let buzz = 0;

    for (let i = start; i <= end; i++) {
        if (i % 3 === 0) fizz++;
        if (i % 5 === 0) buzz++;
    }

    return { fizz, buzz };
}
