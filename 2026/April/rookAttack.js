/*
PSEUDOCODE:
- Take two input strings (e.g. "A1", "H8")

- Extract:
  - column (letter) from each string
  - row (number) from each string

- If columns are equal:
  - return true (same vertical line)

- If rows are equal:
  - return true (same horizontal line)

- Otherwise:
  - return false
*/
/**
 * Determines if two rooks can attack each other on a chessboard.
 * @param {string} pos1 - First rook position (e.g. "A1").
 * @param {string} pos2 - Second rook position (e.g. "H8").
 * @returns {boolean} True if the rooks can attack each other, otherwise false.
 */
function rookAttack(pos1, pos2) {
  const col1 = pos1[0];
  const row1 = parseInt(pos1.slice(1), 10);

  const col2 = pos2[0];
  const row2 = parseInt(pos2.slice(1), 10);

  return col1 === col2 || row1 === row2;
}
