/*
PSEUDOCODE:
- Create a list of all possible winning line combinations
- For each winning line:
    - Get the three board positions in that line
    - If all three are "X":
        - Return "X wins"
    - If all three are "O":
        - Return "O wins"
- If no winning line is found:
    - Return "Draw"
*/

/**
 * Determines the winner of a completed Tic-Tac-Toe game.
 *
 * A player wins if they have three of their symbols ("X" or "O")
 * in a row horizontally, vertically, or diagonally.
 *
 * @param {string[][]} board - A 3x3 matrix representing the game board
 * @returns {string} "X wins", "O wins", or "Draw"
 */

function ticTacToe(board) {
  // All possible winning line coordinate sets
  const winningLines = [
    // Rows
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],

    // Columns
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],

    // Diagonals
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ];

  for (const line of winningLines) {
    const [a, b, c] = line;

    const v1 = board[a[0]][a[1]];
    const v2 = board[b[0]][b[1]];
    const v3 = board[c[0]][c[1]];

    if (v1 === "X" && v2 === "X" && v3 === "X") {
      return "X wins";
    }

    if (v1 === "O" && v2 === "O" && v3 === "O") {
      return "O wins";
    }
  }

  return "Draw";
}
