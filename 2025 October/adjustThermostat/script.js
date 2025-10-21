
/**
 * Adjusts the thermostat based on the current temperature in Fahrenheit 
 * and a target temperature in Celsius.
 *
 * Converts the target Celsius temperature to Fahrenheit, then determines 
 * whether to heat, cool, or hold based on the difference.
 * Returns the number of degrees (in Fahrenheit) to adjust by, rounded to one decimal place.
 *
 * @param {number} currentF - The current room temperature in Fahrenheit.
 * @param {number} targetC - The target room temperature in Celsius.
 * @returns {string} - Returns one of:
 *   - "Heat: X degrees Fahrenheit" if heating is needed.
 *   - "Cool: X degrees Fahrenheit" if cooling is needed.
 *   - "Hold" if the temperature is already at the target.
 *
 * @example
 * adjustThermostat(68, 22); // "Heat: 3.6 degrees Fahrenheit"
 * @example
 * adjustThermostat(75, 22); // "Cool: 3.4 degrees Fahrenheit"
 * @example
 * adjustThermostat(71.6, 22); // "Hold"
 */
function adjustThermostat(currentF, targetC) {
  const targetF = (targetC * 1.8) + 32;
  const diff = +(targetF - currentF).toFixed(1);

  if (diff > 0) {
    return `Heat: ${diff.toFixed(1)} degrees Fahrenheit`;
  } else if (diff < 0) {
    return `Cool: ${Math.abs(diff).toFixed(1)} degrees Fahrenheit`;
  } else {
    return "Hold";
  }
}