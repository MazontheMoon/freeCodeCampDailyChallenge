// PSEUDOCODE
// function getDayOfWeek(timestamp)
//   create date from timestamp
//
//   get day using UTC method (0–6)
//
//   map number to day name
//
//   return day name

/**
 * Returns day of the week from Unix timestamp (ms)
 * @param {number} timestamp
 * @returns {string}
 */
function getDayOfWeek(timestamp) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const date = new Date(timestamp);

  return days[date.getUTCDay()];
}
