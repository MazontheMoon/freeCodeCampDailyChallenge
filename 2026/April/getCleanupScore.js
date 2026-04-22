/*
PSEUDOCODE:

function getCleanupScore(items):
    define baseValues map

    total = 0
    prevItem = null
    streak = 0

    for i from 0 to items.length - 1:
        item = items[i]
        isRare = item is array

        if rare:
            base = item[1]
            streak = 0
            prevItem = null
        else:
            base = baseValues[item]

            if item == prevItem:
                streak += 1
            else:
                streak = 0

            prevItem = item

        value = base + streak (only applies to non-rare)

        multiplier = 1
        if (i + 1) % 5 == 0:
            multiplier = ((i + 1) / 5) + 1

        total += value * multiplier

    return total
*/

/**
 * Calculates total cleanup score based on rules.
 *
 * @param {Array} items
 * @returns {number}
 */
function getCleanupScore(items) {
    const baseValues = {
        bottle: 10,
        can: 6,
        bag: 8,
        tire: 35,
        straw: 4,
        cardboard: 3,
        newspaper: 3,
        shoe: 12,
        electronics: 25,
        battery: 18,
        mattress: 38
    };

    let total = 0;
    let prevItem = null;
    let streak = 0;

    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let base, value;

        if (Array.isArray(item)) {
            // Rare item
            base = item[1];
            value = base;

            prevItem = null;
            streak = 0;
        } else {
            base = baseValues[item];

            if (item === prevItem) {
                streak++;
            } else {
                streak = 0;
            }

            value = base + streak;
            prevItem = item;
        }

        let multiplier = 1;
        if ((i + 1) % 5 === 0) {
            multiplier = (i + 1) / 5 + 1;
        }

        total += value * multiplier;
    }

    return total;
}
