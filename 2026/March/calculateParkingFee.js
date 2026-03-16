/*
PSEUDOCODE

function calculateParkingFee(entryTime, exitTime):

    split entryTime into entryHour and entryMinute
    split exitTime into exitHour and exitMinute

    convert entry time to total minutes since midnight
    convert exit time to total minutes since midnight

    set overnight to false

    if exitMinutes < entryMinutes:
        add 24 hours (1440 minutes) to exitMinutes
        set overnight to true

    calculate parkedMinutes = exitMinutes - entryMinutes

    calculate hoursParked = ceiling(parkedMinutes / 60)

    cost = hoursParked * 3

    if overnight is true:
        cost = cost + 10

    if cost < 5:
        cost = 5

    return "$" + cost
*/

/**
 * Calculates the cost of parking between two times.
 *
 * Rules:
 * - $3 per hour parked
 * - Partial hours round up to the next full hour
 * - If the parking passes midnight, a $10 overnight fee is added
 * - Minimum charge is $5
 *
 * @param {string} entryTime - Parking entry time in "HH:MM" 24-hour format.
 * @param {string} exitTime - Parking exit time in "HH:MM" 24-hour format.
 * @returns {string} Total parking cost formatted like "$5".
 */
 
 function calculateParkingFee(entryTime, exitTime) {
  const [entryHour, entryMinute] = entryTime.split(":").map(Number);
  const [exitHour, exitMinute] = exitTime.split(":").map(Number);

  let entryMinutes = entryHour * 60 + entryMinute;
  let exitMinutes = exitHour * 60 + exitMinute;

  let overnight = false;

  if (exitMinutes < entryMinutes) {
    exitMinutes += 24 * 60;
    overnight = true;
  }

  const parkedMinutes = exitMinutes - entryMinutes;
  const hoursParked = Math.ceil(parkedMinutes / 60);

  let cost = hoursParked * 3;

  if (overnight) {
    cost += 10;
  }

  if (cost < 5) {
    cost = 5;
  }

  return `$${cost}`;
}