// PSEUDOCODE
// function getDueDate(dateStr)
//   parse year, month, day from string
//
//   newMonth = month + 9
//   newYear = year + floor((newMonth - 1) / 12)
//   newMonth = ((newMonth - 1) % 12) + 1
//
//   maxDay = number of days in (newYear, newMonth)
//
//   newDay = min(originalDay, maxDay)
//
//   return formatted string YYYY-MM-DD

/**
 * Returns the date 9 months in the future
 * @param {string} dateStr - Format "YYYY-MM-DD"
 * @returns {string}
 */
function getDueDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);

  // Add 9 months
  let newMonth = month + 9;
  let newYear = year + Math.floor((newMonth - 1) / 12);
  newMonth = ((newMonth - 1) % 12) + 1;

  // Get last day of target month
  const lastDay = new Date(newYear, newMonth, 0).getDate();

  const newDay = Math.min(day, lastDay);

  // Format with leading zeros
  const mm = String(newMonth).padStart(2, "0");
  const dd = String(newDay).padStart(2, "0");

  return `${newYear}-${mm}-${dd}`;
}
