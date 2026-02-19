/**
 * Determines avalanche risk.
 *
 * @param {string} snowDepth
 * @param {string} slope
 * @returns {string}
 */
function avalancheRisk(snowDepth, slope) {
  if (slope === "Gentle") {
    return "Safe";
  }

  if (snowDepth === "Shallow") {
    return "Safe";
  }

  return "Risky";
}

