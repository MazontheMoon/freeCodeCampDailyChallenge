// PSEUDOCODE:
// function getJetLagHours(departure, arrival, duration, direction)
//     offsets = map of city → UTC
//     diff = abs(offset[arrival] - offset[departure])
//     multiplier = 1.5 if east else 1.0
//     jetLag = diff + (duration * 0.1 * multiplier)
//     return rounded to 1 decimal place

/**
 * Calculates jet lag hours based on cities, flight duration, and direction.
 *
 * @param {string} departure
 * @param {string} arrival
 * @param {number} duration
 * @param {string} direction - "east" or "west"
 * @returns {number}
 */
function getJetLagHours(departure, arrival, duration, direction) {
    const offsets = {
        "Los Angeles": -8,
        "New York": -5,
        "London": 0,
        "Istanbul": 3,
        "Dubai": 4,
        "Hong Kong": 8,
        "Tokyo": 9
    };

    const diff = Math.abs(offsets[arrival] - offsets[departure]);
    const multiplier = direction === "east" ? 1.5 : 1.0;

    const jetLag = diff + (duration * 0.1 * multiplier);

    return Number(jetLag.toFixed(1));
}
