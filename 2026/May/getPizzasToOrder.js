/*
FUNCTION getPizzasToOrder(hoursArray):

    SET totalSlices = 0

    FOR each hours in hoursArray:

        CALCULATE slices = hours / 3

        ROUND slices UP to nearest whole number

        IF slices < 2:
            SET slices = 2

        ADD slices to totalSlices

    CALCULATE pizzas = totalSlices / 8

    RETURN pizzas rounded UP
*/
/**
 * Calculates the number of pizzas to order based on hours worked.
 *
 * Rules:
 * - Each 3 hours worked earns 1 slice
 * - Slice counts are rounded up per person
 * - Minimum 2 slices per person
 * - Each pizza has 8 slices
 *
 * @param {number[]} hoursArray - Hours worked per person.
 * @returns {number} Number of pizzas to order.
 */
function getPizzasToOrder(hoursArray) {
    let totalSlices = 0;

    for (const hours of hoursArray) {
        let slices = Math.ceil(hours / 3);
        slices = Math.max(2, slices);
        totalSlices += slices;
    }

    return Math.ceil(totalSlices / 8);
}
