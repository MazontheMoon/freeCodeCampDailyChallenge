/**
 * Determine all valid forward pawn moves from a given position
 *
 * 1. Extract column letter and row number from the position string
 * 2. Convert row to a number
 * 3. If row is 2:
 *      - Pawn can move to row + 1 and row + 2 (if within board)
 *    Else:
 *      - Pawn can move to row + 1 (if within board)
 * 4. Build new positions using the same column
 * 5. Return the list of positions in ascending order
 */
 
 /**
 * Returns all valid squares a pawn can move to from a given position.
 *
 * @param {string} position - Chess square (e.g. "D4")
 * @returns {string[]} Array of valid pawn moves in ascending order
 */
function findPawnMoves(position) {
  const column = position[0];
  const row = Number(position[1]);

  const moves = [];

  // Normal one-square move
  if (row + 1 <= 8) {
    moves.push(column + (row + 1));
  }

  // Two-square move from starting position
  if (row === 2 && row + 2 <= 8) {
    moves.push(column + (row + 2));
  }

  return moves;
}

