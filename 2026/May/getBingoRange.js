/*
FUNCTION getBingoRange(letter):
    CONVERT letter to uppercase

    DEFINE mapping of letters to start values:
        B → 1
        I → 16
        N → 31
        G → 46
        O → 61

    IF letter is not in mapping:
        THROW error

    SET start = mapping[letter]
    SET end = start + 14

    CREATE empty array result

    FOR i from start to end:
        ADD i to result

    RETURN result
*/

/**
 * Returns the number range associated with a Bingo letter.
 *
 * Bingo ranges:
 * B → 1–15
 * I → 16–30
 * N → 31–45
 * G → 46–60
 * O → 61–75
 *
 * @param {string} letter - A single Bingo letter (B, I, N, G, O).
 * @returns {number[]} Array of numbers in the corresponding range.
 * @throws {Error} If the letter is invalid.
 */

function getBingoRange(letter) {
    const map = {
        B: 1,
        I: 16,
        N: 31,
        G: 46,
        O: 61
    };

    const upper = letter.toUpperCase();

    if (!map.hasOwnProperty(upper)) {
        throw new Error("Invalid Bingo letter");
    }

    const start = map[upper];
    const end = start + 14;

    return Array.from({ length: 15 }, (_, i) => start + i);
}
