/*
PSEUDOCODE:

function isInCrossword(char):
    convert char to 8-bit binary string
    reversed = reverse(binary)

    for each row:
        if row contains binary or reversed:
            return true

    for each column:
        build column string
        if column contains binary or reversed:
            return true

    return false
*/

/**
 * Checks if a character's 8-bit binary appears in grid.
 *
 * @param {string} char
 * @returns {boolean}
 */
function isInCrossword(char) {
    const grid = [
        [0,1,0,0,0,0,0,1],
        [0,1,1,0,1,1,1,1],
        [0,1,0,0,0,1,0,0],
        [0,1,1,0,0,1,0,1],
        [0,1,0,1,0,0,1,0],
        [0,1,0,1,0,1,0,0],
        [0,1,1,0,1,0,0,0],
        [1,0,1,0,1,1,1,0]
    ];

    const binary = char.charCodeAt(0)
        .toString(2)
        .padStart(8, "0");

    const reversed = binary.split("").reverse().join("");

    // Check rows
    for (const row of grid) {
        const rowStr = row.join("");
        if (rowStr.includes(binary) || rowStr.includes(reversed)) {
            return true;
        }
    }

    // Check columns
    for (let col = 0; col < 8; col++) {
        let colStr = "";
        for (let row = 0; row < 8; row++) {
            colStr += grid[row][col];
        }

        if (colStr.includes(binary) || colStr.includes(reversed)) {
            return true;
        }
    }

    return false;
}
