/**
 * Determines the winner of a Rock, Paper, Scissors match.
 *
 * @param {string} player1 - Player 1's choice ("Rock", "Paper", or "Scissors")
 * @param {string} player2 - Player 2's choice ("Rock", "Paper", or "Scissors")
 * @returns {string} The result of the match
 */

function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "Tie";
  }

  if (
    (player1 === "Rock" && player2 === "Scissors") ||
    (player1 === "Paper" && player2 === "Rock") ||
    (player1 === "Scissors" && player2 === "Paper")
  ) {
    return "Player 1 wins";
  }

  return "Player 2 wins";
}
