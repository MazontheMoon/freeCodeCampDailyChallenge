/**
 * Calculates the sum of differences between consecutive elements in an array.
 *
 * For each pair, computes (next - current) and sums the results.
 *
 * @param {number[]} arr - Array of numbers.
 * @returns {number} Sum of consecutive differences.
 */

/**
 * Calculates the sum of differences between consecutive elements in an array.
 *
 * For each pair, computes (next - current) and sums the results.
 *
 * @param {number[]} arr - Array of numbers.
 * @returns {number} Sum of consecutive differences.
 */
function sumOfDifferences(arr) {
    let total = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        total += arr[i + 1] - arr[i];
    }

    return total;
}
