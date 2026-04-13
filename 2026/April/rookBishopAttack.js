/*
PSEUDOCODE:
- Take two positions: rookPos and bishopPos

- Convert both positions into coordinates:
  - column → number (A=1, B=2, ..., H=8)
  - row → number

- Check rook attack:
  - If same column OR same row:
    - return "rook"

- Check bishop attack:
  - If absolute difference of columns == absolute difference of rows:
    - return "bishop"

- Otherwise:
  - return "neither"
*/

/**
 * Determines whether a rook or bishop can attack the other.
 * @param {string} rookPos - Position of the rook (e.g. "A1").
 * @param {string} bishopPos - Position of the bishop (e.g. "C3").
 * @returns {string} "rook", "bishop", or "neither".
 */
function rookBishopAttack(rookPos, bishopPos) {
  const toCoord = (pos) => {
    const col = pos.charCodeAt(0) - 64; // A=1, B=2, ..., H=8
    const row = parseInt(pos.slice(1), 10);
    return [col, row];
  };

  const [rCol, rRow] = toCoord(rookPos);
  const [bCol, bRow] = toCoord(bishopPos);

  // Rook attack (same row or column)
  if (rCol === bCol || rRow === bRow) {
    return "rook";
  }

  // Bishop attack (diagonal)
  if (Math.abs(rCol - bCol) === Math.abs(rRow - bRow)) {
    return "bishop";
  }

  return "neither";
}
