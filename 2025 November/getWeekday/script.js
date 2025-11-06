/**
 * Returns the day of the week for a given date string in the format YYYY-MM-DD.
 * Time zones are ignored — the date is treated as UTC.
 *
 * @param {string} dateString - The date in YYYY-MM-DD format.
 * @returns {string} The name of the weekday ("Sunday"–"Saturday").
 *
 * @example
 * getWeekday("1988-11-02"); // "Wednesday"
 * getWeekday("2001-11-04"); // "Sunday"
 */
function getWeekday(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  
  // Use UTC to avoid timezone differences
  const date = new Date(Date.UTC(year, month - 1, day));
  
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return weekdays[date.getUTCDay()];
}
