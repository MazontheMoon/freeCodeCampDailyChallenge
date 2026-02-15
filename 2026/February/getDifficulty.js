/**
 * Determines the difficulty of a skeleton track.
 *
 * @param {string} track
 * @returns {string}
 */
function getDifficulty(track) {
  let score = 0;

  for (let i = 0; i < track.length; i++) {
    const current = track[i];
    const previous = track[i - 1];

    if (current === "S") continue;

    if (
      (current === "L" && previous === "R") ||
      (current === "R" && previous === "L")
    ) {
      score += 15;
    } else {
      score += 5;
    }
  }

  if (score <= 100) return "Easy";
  if (score <= 200) return "Medium";
  return "Hard";
}
