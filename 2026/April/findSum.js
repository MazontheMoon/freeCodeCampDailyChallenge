/*
PSEUDOCODE:

function findSum(arr, target):

    define backtrack(startIndex, currentSubset, currentSum):

        if currentSum == target AND subset length >= 2:
            return subset

        if currentSum > target (optional optimization):
            stop path

        for i from startIndex to end:
            add arr[i] to subset

            result = backtrack(i + 1, updated subset, updated sum)
            if result found:
                return result

            remove arr[i] from subset

        return null

    result = backtrack(0, empty subset, 0)

    if result exists:
        return result
    else:
        return "Sum not found"
*/

/**
 * Finds the first subset (length >= 2) that sums to target.
 * Respects original order and prioritizes lowest indices.
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[] | string}
 */
function findSum(arr, target) {
    function backtrack(start, subset, sum) {
        if (sum === target && subset.length >= 2) {
            return [...subset];
        }

        for (let i = start; i < arr.length; i++) {
            subset.push(arr[i]);

            const result = backtrack(i + 1, subset, sum + arr[i]);
            if (result) return result;

            subset.pop();
        }

        return null;
    }

    const result = backtrack(0, [], 0);
    return result || "Sum not found";
}
