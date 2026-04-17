/*
PSEUDOCODE:

function decode(message):
    key = "VLHCGMDLNH"

    result = ""
    keyIndex = 0

    for each char in message:
        if space:
            append space
            continue

        encodedValue = char - 'A'
        shift = (key[keyIndex % key.length] - 'A') + 1

        decodedValue = (encodedValue - shift + 26) % 26
        append decoded char

        keyIndex++

    return result
*/

function decode(message) {
    const key = "VLHCGMDLNH";

    let result = "";
    let keyIndex = 0;

    for (let char of message) {
        if (char === " ") {
            result += " ";
            continue;
        }

        const encoded = char.charCodeAt(0) - 65;
        const shift = key[keyIndex % key.length].charCodeAt(0) - 64;

        const decoded = (encoded - shift + 26) % 26;
        result += String.fromCharCode(decoded + 65);

        keyIndex++;
    }

    return result;
}
