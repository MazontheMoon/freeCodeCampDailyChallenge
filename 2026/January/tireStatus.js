*
PSEUDOCODE:
- Take an array of four tire pressures in psi
- Take an array with two numbers: minimum and maximum pressure in bar
- Convert the minimum and maximum values from bar to psi
- Create an empty array to store the status of each tire
- Loop through each tire pressure:
    - If the pressure is less than the minimum psi:
        - Add "Low" to the result array
    - Else if the pressure is greater than the maximum psi:
        - Add "High" to the result array
    - Else:
        - Add "Good" to the result array
- Return the result array
*/

/**
 * Evaluates the pressure status of four vehicle tires.
 *
 * Tire pressures are given in psi, while the acceptable
 * pressure range is provided in bar.
 *
 * 1 bar = 14.5038 psi
 *
 * @param {number[]} pressures - An array of four tire pressures in psi
 * @param {number[]} range - An array containing [minBar, maxBar]
 * @returns {string[]} An array describing each tire's status:
 * "Low", "Good", or "High"
 */

function tireStatus(pressures, range) {
  const BAR_TO_PSI = 14.5038;

  const minPsi = range[0] * BAR_TO_PSI;
  const maxPsi = range[1] * BAR_TO_PSI;

  let result = [];

  for (let i = 0; i < pressures.length; i++) {
    const psi = pressures[i];

    if (psi < minPsi) {
      result.push("Low");
    } else if (psi > maxPsi) {
      result.push("High");
    } else {
      result.push("Good");
    }
  }

  return result;
}
