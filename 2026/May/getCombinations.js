// PSEUDOCODE:
// function getCombinations(n)
//     create array dp of size n+1
//     dp[0] = 1
//     for i from 1 to n:
//         dp[i] = 0
//         for j from 0 to i-1:
//             dp[i] += dp[j] * dp[i - j - 1]
//     return dp[n]

/**
 * Returns the number of valid combinations of n pairs of parentheses.
 * Uses dynamic programming based on the Catalan number recurrence.
 * 
 * @param {number} n - Number of pairs of parentheses
 * @returns {number} Number of valid combinations
 */
function getCombinations(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - j - 1];
        }
    }

    return dp[n];
}
