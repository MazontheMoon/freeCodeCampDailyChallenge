/**
 * Determines the moon phase for a given date using a simplified 28-day lunar cycle.
 *
 * The lunar cycle is divided into four phases:
 * - "New": days 1–7
 * - "Waxing": days 8–14
 * - "Full": days 15–21
 * - "Waning": days 22–28
 *
 * Day 1 of the cycle corresponds to "2000-01-06".
 *
 * @param {string} dateString - The date in "YYYY-MM-DD" format (must not be before 2000-01-06).
 * @returns {"New" | "Waxing" | "Full" | "Waning"} The phase of the moon for that date.
 *
 * @throws {TypeError} If the input is not a valid date string.
 * @throws {RangeError} If the date is before the reference new moon.
 *
 * @example
 * moonPhase("2000-01-06");
 * // Returns: "New"
 *
 * @example
 * moonPhase("2000-01-13");
 * // Returns: "Waxing"
 *
 * @example
 * moonPhase("2000-01-20");
 * // Returns: "Full"
 */
function moonPhase(dateString) {
  const referenceDate = new Date("2000-01-06");

  const targetDate = new Date(dateString);
  if (isNaN(targetDate)) {
    throw new TypeError("Invalid date string.");
  }

  if (targetDate < referenceDate) {
    throw new RangeError("Date cannot be before 2000-01-06.");
  }

  // Calculate difference in days
  const msPerDay = 24 * 60 * 60 * 1000;
  const daysDiff = Math.floor((targetDate - referenceDate) / msPerDay);

  // Moon day in the 28-day cycle (1-28)
  const cycleDay = (daysDiff % 28) + 1;

  if (cycleDay >= 1 && cycleDay <= 7) return "New";
  if (cycleDay >= 8 && cycleDay <= 14) return "Waxing";
  if (cycleDay >= 15 && cycleDay <= 21) return "Full";
  return "Waning";
}