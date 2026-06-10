// PSEUDOCODE:
// function getItineraryCount(stops)
//     n = length
//     factorial = n!
//     return factorial * (2n - 3)

/**
 * Calculates number of valid itinerary arrangements.
 *
 * @param {string[]} stops
 * @returns {number}
 */
function getItineraryCount(stops) {
    const n = stops.length;

    const factorial = (num) => {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    };

    return factorial(n) * (2 * n - 3);
}