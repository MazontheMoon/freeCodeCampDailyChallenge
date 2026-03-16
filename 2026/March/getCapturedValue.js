/*
PSEUDOCODE

function getCapturedValue(piecesRemaining):

    define startingCounts for each piece:
        P: 8
        R: 2
        N: 2
        B: 2
        Q: 1
        K: 1

    define pieceValues:
        P: 1
        R: 5
        N: 3
        B: 3
        Q: 9
        K: 0

    create a copy of startingCounts called remainingCounts

    for each piece in piecesRemaining:
        decrease remainingCounts[piece] by 1

    if remainingCounts["K"] > 0:
        return "Checkmate"

    total = 0

    for each piece type in remainingCounts:
        capturedCount = remainingCounts[piece]
        value = pieceValues[piece]

        total += capturedCount * value

    return total
*/

/**
 * Calculates the total value of chess pieces captured by the opponent.
 *
 * The player starts with the standard 16 chess pieces. The provided array
 * represents the pieces still on the board. Any missing pieces are considered
 * captured by the opponent.
 *
 * Piece values:
 * P = 1, R = 5, N = 3, B = 3, Q = 9, K = 0
 *
 * If the King is missing, the function returns "Checkmate".
 *
 * @param {string[]} piecesRemaining - Array of piece abbreviations still on the board.
 * @returns {number|string} Total value of captured pieces or "Checkmate".
 */
function getCapturedValue(piecesRemaining) {

  const startingCounts = {
    P: 8,
    R: 2,
    N: 2,
    B: 2,
    Q: 1,
    K: 1
  };

  const pieceValues = {
    P: 1,
    R: 5,
    N: 3,
    B: 3,
    Q: 9,
    K: 0
  };

  const remainingCounts = { ...startingCounts };

  for (const piece of piecesRemaining) {
    remainingCounts[piece]--;
  }

  if (remainingCounts["K"] > 0) {
    return "Checkmate";
  }

  let total = 0;

  for (const piece in remainingCounts) {
    total += remainingCounts[piece] * pieceValues[piece];
  }

  return total;
}