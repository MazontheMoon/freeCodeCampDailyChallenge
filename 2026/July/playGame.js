function playGame(player1, player2) {
  let score1 = 0;
  let score2 = 0;

  for (let i = 0; i < player1.length; i++) {
    const p1 = player1[i];
    const p2 = player2[i];

    if (p1 === "C" && p2 === "C") {
      score1 += 3;
      score2 += 3;
    } else if (p1 === "D" && p2 === "D") {
      score1 += 1;
      score2 += 1;
    } else if (p1 === "D" && p2 === "C") {
      score1 += 5;
    } else { // p1 === "C" && p2 === "D"
      score2 += 5;
    }
  }

  return [score1, score2];
}
