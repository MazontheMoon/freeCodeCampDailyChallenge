/*
PSEUDOCODE

1. Calculate the daylight hours using the latitude formula.
2. Round the daylight hours to the nearest even number.
3. Calculate the number of nighttime hours.
4. Calculate sunrise by dividing the nighttime hours by 2.
5. Calculate sunset as sunrise + daylight hours.
6. Create an empty string.
7. Loop through each hour from 0 to 23:
    a. If the hour is between sunrise (inclusive) and sunset (exclusive),
       add a sun emoji.
    b. Otherwise add a moon emoji.
8. Return the completed string.
*/

/**
 * Returns a 24-hour representation of daylight and nighttime
 * for the summer solstice at the given latitude.
 *
 * @param {number} latitude - Latitude between -90 and 90.
 * @returns {string} A 24-character string of ☀️ and 🌑 emojis.
 */
function getDaytimeHours(latitude) {

    // Calculate daylight hours
    let daylightHours = 12 + (latitude / 90) * 12;

    // Round to nearest even number
    daylightHours = Math.round(daylightHours / 2) * 2;

    const nighttimeHours = 24 - daylightHours;

    const sunrise = nighttimeHours / 2;
    const sunset = sunrise + daylightHours;

    let result = "";

    for (let hour = 0; hour < 24; hour++) {

        if (hour >= sunrise && hour < sunset) {
            result += "☀️";
        } else {
            result += "🌑";
        }

    }

    return result;
}
