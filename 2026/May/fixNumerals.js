/*
FUNCTION fixNumerals(s):

    DEFINE map of Roman → values

    // Step 1: Decode (additive only)
    SET total = 0

    FOR each character in s:
        ADD its value to total

    // Step 2: Re-encode using standard Roman rules
    DEFINE list of value-symbol pairs (including subtractive forms):
        1000 → "M"
        900  → "CM"
        500  → "D"
        400  → "CD"
        ...
        1    → "I"

    SET result = ""

    FOR each (value, symbol):
        WHILE total >= value:
            APPEND symbol to result
            SUBTRACT value from total

    RETURN result
*/

/**
 * Converts malformed additive Roman numerals into standard Roman numeral form.
 *
 * The input uses only additive notation (no subtraction).
 * The output follows standard Roman numeral rules, including subtractive pairs.
 *
 * @param {string} s - Malformed Roman numeral string.
 * @returns {string} Correctly formatted Roman numeral.
 */

function fixNumerals(s) {
    const values = {
        I: 1, V: 5, X: 10, L: 50,
        C: 100, D: 500, M: 1000
    };

    // Step 1: Decode
    let total = 0;
    for (const ch of s) {
        total += values[ch];
    }

    // Step 2: Re-encode
    const romanMap = [
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"],
        [1, "I"]
    ];

    let result = "";

    for (const [val, sym] of romanMap) {
        while (total >= val) {
            result += sym;
            total -= val;
        }
    }

    return result;
}
