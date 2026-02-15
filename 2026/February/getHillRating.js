/**
 * Determines the difficulty rating of a ski hill.
 *
 * @param {number} drop
 * @param {number} distance
 * @param {string} type
 * @returns {string}
 */
function getHillRating(drop, distance, type) {
  const steepness = drop / distance;

  let multiplier;

  if (type === "Downhill") {
    multiplier = 1.2;
  } else if (type === "Slalom") {
    multiplier = 0.9;
  } else { // Giant Slalom
    multiplier = 1.0;
  }

  const adjusted = steepness * multiplier;

  if (adjusted <= 0.1) return "Green";
  if (adjusted <= 0.25) return "Blue";
  return "Black";
}
