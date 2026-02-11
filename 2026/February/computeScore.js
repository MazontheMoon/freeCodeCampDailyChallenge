/**
 * Computes the final figure skating score.
 *
 * @param {number[]} scores - Array of 10 judge scores (0–10)
 * @param {...number} penalties - Optional penalty values
 * @returns {number} Final score after removing highest/lowest and subtracting penalties
 */
function computeScore(scores, ...penalties) {
  // Create a copy so we don't mutate original
  const sorted = [...scores].sort((a, b) => a - b);

  // Remove lowest and highest
  const middleEight = sorted.slice(1, -1);

  // Sum the remaining 8 scores
  const baseScore = middleEight.reduce((sum, score) => sum + score, 0);

  // Sum penalties
  const totalPenalties = penalties.reduce((sum, p) => sum + p, 0);

  return baseScore - totalPenalties;
}
