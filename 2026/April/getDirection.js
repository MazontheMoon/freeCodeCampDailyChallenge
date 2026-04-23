/*
PSEUDOCODE:

function getDirection(t1, t2):

    convert t1 → minutes1
    convert t2 → minutes2

    forward = (minutes2 - minutes1 + 1440) % 1440
    backward = (minutes1 - minutes2 + 1440) % 1440

    if forward < backward:
        return "forward"
    else if backward < forward:
        return "backward"
    else:
        return "equal"
*/

/**
 * Determines whether moving forward or backward in time is shorter.
 *
 * @param {string} t1 - start time "HH:MM"
 * @param {string} t2 - target time "HH:MM"
 * @returns {"forward" | "backward" | "equal"}
 */
function getDirection(t1, t2) {
    const toMinutes = (t) => {
        const [h, m] = t.split(":").map(Number);
        return h * 60 + m;
    };

    const m1 = toMinutes(t1);
    const m2 = toMinutes(t2);

    const forward = (m2 - m1 + 1440) % 1440;
    const backward = (m1 - m2 + 1440) % 1440;

    if (forward < backward) return "forward";
    if (backward < forward) return "backward";
    return "equal";
}
