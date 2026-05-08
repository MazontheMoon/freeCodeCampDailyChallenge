/*
PSEUDOCODE:

function medicationReminder(meds, currentTime):

    current = convert to minutes
    best = null

    for each medication:
        if fixed schedule:
            find next scheduled time
        else if every 4 hours:
            keep adding 4h until > current

        diff = next - current

        if diff is smallest:
            store medication + diff

    convert diff → hours + minutes
    return formatted string
*/

/**
 * Returns the next medication and time remaining.
 *
 * @param {Array<[string, string]>} meds
 * @param {string} currentTime
 * @returns {string}
 */
function medicationReminder(meds, currentTime) {

    const toMinutes = (t) => {
        const [h, m] = t.split(":").map(Number);
        return h * 60 + m;
    };

    const current = toMinutes(currentTime);

    const schedules = {
        "Deployxitrin": ["08:00", "16:00"],
        "Debuggamanizole": ["07:00", "13:00", "21:00"]
    };

    let bestName = "";
    let minDiff = Infinity;

    for (const [name, lastTaken] of meds) {

        let nextTime;

        if (name === "Mergeflictamine") {
            // every 4 hours
            nextTime = toMinutes(lastTaken);

            while (nextTime <= current) {
                nextTime += 240;
            }
        } else {
            // fixed schedule
            const times = schedules[name].map(toMinutes);

            nextTime = null;

            for (const t of times) {
                if (t > current) {
                    nextTime = t;
                    break;
                }
            }

            if (nextTime === null) {
                nextTime = times[0] + 1440;
            }
        }

        let diff = nextTime - current;

        if (diff < minDiff) {
            minDiff = diff;
            bestName = name;
        }
    }

    const hours = Math.floor(minDiff / 60);
    const minutes = minDiff % 60;

    return `${bestName} in ${hours}h ${minutes}m`;
}
