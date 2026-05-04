/*
PSEUDOCODE:

function getGreeting(time):
    hour = parse hour from string

    if hour >= 5 and hour < 12:
        return "Good morning"
    else if hour >= 12 and hour < 18:
        return "Good afternoon"
    else if hour >= 18 and hour < 22:
        return "Good evening"
    else:
        return "Good night"
*/

/**
 * Returns a greeting based on time of day.
 *
 * @param {string} time - "HH:MM"
 * @returns {string}
 */
function getGreeting(time) {
    const hour = parseInt(time.split(":")[0], 10);

    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 18) return "Good afternoon";
    if (hour >= 18 && hour < 22) return "Good evening";
    return "Good night";
}
