/*
FUNCTION getMeetingTime(schedule):

    FOR hour from 0 to 23:

        SET isAvailableForAll = true

        FOR EACH person in schedule:

            SET personAvailable = false

            FOR EACH [start, end] in person's availability:

                IF hour >= start AND hour + 1 <= end:
                    personAvailable = true
                    BREAK

            IF personAvailable is false:
                isAvailableForAll = false
                BREAK

        IF isAvailableForAll is true:
            RETURN hour

    RETURN "None"
*/

/**
 * Finds the earliest hour where all people are available for a full hour.
 *
 * Each person has a list of availability intervals [start, end],
 * where start is inclusive and end is exclusive.
 *
 * @param {number[][][]} schedule - 3D array of availability windows.
 * @returns {number|string} Earliest meeting start hour, or "None" if no overlap exists.
 */

function getMeetingTime(schedule) {
    for (let hour = 0; hour < 24; hour++) {
        let allAvailable = true;

        for (const person of schedule) {
            let available = false;

            for (const [start, end] of person) {
                if (hour >= start && hour + 1 <= end) {
                    available = true;
                    break;
                }
            }

            if (!available) {
                allAvailable = false;
                break;
            }
        }

        if (allAvailable) return hour;
    }

    return "None";
}
