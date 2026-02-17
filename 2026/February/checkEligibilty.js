/**
 * Determines bobsled eligibility.
 *
 * @param {number[]} athletes
 * @param {number} sled
 * @returns {string}
 */
function checkEligibility(athletes, sled) {
  const teamSize = athletes.length;

  let minSled, maxTotal;

  if (teamSize === 1) {
    minSled = 162;
    maxTotal = 247;
  } else if (teamSize === 2) {
    minSled = 170;
    maxTotal = 390;
  } else if (teamSize === 4) {
    minSled = 210;
    maxTotal = 630;
  } else {
    return "Not Eligible";
  }

  const athletesTotal = athletes.reduce((sum, w) => sum + w, 0);
  const totalWeight = athletesTotal + sled;

  if (sled < minSled) return "Not Eligible";
  if (totalWeight > maxTotal) return "Not Eligible";

  return "Eligible";
}
