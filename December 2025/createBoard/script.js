
// 1. Get the number of rows and columns from the input array
// 2. Create an empty array to hold the board
// 3. Loop through each row
//    - Create an empty array for the current row
//    - Loop through each column
//        - If the sum of the row index and column index is even
//            - Add "X" to the row
//        - Otherwise
//            - Add "O" to the row
//    - Add the completed row to the board
// 4. Return the board

/**
 * Creates a checkerboard-style matrix filled with "X" and "O".
 *
 * The top-left cell is always "X", and the characters alternate
 * like a checkerboard based on their row and column positions.
 *
 * @param {number[]} dimensions - An array where the first value is
 * the number of rows and the second value is the number of columns.
 * @returns {string[][]} A two-dimensional array representing the board.
 */

function createBoard(dimensions) {
  const rows = dimensions[0];
  const columns = dimensions[1];

  const board = [];

  for (let row = 0; row < rows; row++) {
    const currentRow = [];

    for (let col = 0; col < columns; col++) {
      if ((row + col) % 2 === 0) {
        currentRow.push("X");
      } else {
        currentRow.push("O");
      }
    }

    board.push(currentRow);
  }

  return board;
}

