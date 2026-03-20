
/*
PSEUDOCODE

function getShadow(time):

    parse hours and minutes

    convert time to decimal hours (e.g. 17:30 → 17.5)

    if time < 6 OR time >= 18:
        return "No shadow"

    if time == 12:
        return "No shadow"

    distanceFromNoon = absolute value of (time - 12)

    length = (distanceFromNoon) ^ 3

    if time < 12:
        direction = "west"
    else:
        direction = "east"

    return "(length)ft (direction)"
*/

/**
 * Calculates the shadow cast by a 4-foot pole at a given time on the equinox.
 *
 * Rules:
 * - Sun rises at 06:00 (east) and sets at 18:00 (west)
 * - No shadow before 06:00, at/after 18:00, or at 12:00
 * - Shadow length = (hours from noon)^3
 * - Shadow points opposite the sun
 *
 * @param {string} time - Time in "HH:MM" 24-hour format (30 min increments).
 * @returns {string} Shadow description (e.g. "8ft west") or "No shadow".
 */
function getShadow(time) {
  const [hours, minutes] = time.split(":").map(Number);

  const decimalTime = hours + minutes / 60;

  if (decimalTime < 6 || decimalTime >= 18 || decimalTime === 12) {
    return "No shadow";
  }

  const distance = Math.abs(decimalTime - 12);
  const length = Math.pow(distance, 3);

  const direction = decimalTime < 12 ? "west" : "east";

  return `${length}ft ${direction}`;
}