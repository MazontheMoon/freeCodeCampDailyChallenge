/*
PSEUDOCODE:

function isMirrorImage(str1, str2):

    define mirrorMap

    reversed = reverse str1

    result = ""

    for each char in reversed:
        if char not in mirrorMap:
            return false

        result += mirrorMap[char]

    return result == str2
*/

/**
 * Checks if str2 is the mirror image of str1.
 *
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
function isMirrorImage(str1, str2) {
    const mirrorMap = {
        // symmetric
        "W":"W","T":"T","Y":"Y","U":"U","I":"I","O":"O","H":"H","A":"A","X":"X","V":"V","M":"M",
        "w":"w","o":"o","x":"x","v":"v",
        "0":"0","8":"8","=":"=","+":"+",
        ":":":","|":"|","-":"-","_":"_","*":"*","^":"^","!":"!",".":"."," ":" ",

        // pairs
        "[":"]", "]":"[",
        "{":"}", "}":"{",
        "<":">", ">":"<",
        "b":"d", "d":"b",
        "p":"q", "q":"p",
        "(":")", ")":"("
    };

    const reversed = [...str1].reverse();

    let result = "";

    for (const char of reversed) {
        if (!(char in mirrorMap)) return false;
        result += mirrorMap[char];
    }

    return result === str2;
}
