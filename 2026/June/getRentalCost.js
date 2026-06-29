/*
PSEUDOCODE

1. Store the pricing information for each rental tier.
2. Convert the rental and return timestamps into Date objects.
3. Calculate the due date:
    a. Copy the rental date.
    b. Add the rental tier (1, 3 or 7 days).
    c. Set the due time to exactly 12:00 PM UTC.
4. Get the base rental cost.
5. If the return date is after the due date:
    a. Calculate how many milliseconds late the rental is.
    b. Convert milliseconds into days.
    c. Round up because any part of a day counts as a full late day.
    d. Add the appropriate late fee.
6. Return the total formatted as currency with two decimal places.
*/

/**
 * Calculates the total rental cost including any late fees.
 *
 * Rentals are due by 12:00 PM UTC on the final rental day.
 * Any portion of a late day incurs a full day's late fee.
 *
 * @param {string} rentalTimestamp - UTC ISO timestamp when the item was rented.
 * @param {string} returnTimestamp - UTC ISO timestamp when the item was returned.
 * @param {number} rentalTier - Rental duration in days (1, 3, or 7).
 * @returns {string} The total rental cost formatted as "$D.CC".
 */
function getRentalCost(rentalTimestamp, returnTimestamp, rentalTier) {

    const pricing = {
        1: { base: 4.99, late: 3.99 },
        3: { base: 3.99, late: 2.99 },
        7: { base: 2.99, late: 0.99 }
    };

    const rentalDate = new Date(rentalTimestamp);
    const returnDate = new Date(returnTimestamp);

    // Copy rental date
    const dueDate = new Date(rentalDate);

    // Add rental period
    dueDate.setUTCDate(dueDate.getUTCDate() + rentalTier);

    // Due by 12:00 PM UTC
    dueDate.setUTCHours(12, 0, 0, 0);

    let total = pricing[rentalTier].base;

    if (returnDate > dueDate) {

        const millisecondsLate = returnDate - dueDate;

        const millisecondsPerDay = 1000 * 60 * 60 * 24;

        const lateDays = Math.ceil(millisecondsLate / millisecondsPerDay);

        total += lateDays * pricing[rentalTier].late;
    }

    return `$${total.toFixed(2)}`;
}
