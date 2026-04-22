/*
PSEUDOCODE:

function getUniqueClimbs(n):
    if n <= 2:
        return n

    prev2 = 1   // ways(1)
    prev1 = 2   // ways(2)

    for i from 3 to n:
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current

    return prev1
*/

/**
 * Returns number of distinct ways to climb n stairs
 * using 1 or 2 steps at a time.
 *
 * @param {number} n
 * @returns {number}
 */
function getUniqueClimbs(n) {
    if (n <= 2) return n;

    let prev2 = 1;
    let prev1 = 2;

    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}
