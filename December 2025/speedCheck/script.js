/*
PSEUDOCODE

FUNCTION speedCheck(speedMph, speedLimitKph)
    CONVERT speed from MPH to KPH
        speedKph = speedMph * 1.60934

    CALCULATE how much over the limit the speed is
        difference = speedKph - speedLimitKph

    IF difference <= 0
        RETURN "Not Speeding"
    ELSE IF difference <= 5
        RETURN "Warning"
    ELSE
        RETURN "Ticket"
END FUNCTION
*/

/**
 * Determines whether a driver is speeding based on their speed
 * in miles per hour and the speed limit in kilometers per hour.
 *
 * Rules:
 * - 1 mile = 1.60934 kilometers
 * - At or below the speed limit → "Not Speeding"
 * - Up to 5 KPH over the limit → "Warning"
 * - More than 5 KPH over the limit → "Ticket"
 *
 * @param {number} speedMph - The driver's speed in miles per hour
 * @param {number} speedLimitKph - The speed limit in kilometers per hour
 * @returns {string} The result of the speed check
 *
 * @example
 * speedCheck(50, 80);
 * // returns "Not Speeding"
 *
 * @example
 * speedCheck(55, 80);
 * // returns "Warning"
 *
 * @example
 * speedCheck(60, 80);
 * // returns "Ticket"
 */
function speedCheck(speedMph, speedLimitKph) {
  const speedKph = speedMph * 1.60934;
  const difference = speedKph - speedLimitKph;

  if (difference <= 0) {
    return "Not Speeding";
  } else if (difference <= 5) {
    return "Warning";
  } else {
    return "Ticket";
  }
}
