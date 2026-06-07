// PSEUDOCODE:
// function lastLoadDate(remaining, usageHistory)
//     total = sum of usageHistory
//     avg = total / length of usageHistory
//     return floor(remaining / avg)

/**
 * Calculates how many full days of detergent remain based on average usage.
 *
 * @param {number} remaining - Remaining scoops of detergent
 * @param {number[]} usageHistory - Array of daily usage
 * @returns {number} Number of full days remaining
 */
function lastLoadDate(remaining, usageHistory) {
    const total = usageHistory.reduce((sum, val) => sum + val, 0);
    const avg = total / usageHistory.length;

    return Math.floor(remaining / avg);
}