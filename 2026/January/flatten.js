/*
FUNCTION flatten(inputArray):
    CREATE empty resultArray

    FOR EACH item IN inputArray:
        IF item is an array:
            flattenedItem = flatten(item)
            ADD all values from flattenedItem to resultArray
        ELSE:
            ADD item to resultArray

    RETURN resultArray
*/

/**
 * Flattens an array containing nested arrays into a single-level array.
 *
 * The original order of elements is preserved.
 * Nested arrays may be arbitrarily deep.
 *
 * @param {Array} arr - An array that may contain nested arrays
 * @returns {Array} A new flattened array
 */

function flatten(arr) {
    const result = [];

    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    }

    return result;
}
