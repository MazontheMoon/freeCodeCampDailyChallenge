/*
1. Convert startDate string to Date object.
2. Convert endDate string to Date object.

3. Initialize counter = 0.

4. While currentDate <= endDate:
     - Get day of week (0 = Sunday, 6 = Saturday)
     - If day is between 1 and 5:
         increment counter
     - Move to next day

5. Return counter.
*/


/**
 * Counts the number of business days (Monday–Friday) between two dates.
 * Both the start and end dates are included in the count.
 *
 * Dates must be in "YYYY-MM-DD" format.
 *
 * @param {string} startDate - The starting date (inclusive).
 * @param {string} endDate - The ending date (inclusive).
 * @returns {number} The number of business days between the two dates.
 */

function countBusinessDays(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let count = 0;
  let current = new Date(start);

  while (current <= end) {
    const day = current.getDay(); // 0 = Sun, 6 = Sat

    if (day !== 0 && day !== 6) {
      count++;
    }

    current.setDate(current.getDate() + 1);
  }

  return count;
}