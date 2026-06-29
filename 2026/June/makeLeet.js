/*
PSEUDOCODE

1. Create a mapping object of letters → leet characters.
2. Create an empty result string.
3. Loop through each character in the input string:
    a. If the character exists in the mapping:
        - Append the mapped value to the result.
    b. Otherwise:
        - Append the original character.
4. Return the result string.
*/

/**
 * Converts a lowercase string into 1337 (leet) speak.
 *
 * @param {string} text - Input lowercase string.
 * @returns {string} Leet-translated string.
 */
function makeLeet(text) {

    const leetMap = {
        a: "4",
        e: "3",
        g: "9",
        i: "1",
        l: "1",
        o: "0",
        s: "5",
        t: "7"
    };

    let result = "";

    for (let char of text) {
        result += leetMap[char] ?? char;
    }

    return result;
}
