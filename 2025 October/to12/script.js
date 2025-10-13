
/**
 * Converts a time from 24-hour format ("HHMM") to 12-hour format with AM/PM.
 *
 * @param {string} time - A four-digit string representing time in 24-hour format ("0000" to "2359").
 * @returns {string} The equivalent time in 12-hour format with AM or PM (e.g., "12:00 AM", "1:15 PM").
 *
 * @example
 * to12("0000"); // "12:00 AM"
 * to12("0930"); // "9:30 AM"
 * to12("1200"); // "12:00 PM"
 * to12("1545"); // "3:45 PM"
 * to12("2359"); // "11:59 PM"
 */
function to12(time) {
  const hours24 = parseInt(time.slice(0, 2), 10);
  const minutes = time.slice(2);
  
  const period = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 || 12; // converts "00" -> 12, "13" -> 1, etc.

  return `${hours12}:${minutes} ${period}`;
}