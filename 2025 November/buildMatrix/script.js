/**
 * Builds a 2D matrix (array of arrays) filled with zeros.
 *
 * @param {number} rows - The number of rows in the matrix.
 * @param {number} cols - The number of columns in the matrix.
 * @returns {number[][]} A matrix of the specified size filled with zeros.
 *
 * @example
 * buildMatrix(2, 3);
 * // returns [
 * //   [0, 0, 0],
 * //   [0, 0, 0]
 * // ]
 */
function buildMatrix(rows, cols) {
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    const row = new Array(cols).fill(0);
    matrix.push(row);
  }

  return matrix;
}
