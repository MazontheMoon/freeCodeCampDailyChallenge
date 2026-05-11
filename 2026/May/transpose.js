/*
PSEUDOCODE:

function transpose(matrix):
    rows = number of rows
    cols = number of columns

    result = empty matrix of size cols x rows

    for r from 0 to rows:
        for c from 0 to cols:
            result[c][r] = matrix[r][c]

    return result
*/

/**
 * Transposes a matrix (rows ↔ columns).
 *
 * @param {Array<Array<any>>} matrix
 * @returns {Array<Array<any>>}
 */
function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const result = Array.from({ length: cols }, () => Array(rows));

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            result[c][r] = matrix[r][c];
        }
    }

    return result;
}
