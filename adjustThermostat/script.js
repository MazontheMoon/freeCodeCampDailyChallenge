/*
Challenge - Thermostat Adjuster

Given the current temperature of a room and a target temperature, return a string indicating how to adjust the room temperature based on these constraints:

- Return "heat" if the current temperature is below the target.
- Return "cool" if the current temperature is above the target.
- Return "hold" if the current temperature is equal to the target.
*/

/**
 * Returns string to indicate the needed action.
 *
 * @param {number} temp - current room temperature
 * @param {number} target - target room temperature
 * @return {string} action to perform based if criteria met.
 */

function adjustThermostat(temp, target) {
    if(temp < target){
      return "heat";
    } else if (temp == target){
        return "hold";
    } else {
      return "cool";
    }
}