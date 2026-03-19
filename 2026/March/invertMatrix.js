
/*
PSEUDOCODE

function invertMatrix(matrix):

    find the two distinct values in the matrix
        iterate through matrix until both values are found

    let valueA and valueB be those two values

    create a new matrix

    for each row in matrix:
        create newRow

        for each element in row:
            if element equals valueA:
                add valueB to newRow
            else:
                add valueA to newRow

        add newRow to new matrix

    return new matrix
*/

/**
 * Inverts a matrix containing exactly two distinct values by swapping them.
 *
 * The function returns a new matrix where every occurrence of one value
 * is replaced with the other, and vice versa.
 *
 * @param {Array<Array<any>>} matrix - A 2D array containing exactly two distinct values.
 * @returns {Array<Array<any>>} A new matrix with values swapped.
 */
function invertMatrix(matrix) {
  const values = new Set();

  // Find the two distinct values
  for (const row of matrix) {
    for (const cell of row) {
      values.add(cell);
      if (values.size === 2) break;
    }
    if (values.size === 2) break;
  }

  const [valueA, valueB] = [...values];

  // Build new matrix
  return matrix.map(row =>
    row.map(cell => (cell === valueA ? valueB : valueA))
  );
}