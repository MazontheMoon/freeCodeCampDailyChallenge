// PSEUDOCODE
// --------------------------------------
// INPUT: miles (number, non-negative)
// PROCESS:
//   1. Multiply miles by 1.60934 to convert to kilometers.
//   2. Round the result to two decimal places.
// OUTPUT: kilometers (number, rounded to two decimals)

/**
 * Converts a distance in miles to kilometers.
 *
 * 1 mile = 1.60934 kilometers.
 * The result is rounded to two decimal places.
 *
 * @param {number} miles - A non-negative distance in miles.
 * @returns {number} The equivalent distance in kilometers, rounded to two decimals.
 */
function convertToKm(miles) {
  const km = miles * 1.60934;
  return Number(km.toFixed(2));
}
