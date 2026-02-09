/*
calculate yourScore by summing all inputs

create array of existingScores
add yourScore to array

sort scores in descending order

find index of yourScore in sorted array

if index == 0 → "Gold"
else if index == 1 → "Silver"
else if index == 2 → "Bronze"
else → "No Medal"

*/

/**
 * Calculates a ski jumping score and determines medal placement.
 *
 * @param {number} distance - Distance points
 * @param {number} style - Style points
 * @param {number} wind - Wind compensation
 * @param {number} kPoint - K-point bonus
 * @returns {string} Medal result
 */
function skiJumpMedal(distance, style, wind, kPoint) {
  const yourScore = distance + style + wind + kPoint;

  const otherScores = [
    165.5, 172.0, 158.0, 180.0,
    169.5, 175.0, 162.0, 170.0
  ];

  const allScores = [...otherScores, yourScore];

  allScores.sort((a, b) => b - a);

  const rank = allScores.indexOf(yourScore);

  if (rank === 0) return "Gold";
  if (rank === 1) return "Silver";
  if (rank === 2) return "Bronze";
  return "No Medal";
}
