/*
FUNCTION sleepDebt(hoursArray, target):

    SET days = length of hoursArray

    CALCULATE totalSlept = sum of hoursArray

    CALCULATE totalTarget = (days + 1) * target

    CALCULATE debt = totalTarget - totalSlept

    IF debt <= 0:
        RETURN 0

    RETURN debt
*/

/**
 * Calculates how many hours of sleep are needed tonight to eliminate sleep debt.
 *
 * The function considers past sleep and includes tonight's sleep
 * in the total target calculation.
 *
 * If you've already met or exceeded the total required sleep,
 * returns 0.
 *
 * @param {number[]} hoursArray - Array of hours slept on previous nights.
 * @param {number} target - Target number of hours per night.
 * @returns {number} Hours needed tonight to eliminate sleep debt.
 */

function sleepDebt(hoursArray, target) {
    const totalSlept = hoursArray.reduce((sum, h) => sum + h, 0);
    const totalTarget = (hoursArray.length + 1) * target;

    const debt = totalTarget - totalSlept;

    return Math.max(0, debt);
}
