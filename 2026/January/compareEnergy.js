/*
FUNCTION compareEnergy(caloriesBurned, wattHoursUsed)

  Convert caloriesBurned to joules
  Convert wattHoursUsed to joules

  IF workout joules is greater than device joules
    RETURN "Workout"
  ELSE IF device joules is greater than workout joules
    RETURN "Devices"
  ELSE
    RETURN "Equal"
  END IF

END FUNCTION
*/
/**
 * Compares the energy used by a workout and electronic devices.
 *
 * Converts Calories and watt-hours into joules and determines which
 * one used more energy.
 *
 * @param {number} caloriesBurned - The number of Calories burned during the workout.
 * @param {number} wattHoursUsed - The number of watt-hours used by electronic devices.
 * @returns {string} "Workout", "Devices", or "Equal" based on energy usage.
 */

function compareEnergy(caloriesBurned, wattHoursUsed) {
  const workoutJoules = caloriesBurned * 4184;
  const deviceJoules = wattHoursUsed * 3600;

  if (workoutJoules > deviceJoules) {
    return "Workout";
  } else if (deviceJoules > workoutJoules) {
    return "Devices";
  } else {
    return "Equal";
  }
}
