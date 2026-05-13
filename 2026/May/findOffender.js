/*
PSEUDOCODE:

function findOffender(arr):

    for i from 0 to n-2:
        if arr[i] > arr[i+1]:

            if i == 0:
                return i

            if arr[i-1] <= arr[i+1]:
                return i
            else:
                return i+1

    return -1
*/

/**
 * Finds the index of the out-of-place element.
 *
 * @param {number[]} arr
 * @returns {number}
 */
function findOffender(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            if (i === 0) return i;

            if (arr[i - 1] <= arr[i + 1]) {
                return i;
            } else {
                return i + 1;
            }
        }
    }

    return -1;
}
