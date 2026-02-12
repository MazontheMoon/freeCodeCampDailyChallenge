/**
 * Returns the lap number with the largest time difference.
 *
 * @param {number[]} skater1
 * @param {number[]} skater2
 * @returns {number} Lap number (1-based)
 */
function largestDifference(skater1, skater2) {
  let maxDifference = 0;
  let lapIndex = 0;

  for (let i = 0; i < skater1.length; i++) {
    const difference = Math.abs(skater1[i] - skater2[i]);

    if (difference > maxDifference) {
      maxDifference = difference;
      lapIndex = i;
    }
  }

  return lapIndex + 1; // convert to 1-based
}
