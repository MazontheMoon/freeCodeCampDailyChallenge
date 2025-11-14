/**
 * Returns how many days remain until the weekend (Saturday), based on a given date.
 *
 * The weekend is considered Saturday and Sunday.
 * If the given date falls on Saturday or Sunday, it returns:
 *    "It's the weekend!"
 *
 * Otherwise, it returns:
 *    "X days until the weekend."
 * where X is the number of days until Saturday.
 * Uses UTC dates so local timezone does not affect results.
 *
 * @param {string} dateString - A date in the format "YYYY-MM-DD".
 * @returns {string} A message indicating days left until the weekend.
 */
function daysUntilWeekend(dateString) {
  // Parse the date as UTC so timezone does not affect the day calculation
  const date = new Date(dateString + "T00:00:00Z");
  const day = date.getUTCDay(); // 0 = Sunday, 6 = Saturday

  // If Saturday or Sunday
  if (day === 6 || day === 0) {
    return "It's the weekend!";
  }

  // Days until Saturday (6)
  const daysUntilSaturday = 6 - day;

  return daysUntilSaturday === 1
    ? "1 day until the weekend."
    : `${daysUntilSaturday} days until the weekend.`;
}
