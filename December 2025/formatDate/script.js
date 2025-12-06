// ---------------------------------------------------------
// PSEUDOCODE
// ---------------------------------------------------------
// 1. Create an object that maps full month names to their
//    corresponding two-digit month numbers.
// 2. Split the incoming date string into its parts:
//    - Extract the month name
//    - Extract the day (removing the comma)
//    - Extract the year
// 3. Use the month name to look up the month number.
// 4. Make sure the day is two digits (add a leading zero if needed).
// 5. Combine the year, month number, and day into the
//    final "YYYY-MM-DD" format.
// 6. Return the formatted string.
//

/**
 * Converts a date from the format "Month day, year"
 * into the format "YYYY-MM-DD".
 *
 * The month in the input must be a full English month name,
 * such as "January", "February", etc.
 * The returned month and day are always two digits.
 *
 * @param {string} dateString - A date in the format "Month day, year".
 * @returns {string} A formatted date string in the format "YYYY-MM-DD".
 */
function formatDate(dateString) {
  // Map month names to two-digit month numbers
  const monthMap = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12"
  };

  // Split the input date into parts
  const [monthName, dayWithComma, year] = dateString.split(" ");

  // Remove the comma from the day (e.g., "6," → "6")
  const day = dayWithComma.replace(",", "");

  // Look up the two-digit month number
  const month = monthMap[monthName];

  // Pad the day with a leading zero if needed
  const paddedDay = day.padStart(2, "0");

  // Build final output format
  return `${year}-${month}-${paddedDay}`;
}

// Example:
console.log(formatDate("December 6, 2025")); // → "2025-12-06"