/*
set totalPenalty to 0

for each round in rounds:
    missedTargets = 5 - round
    penaltyForRound = missedTargets * 150
    add penaltyForRound to totalPenalty

return totalPenalty

*/

/**
 * Calculates the total penalty distance in meters for a biathlon.
 *
 * @param {number[]} rounds - An array where each value represents targets hit (0–5) in a round
 * @returns {number} Total penalty distance in meters
 */
function calculatePenaltyDistance(rounds) {
  let totalPenalty = 0;

  for (let hits of rounds) {
    const missedTargets = 5 - hits;
    totalPenalty += missedTargets * 150;
  }

  return totalPenalty;
}
