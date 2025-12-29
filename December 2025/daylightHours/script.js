// PSEUDOCODE:
// 1. Create a table that maps latitudes to daylight hours
// 2. Get all the latitude values from the table
// 3. Assume the first latitude is the closest match
// 4. Loop through each latitude in the table
//    - Calculate the absolute difference between the input latitude and the table latitude
//    - If this difference is smaller than the current closest difference,
//      update the closest latitude
// 5. Return the daylight hours for the closest latitude

/**
 * Returns an approximate number of daylight hours on December 21st
 * based on the given latitude. If the latitude does not exactly match
 * the table, the closest latitude value is used.
 *
 * @param {number} latitude - A number between -90 and 90
 * @returns {number} Approximate daylight hours on the solstice
 */

function daylightHours(latitude) {
  const daylightTable = {
    "-90": 24,
    "-75": 23,
    "-60": 21,
    "-45": 15,
    "-30": 13,
    "-15": 12,
    "0": 12,
    "15": 11,
    "30": 10,
    "45": 9,
    "60": 6,
    "75": 2,
    "90": 0
  };

  const latitudes = Object.keys(daylightTable).map(Number);

  let closestLatitude = latitudes[0];

  for (let i = 0; i < latitudes.length; i++) {
    if (
      Math.abs(latitude - latitudes[i]) <
      Math.abs(latitude - closestLatitude)
    ) {
      closestLatitude = latitudes[i];
    }
  }

  return daylightTable[closestLatitude];
}
