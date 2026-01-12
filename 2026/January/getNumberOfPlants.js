/*
PSEUDOCODE:
- Convert the field size to square meters:
    - If unit is "acres", multiply by 4046.86
    - If unit is "hectares", multiply by 10000
- Create a lookup table for crop space requirements
- Get the space needed for the given crop
- Divide total field area by space per plant
- Round the result down to the nearest whole number
- Return the result
*/

/**
 * Calculates how many plants of a given crop can fit in a field.
 *
 * @param {number} fieldSize - The size of the field
 * @param {string} unit - The unit of the field size ("acres" or "hectares")
 * @param {string} crop - The type of crop
 * @returns {number} The maximum number of plants that fit in the field
 */

function getNumberOfPlants(fieldSize, unit, crop) {
  // Convert field size to square meters
  let areaInSquareMeters;

  if (unit === "acres") {
    areaInSquareMeters = fieldSize * 4046.86;
  } else if (unit === "hectares") {
    areaInSquareMeters = fieldSize * 10000;
  }

  // Space required per plant (in square meters)
  const cropSpace = {
    corn: 1,
    wheat: 0.1,
    soybeans: 0.5,
    tomatoes: 0.25,
    lettuce: 0.2
  };

  const spacePerPlant = cropSpace[crop];

  // Calculate number of plants and round down
  return Math.floor(areaInSquareMeters / spacePerPlant);
}
